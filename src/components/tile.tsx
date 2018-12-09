import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import { CData } from "../interfaces";

import styles from "./tile.module.css";

const TILE_WIDTH = 16;
const TILE_HEIGHT = 16;
const CORNER_WIDTH = TILE_WIDTH / 2;
const CORNER_HEIGHT = TILE_HEIGHT / 2;

const PIXEL_STREAM_LENGTH = 16 * 16;

interface RenderTileProps {
    className?: string;
    cData: CData | null;
    index: number;
}

const step = 256 / 16;
const palette = new Array(15).fill(1, 0, 15).map((_, i) => {
    const value = (i + 1) * step;
    /* return [value * 0.2, value * 0.8, value, 255]; */
    return [value, value, value, 255];
});

palette.unshift([255, 220, 220, 255]);

function getPixels(cData: CData, tileIndex: number) {
    const startIndex = tileIndex * 64;
    const endIndex = (tileIndex + 1) * 64;

    const pixels = [];

    for (let i = startIndex; i < endIndex; i += 2) {
        const plane0 = cData.c1Data[i];
        const plane1 = cData.c1Data[i + 1];
        const plane2 = cData.c2Data[i];
        const plane3 = cData.c2Data[i + 1];

        for (let b = 0; b < 8; ++b) {
            let paletteIndex = 0;
            paletteIndex |= (plane0 >> b) & 1;
            paletteIndex |= ((plane1 >> b) & 1) << 1;
            paletteIndex |= ((plane2 >> b) & 1) << 2;
            paletteIndex |= ((plane3 >> b) & 1) << 3;

            pixels.push(palette[paletteIndex]);
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

const TileCmp: React.StatelessComponent<RenderTileProps> = ({ className, cData, index }) => {
    if (!cData) return null;

    const canvasEl = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasEl && canvasEl.current) {
            const context = canvasEl.current.getContext("2d");

            if (context) {
                canvasEl.current.width = TILE_WIDTH;
                canvasEl.current.height = TILE_HEIGHT;

                const pixelStream = getPixels(cData, index);

                const corners = extractCorners(pixelStream);
                renderTile(corners, context);
                setTimeout(() => {
                    if (canvasEl && canvasEl.current) {
                        canvasEl.current.className = classnames(styles.tile, className, styles.rendered);
                    }
                }, 100);
            }
        }
    });

    const classes = classnames(styles.tile, className);
    return <canvas className={classes} ref={canvasEl} />;
};

let Tile = TileCmp;

if (process.env.NODE_ENV === "production") {
    Tile = React.memo(TileCmp);
}

export { Tile };
