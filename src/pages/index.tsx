import React, { useState } from "react";
import { Tile } from "../components/tile";
import { CDataLoader } from "../components/cDataLoader";
import { CData } from "../interfaces";

import "./index.css";

/* const tiles = new Array(1).fill(1, 0, 15).map((_, i) => i + 70); */
const tiles = new Array(100).fill(1, 0, 100).map((_, i) => i + 0);

function getTileIndices(cData: CData | null) {
    if (!cData) {
        return [];
    }

    // one byte is 1/4th of 8 pixels, so essentially 2 pixels
    // c1 has half the tile data
    // so... length / (256
    const numTiles = Math.min(cData.c1Data.length / (256 / 2) / 2, 1000);

    console.log(numTiles, "numTiles");

    return new Array(numTiles).fill(1, 0, numTiles).map((_, i) => i + 0);
}

export default () => {
    const [cData, setCData] = useState<CData | null>(null);
    console.log("cData", cData);

    return (
        <div>
            <h1>A Neo Geo Sprite Tile Viewer</h1>
            <CDataLoader onLoad={setCData} />

            {getTileIndices(cData).map((t, i) => (
                <Tile key={i} className="tile" cData={cData} index={t} />
            ))}
        </div>
    );
};
