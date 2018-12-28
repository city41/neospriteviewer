import React, { useRef, useEffect } from "react";
import classnames from "classnames";
import { SData } from "../interfaces";
import { palette } from "../palette";

import styles from "./tile.module.css";

const TILE_WIDTH = 8;
const TILE_HEIGHT = 8;

interface STileProps {
    className?: string;
    data: SData | null;
    index: number;
    onLoad?: () => void;
}

function getPixels(sData: SData, tileIndex: number): number[][][] {
    let startIndex = tileIndex * 32;
    const endIndex = (tileIndex + 1) * 32;

    const pixels: number[][][] = [[], [], [], [], [], [], [], []];

    // get column A
    for (let i = 0; i < 8; ++i) {
        const pixelPair = sData.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        const leftPixelRgb = palette[leftPixelIndex];
        const rightPixelRgb = palette[rightPixelIndex];

        pixels[i][4] = leftPixelRgb;
        pixels[i][5] = rightPixelRgb;
    }

    // get column B
    for (let i = 0; i < 8; ++i) {
        const pixelPair = sData.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        const leftPixelRgb = palette[leftPixelIndex];
        const rightPixelRgb = palette[rightPixelIndex];

        pixels[i][6] = leftPixelRgb;
        pixels[i][7] = rightPixelRgb;
    }

    // get column C
    for (let i = 0; i < 8; ++i) {
        const pixelPair = sData.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        const leftPixelRgb = palette[leftPixelIndex];
        const rightPixelRgb = palette[rightPixelIndex];

        pixels[i][0] = leftPixelRgb;
        pixels[i][1] = rightPixelRgb;
    }

    // get column D
    for (let i = 0; i < 8; ++i) {
        const pixelPair = sData.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        const leftPixelRgb = palette[leftPixelIndex];
        const rightPixelRgb = palette[rightPixelIndex];

        pixels[i][2] = leftPixelRgb;
        pixels[i][3] = rightPixelRgb;
    }

    return pixels;
}

function placeData(imageData: ImageData, tilePixels: number[][][]) {
    for (let y = 0; y < TILE_HEIGHT; ++y) {
        for (let x = 0; x < TILE_WIDTH; ++x) {
            const index = (y * TILE_WIDTH + x) * 4;
            const color = tilePixels[y][x];

            for (let c = 0; c < 4; ++c) {
                imageData.data[index + c] = color[c];
            }
        }
    }
}

function renderTile(pixelData: number[][][], context: CanvasRenderingContext2D) {
    const imageData = context.createImageData(TILE_WIDTH, TILE_HEIGHT);
    placeData(imageData, pixelData);
    context.putImageData(imageData, 0, 0);
}

const STileCmp: React.StatelessComponent<STileProps> = ({ className, data, index, onLoad }) => {
    if (!data) return null;

    const canvasEl = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasEl && canvasEl.current) {
            const context = canvasEl.current.getContext("2d");

            if (context) {
                canvasEl.current.width = TILE_WIDTH;
                canvasEl.current.height = TILE_HEIGHT;

                const pixelData = getPixels(data, index);

                renderTile(pixelData, context);

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
    });

    const classes = classnames(styles.tile, className);
    return <canvas className={classes} ref={canvasEl} />;
};

let STile = STileCmp;

if (process.env.NODE_ENV === "production") {
    STile = React.memo(STileCmp);
}

export { STile };
