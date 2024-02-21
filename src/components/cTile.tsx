import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import { CData, SPRData } from "../interfaces";
import { palette } from "../palette";

import styles from "./tile.module.css";

const TILE_WIDTH = 16;
const TILE_HEIGHT = 16;
const CORNER_WIDTH = TILE_WIDTH / 2;
const CORNER_HEIGHT = TILE_HEIGHT / 2;

interface CTileProps {
    className?: string;
    data: CData | SPRData | null;
    index: number;
    onLoad?: () => void;
}

function getPixels(romData: CData | SPRData, tileIndex: number): number[][] {
    const pixels = [];

    if (romData.fileType === "C") {
        const startIndex = tileIndex * 64;
        const endIndex = (tileIndex + 1) * 64;

        for (let i = startIndex; i < endIndex; i += 2) {
            const plane0 = romData.c1Data[i];
            const plane1 = romData.c1Data[i + 1];
            const plane2 = romData.c2Data[i];
            const plane3 = romData.c2Data[i + 1];

            for (let b = 0; b < 8; ++b) {
                let paletteIndex = 0;
                paletteIndex |= (plane0 >> b) & 1;
                paletteIndex |= ((plane1 >> b) & 1) << 1;
                paletteIndex |= ((plane2 >> b) & 1) << 2;
                paletteIndex |= ((plane3 >> b) & 1) << 3;

                pixels.push(palette[paletteIndex]);
            }
        }
    } else {
        const startIndex = tileIndex * 128;
        const endIndex = (tileIndex + 1) * 128;

        // the planes follow the order 1/0/3/2
        // https://wiki.neogeodev.org/index.php?title=Sprite_graphics_format

        for (let i = startIndex; i < endIndex; i += 4) {
            const plane1 = romData.sprData[i];
            const plane0 = romData.sprData[i + 1];
            const plane3 = romData.sprData[i + 2];
            const plane2 = romData.sprData[i + 3];

            for (let b = 0; b < 8; ++b) {
                let paletteIndex = 0;
                paletteIndex |= (plane0 >> b) & 1;
                paletteIndex |= ((plane1 >> b) & 1) << 1;
                paletteIndex |= ((plane2 >> b) & 1) << 2;
                paletteIndex |= ((plane3 >> b) & 1) << 3;

                pixels.push(palette[paletteIndex]);
            }
        }
    }

    return pixels;
}

function buildCorner(pixelStream: number[][], startIndex: number): number[][][] {
    const rows = [];
    for (let y = 0; y < 8; ++y) {
        const cells = [];
        for (let x = 0; x < 8; ++x) {
            const cornerIndex = y * 8 + x;
            const pixelIndex = startIndex + cornerIndex;

            const color = pixelStream[pixelIndex];

            cells.push(color);
        }

        rows.push(cells);
    }

    return rows;
}

function extractCorners(pixelStream: number[][]): number[][][][] {
    const cornerSize = 8 * 8;

    return [
        buildCorner(pixelStream, 2 * cornerSize), // upper left
        buildCorner(pixelStream, 0 * cornerSize), // upper right
        buildCorner(pixelStream, 3 * cornerSize), // lower left
        buildCorner(pixelStream, 1 * cornerSize) // lower right
    ];
}

function placeData(imageData: ImageData, corner: number[][][]) {
    for (let y = 0; y < CORNER_HEIGHT; ++y) {
        for (let x = 0; x < CORNER_WIDTH; ++x) {
            const index = (y * CORNER_WIDTH + x) * 4;
            const color = corner[y][x];

            for (let c = 0; c < 4; ++c) {
                imageData.data[index + c] = color[c];
            }
        }
    }
}

const CORNER_POSITIONS = [
    // upper left
    [0, 0],
    // upper right
    [8, 0],
    // lower left
    [0, 8],
    // lower right
    [8, 8]
];

function renderTile(corners: number[][][][], context: CanvasRenderingContext2D) {
    corners.forEach((corner, i) => {
        const imageData = context.createImageData(CORNER_WIDTH, CORNER_HEIGHT);
        placeData(imageData, corner);
        context.putImageData(imageData, CORNER_POSITIONS[i][0], CORNER_POSITIONS[i][1]);
    });
}

const CTileCmp: React.StatelessComponent<CTileProps> = ({ className, data, index, onLoad }) => {
    const canvasEl = useRef<HTMLCanvasElement | null>(null);

    if (!data) return null;

    useEffect(() => {
        if (canvasEl && canvasEl.current) {
            const context = canvasEl.current.getContext("2d");

            if (context) {
                canvasEl.current.width = TILE_WIDTH;
                canvasEl.current.height = TILE_HEIGHT;

                const pixelStream = getPixels(data, index);

                const corners = extractCorners(pixelStream);
                renderTile(corners, context);

                if (onLoad) {
                    onLoad();
                }

                setTimeout(() => {
                    if (canvasEl && canvasEl.current) {
                        canvasEl.current.className = classnames(styles.tile, className, styles.rendered);
                    }
                }, 100);
            }
        }
    }, []);

    const classes = classnames(styles.tile, className);
    return <canvas className={classes} ref={canvasEl} />;
};

let CTile = CTileCmp;

if (process.env.NODE_ENV === "production") {
    CTile = React.memo(CTileCmp);
}

export { CTile };
