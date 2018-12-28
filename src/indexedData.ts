import { SData, CData } from "./interfaces";

function getIndexStream(data: CData, tileIndex: number): number[] {
    const startIndex = tileIndex * 64;
    const endIndex = (tileIndex + 1) * 64;

    const indices = [];

    for (let i = startIndex; i < endIndex; i += 2) {
        const plane0 = data.c1Data[i];
        const plane1 = data.c1Data[i + 1];
        const plane2 = data.c2Data[i];
        const plane3 = data.c2Data[i + 1];

        for (let b = 0; b < 8; ++b) {
            let paletteIndex = 0;
            paletteIndex |= (plane0 >> b) & 1;
            paletteIndex |= ((plane1 >> b) & 1) << 1;
            paletteIndex |= ((plane2 >> b) & 1) << 2;
            paletteIndex |= ((plane3 >> b) & 1) << 3;

            indices.push(paletteIndex);
        }
    }

    return indices;
}

function buildCorner(pixelStream: number[], startIndex: number): number[][] {
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

function extractCorners(pixelStream: number[]): number[][][] {
    const cornerSize = 8 * 8;

    return [
        buildCorner(pixelStream, 2 * cornerSize), // upper left
        buildCorner(pixelStream, 0 * cornerSize), // upper right
        buildCorner(pixelStream, 3 * cornerSize), // lower left
        buildCorner(pixelStream, 1 * cornerSize) // lower right
    ];
}

const CORNER_POSITIONS = [
    // upper left
    [0, 0],
    // upper right
    [0, 8],
    // lower left
    [8, 0],
    // lower right
    [8, 8]
];

function cornersToTile(corners: number[][][]): number[][] {
    const finalIndexedTile: number[][] = [[]];

    corners.forEach((corner, i) => {
        const startX = CORNER_POSITIONS[i][0];
        const startY = CORNER_POSITIONS[i][1];

        for (let x = startX; x < startX + 8; ++x) {
            for (let y = startY; y < startY + 8; ++y) {
                finalIndexedTile[x] = finalIndexedTile[x] || [];
                finalIndexedTile[x][y] = corner[x - startX][y - startY];
            }
        }
    });

    return finalIndexedTile;
}

function getIndexedCData(data: CData, tileIndex: number): number[][] {
    const indexStream = getIndexStream(data, tileIndex);
    const corners = extractCorners(indexStream);

    return cornersToTile(corners);
}

function getIndexedSData(data: SData, tileIndex: number): number[][] {
    let startIndex = tileIndex * 32;
    const endIndex = (tileIndex + 1) * 32;

    const indices: number[][] = [[], [], [], [], [], [], [], []];

    // get column A
    for (let i = 0; i < 8; ++i) {
        const pixelPair = data.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        indices[i][4] = leftPixelIndex;
        indices[i][5] = rightPixelIndex;
    }

    // get column B
    for (let i = 0; i < 8; ++i) {
        const pixelPair = data.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        indices[i][6] = leftPixelIndex;
        indices[i][7] = rightPixelIndex;
    }

    // get column C
    for (let i = 0; i < 8; ++i) {
        const pixelPair = data.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        indices[i][0] = leftPixelIndex;
        indices[i][1] = rightPixelIndex;
    }

    // get column D
    for (let i = 0; i < 8; ++i) {
        const pixelPair = data.sData[startIndex++];
        const rightPixelIndex = (pixelPair >> 4) & 0xf;
        const leftPixelIndex = pixelPair & 0xf;

        indices[i][2] = leftPixelIndex;
        indices[i][3] = rightPixelIndex;
    }

    return indices;
}

export function getIndexedData(data: CData | SData, tileIndex: number): number[][] {
    if (data.fileType === "C") {
        return getIndexedCData(data, tileIndex);
    } else {
        return getIndexedSData(data, tileIndex);
    }
}
