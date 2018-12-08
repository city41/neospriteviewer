import React from "react";
import classnames from "classnames";
import { CData } from "../interfaces";

const PIXEL_SIZE = 4;
const PIXEL_STREAM_LENGTH = 16 * 16;

interface RenderTileProps {
    className?: string;
    cData: CData | null;
    index: number;
}

const step = 256 / 16;
const palette = new Array(15).fill(1, 0, 15).map((_, i) => {
    const value = (i + 1) * step;
    return `rgb(${value}, ${value}, ${value})`;
});

palette.unshift("rgba(0, 0, 0, 0)");
console.log("palette", palette);

function getPixels(cData: CData, tileIndex: number) {
    const startIndex = tileIndex * 64;
    const endIndex = (tileIndex + 1) * 64;

    const pixels = [];

    for (let i = startIndex; i < endIndex; i += 2) {
        const plane0 = cData.c1Data[i];
        const plane1 = cData.c1Data[i + 1];
        const plane2 = cData.c2Data[i];
        const plane3 = cData.c2Data[i + 1];

        for (let b = 7; b >= 0; --b) {
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

function buildCorner(pixelStream, startIndex) {
    const rows = [];
    for (let y = 0; y < 8; ++y) {
        const cells = [];
        for (let x = 0; x < 8; ++x) {
            const cornerIndex = y * 8 + x;
            const pixelIndex = startIndex + cornerIndex;

            const color = pixelStream[pixelIndex];

            cells.push(
                <div key={pixelIndex} style={{ display: "inline-block", width: PIXEL_SIZE, height: PIXEL_SIZE, backgroundColor: color }} />
            );
        }

        rows.push(
            <div key={y} style={{ width: 8 * PIXEL_SIZE, height: PIXEL_SIZE }}>
                {cells}
            </div>
        );
    }

    return (
        <div key={startIndex} style={{ display: "inline-block", width: 8 * PIXEL_SIZE, height: 8 * PIXEL_SIZE }}>
            {rows}
        </div>
    );
}

function divideIntoCorners(pixelStream) {
    const cornerSize = 8 * 8;

    return [
        buildCorner(pixelStream, 2 * cornerSize), // upper left
        buildCorner(pixelStream, 0 * cornerSize), // upper right
        buildCorner(pixelStream, 3 * cornerSize), // lower left
        buildCorner(pixelStream, 1 * cornerSize) // lower right
    ];
}

function formTile(corners) {
    return (
        <div style={{ border: "1px solid grey", width: PIXEL_SIZE * 16, height: PIXEL_SIZE * 16 }}>
            <div key="topRow" style={{ width: 16 * PIXEL_SIZE, height: 8 * PIXEL_SIZE }}>
                {corners[1]}
                {corners[0]}
            </div>
            <div key="bottomRow" style={{ width: 16 * PIXEL_SIZE, height: 8 * PIXEL_SIZE }}>
                {corners[3]}
                {corners[2]}
            </div>
        </div>
    );
}

const RenderTile: React.StatelessComponent<RenderTileProps> = ({ className, cData, index }) => {
    if (!cData) return null;

    const pixelStream = getPixels(cData, index);

    if (pixelStream.length !== PIXEL_STREAM_LENGTH) {
        return (
            <div>
                whoops, pixelStream should be {PIXEL_STREAM_LENGTH} but is actually {pixelStream.length}
            </div>
        );
    }

    const corners = divideIntoCorners(pixelStream);
    const tile = formTile(corners);

    const classes = classnames(className);
    return <div className={classes}>{tile}</div>;
};

export { RenderTile };
