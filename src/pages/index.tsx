import React, { useState } from "react";
import { Header } from "../components/header";
import { Tile } from "../components/tile";
import { CDataLoader } from "../components/cDataLoader";
import { CData } from "../interfaces";

import "./index.css";

function getTileIndices(cData: CData | null) {
    if (!cData) {
        return [];
    }

    // one byte is 1/4th of 8 pixels, so essentially 2 pixels
    // c1 has half the tile data
    // so...
    const numTiles = cData.c1Data.length / (256 / 2) / 2;

    console.log(numTiles, "numTiles");

    return new Array(numTiles).fill(1, 0, numTiles).map((_, i) => i + 0);
}

export default () => {
    const [cData, setCData] = useState<CData | null>(null);
    console.log("cData", cData);

    return (
        <div>
            <Header />
            <CDataLoader onLoad={setCData} />

            {getTileIndices(cData).map((t, i) => (
                <Tile className="tile" cData={cData} index={t} />
            ))}
        </div>
    );
};
