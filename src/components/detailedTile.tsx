import React from "react";
import classnames from "classnames";
import { CData, SData } from "../interfaces";
import { palette } from "../palette";
import { getIndexedData } from "../indexedData";

import styles from "./detailedTile.module.css";

interface DetailedTileProps {
    className?: string;
    data: CData | SData | null;
    index: number;
}

function getBgColor(index: number): string {
    const color = [...palette[index]];
    color[3] = 0.8;

    return `rgba(${color.join(",")})`;
}

function getFgColor(index: number): string {
    const color = palette[index].map(c => 255 - c);
    color[3] = 1;

    return `rgba(${color.join(",")})`;
}

function getRows(indices: number[][]) {
    return indices.map(column => {
        const cells = column.map(c => (
            <div className={styles.cell} style={{ backgroundColor: getBgColor(c), color: getFgColor(c) }}>
                {c}
            </div>
        ));
        return <div className={styles.column}>{cells}</div>;
    });
}

const DetailedTile: React.StatelessComponent<DetailedTileProps> = ({ className, data, index }) => {
    if (!data || index < 0) {
        return null;
    }

    const classes = classnames(styles.detailedTile, className);

    const indices = getIndexedData(data, index);

    const rows = getRows(indices);

    return <div className={classes}>{rows}</div>;
};

export { DetailedTile };
