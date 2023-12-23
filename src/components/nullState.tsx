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

    const buttonClasses = classnames("button", styles.showHelpButton);

    return (
        <div className={classes}>
            <div className={styles.callout}>
                <h1>View the sprite tiles of a Neo Geo game</h1>
                <p>choose an S ROM file or a C ROM pair from a game's romset in the file chooser above</p>
                {!showHelp && (
                    <button className={buttonClasses} onClick={() => setShowHelp(true)}>
                        help
                    </button>
                )}
            </div>
            <div className={helpClasses}>
                <h2>Where to get these files</h2>
                <p>
                    Neo Geo ROMs are usually bundled in a zip file. Unzip a game and you'll find a bunch of files. You are interested in S
                    files or C files.
                </p>
                <h2>How to get an S ROM file</h2>
                <ul>
                    <li>Unzip a Neo Geo game</li>
                    <li>
                        There will usually be one S file, such as <code>201-s1.s1</code> in Metal Slug or <code>019-s1.rom</code> in League
                        Bowling
                    </li>
                    <li>Choose that file in the file dialog above</li>
                </ul>
                <p>
                    <b>Note</b> that newer games (from KOF99 onward) don't have an S ROM file. Those games can't be viewed.
                </p>
                <h2>How to get a C ROM file pair</h2>
                <ul>
                    <li>Unzip a Neo Geo game</li>
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
                <p>
                    <b>Note</b> that later games encrypted the C ROM data. If the tiles all look like television noise, that's what that is.
                    This viewer cannot decrypt the files.
                </p>
                <h2>What is the difference between C and S?</h2>
                <p>
                    The data inside C ROMs is for the main sprites of the game: the characters, backgrounds, bullets, etc. The data inside
                    the S ROMs is for the fix layer. This layer is drawn above all sprites and it never scrolls. So S data is for things
                    like the current score, number of lives, etc. The "HUD" if you will.
                </p>
                <h2>Why are the colors so weird?</h2>
                <p>
                    The tiles are stored separate from the color palettes. There's no good way to get the color data from a ROM without
                    running the game. So an alternating blue/yellow palette was chosen as it allows the different colors to stand out.
                </p>
                <p>
                    For more info on tiles and palettes,{" "}
                    <a href="https://mattgreer.dev/blog/extracting-neo-geo-emulator-graphics-data-to-create-animated-gifs/#lets-talk-about-the-neo-geo">
                        this blog post I wrote
                    </a>{" "}
                    goes into more detail.
                </p>
            </div>
        </div>
    );
};

export { NullState };
