import React, { useState } from "react";
import classnames from "classnames";

import styles from "./nullState.module.css";

interface NullStateProps {
    className?: string;
}

const NullState: React.StatelessComponent<NullStateProps> = ({ className }) => {
    const [showHelp, setShowHelp] = useState<boolean>(false);

    const classes = classnames(styles.nullState, className);
    const helpClasses = classnames(styles.howToGetAPair, {
        [styles.shown]: showHelp
    });

    return (
        <div className={classes}>
            <div className={styles.callout}>
                <h1>View the sprite tiles of a Neo Geo game</h1>
                <p>choose a C ROM pair from a game's romset in the file chooser above</p>
                {!showHelp && (
                    <button className={styles.showHelpButton} onClick={() => setShowHelp(true)}>
                        help
                    </button>
                )}
            </div>
            <div className={helpClasses}>
                <h2>How to get a C ROM file pair</h2>
                <ul>
                    <li>Neo Geo ROMs are usually bundled in a zip file. Take a game and unzip it.</li>
                    <li>
                        There will be at least two C ROM files, such as <code>019-c1.rom</code> and <code>019-c2.rom</code> for League
                        Bowling, or <code>RBFF1_C1.rom</code> and <code>RBFF1_C2.rom</code> for Real Bout Fatal Fury.
                    </li>
                    <li>Choose those two files in the file dialog above</li>
                </ul>

                <p>
                    Bigger games will have more C ROM file pairs. Real Bout Fatal Fury has C1, C2, C3, C4, C5, C6, C7 and C8 ROMs. You can
                    grab any pair, as long as they go together. C1 and C2 go together, C3 and C4 go together, and so on.
                </p>
                <h2>Why are they grey scale?</h2>
                <p>
                    The sprites are stored separate from the color palettes. There's no good way to get the color data from a ROM without
                    running the game. So greyscale was chosen as a neutral palette.
                </p>
            </div>
        </div>
    );
};

export { NullState };
