import React, { useState } from "react";
import classnames from "classnames";

import styles from "./nullState.module.css";

interface NullStateProps {
    className?: string;
}

const NullState: React.StatelessComponent<NullStateProps> = ({ className }) => {
    const [showHelp, setShowHelp] = useState<boolean>(false);

    const classes = classnames(styles.nullState, className);

    return (
        <div className={classes}>
            <div className={styles.callout}>
                <h1>to view the sprite tiles of a Neo Geo game</h1>
                <p>choose a C ROM pair in the file dialog</p>
                {!showHelp && (
                    <button className={styles.showHelpButton} onClick={() => setShowHelp(true)}>
                        how?
                    </button>
                )}
            </div>
            {showHelp && (
                <div className={styles.howToGetAPair}>
                    <h2>How to get a C ROM file pair</h2>
                    <ol>
                        <li>Neo Geo ROMs are usually bundled in a zip file. Take a game and unzip it.</li>
                        <li>
                            There will be at least two C ROM files, such as <code>019-c1.rom</code> and <code>019-c2.rom</code> for League
                            Bowling, or <code>RBFF1_C1.rom</code> and <code>RBFF1_C1.rom</code> for Real Bout Fatal Fury.
                        </li>
                        <li>Drag those two files here, or choose them in the file dialog above</li>
                    </ol>

                    <p>
                        Bigger games will have more C ROM file pairs. Real Bout Fatal Fury has C1, C2, C3, C4, C5, C6, C7 and C8 ROMs. You
                        can grab any pair, as long as they go together. C1 and C2 go together, C3 and C4 go together, and so on.
                    </p>
                </div>
            )}
        </div>
    );
};

export { NullState };
