import React from "react";
import classnames from "classnames";

import styles from "./paginator.module.css";

interface PaginatorProps {
    className?: string;
    pageSize: number;
    currentPage: number;
    totalTiles: number;
    onFirstClick: () => void;
    onPrevClick: () => void;
    onNextClick: () => void;
}

function formatWithCommas(n: number): string {
    if ("toLocaleString" in new Number(n)) {
        return n.toLocaleString();
    } else {
        // if the browser doesn't support it, just fall back to no commas, no big deal
        return n.toString();
    }
}

const Paginator: React.StatelessComponent<PaginatorProps> = ({
    className,
    pageSize,
    currentPage,
    totalTiles,
    onFirstClick,
    onPrevClick,
    onNextClick
}) => {
    return (
        <div className={classnames(className, styles.root)}>
            <button onClick={onFirstClick} disabled={currentPage === 0}>
                &lt;&lt;
            </button>
            <button onClick={onPrevClick} disabled={currentPage === 0}>
                &lt;
            </button>
            <div>
                {formatWithCommas(currentPage * pageSize)} - {formatWithCommas(Math.min((currentPage + 1) * pageSize, totalTiles) - 1)}
            </div>
            <div>&ndash;</div>
            <div>{formatWithCommas(totalTiles)} tiles</div>
            <button disabled={currentPage === totalTiles / pageSize - 1} onClick={onNextClick}>
                &gt;
            </button>
        </div>
    );
};

export { Paginator };
