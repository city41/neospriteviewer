import React from "react";
import classnames from "classnames";
import { CData, FIXData, SData, SPRData } from "../interfaces";
import { palette } from "../palette";
import { getIndexedData } from "../indexedData";

import styles from "./detailedTile.module.css";

interface DetailedTileProps {
    className?: string;
    data: CData | SData | SPRData | FIXData | null;
    index: number;
    onPrev: () => void;
    onNext: () => void;
    onClose: () => void;
}

function getBgColor(index: number): string {
    const color = [...palette[index]];

    return `rgba(${color.join(",")})`;
}

function getFgColor(index: number): string {
    if (index >= 5 && index <= 10) {
        return "white";
    }

    const paletteColor = palette[index];

    let color;
    if (paletteColor[3] === 0) {
        color = [0, 0, 0, 255];
    } else {
        color = paletteColor.map(c => 255 - c);
        color[3] = 1;
    }

    return `rgba(${color.join(",")})`;
}

function getRows(indices: number[][]) {
    return indices.map(column => {
        const cells = column.map(c => (
            <div className={styles.cell} style={{ backgroundColor: getBgColor(c), color: getFgColor(c) }}>
                {c}
            </div>
        ));
        return <div className={styles.row}>{cells}</div>;
    });
}

const DetailedTileCmp: React.StatelessComponent<DetailedTileProps> = ({ className, data, index, onPrev, onNext, onClose }) => {
    if (!data || index < 0) {
        return null;
    }

    const classes = classnames(styles.detailedTile, className, {
        [styles.cTile]: data.fileType === "C",
        [styles.sprTile]: data.fileType === "SPR",
        [styles.sTile]: data.fileType === "S",
        [styles.fixTile]: data.fileType === "FIX"
    });

    const indices = getIndexedData(data, index);

    const rows = getRows(indices);

    const closeButtonClasses = classnames(styles.closeButton, "button");

    return (
        <div className={classes}>
            <div className={styles.cellContainer}>{rows}</div>
            <div className={styles.closeContainer}>
                <h2>
                    tile index 0x{index.toString(16).toUpperCase()} ({index})
                </h2>
                <button className="button" onClick={onPrev}>
                    prev
                </button>
                <button className="button" onClick={onNext}>
                    next
                </button>
                <button className={closeButtonClasses} onClick={onClose}>
                    close
                </button>
            </div>
        </div>
    );
};

let DetailedTile = DetailedTileCmp;

if (process.env.NODE_ENV === "production") {
    DetailedTile = React.memo(DetailedTileCmp);
}
export { DetailedTile };
