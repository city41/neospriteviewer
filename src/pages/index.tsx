import React, { useState } from "react";
import classnames from "classnames";
import { setConfig } from "react-hot-loader";
import { Header } from "../components/header";
import { Tile } from "../components/tile";
import { CDataLoader } from "../components/cDataLoader";
import { NullState } from "../components/nullState";
import { CData } from "../interfaces";

// @ts-ignore: the typing for setConfig doesn't have this prop but it does work
setConfig({ pureSFC: true });

import "./global.css";
import styles from "./index.module.css";

function getTileIndices(cData: CData | null) {
    if (!cData) {
        return null;
    }

    // one byte is 1/4th of 8 pixels, so essentially 2 pixels
    // c1 has half the tile data
    // so...
    const numTiles = process.env.NODE_ENV === "production" ? cData.c1Data.length / (256 / 2) / 2 : 300;

    return new Array(numTiles).fill(1, 0, numTiles).map((_, i) => i + 0);
}

export default () => {
    const [cData, setCData] = useState<CData | null>(null);
    console.log("cData", cData);

    const tileIndices = getTileIndices(cData);

    const tileContainerClasses = classnames(styles.tileContainer, { [styles.hasTiles]: !!tileIndices });

    return (
        <div className={styles.root}>
            <Header className={styles.header}>
                <CDataLoader onLoad={setCData} />
            </Header>

            {!tileIndices && <NullState />}
            <div className={tileContainerClasses}>
                {(tileIndices || []).map((t, i) => (
                    <Tile className={styles.tile} cData={cData} index={t} />
                ))}
            </div>
        </div>
    );
};
