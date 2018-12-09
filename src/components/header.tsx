import React from "react";
import classnames from "classnames";

import styles from "./header.module.css";

interface HeaderProps {
    className?: string;
}

const Header: React.StatelessComponent<HeaderProps> = ({ className, children }) => {
    const classes = classnames(styles.header, className);
    return (
        <header className={classes}>
            <div className={styles.logo} />
            <div className={styles.title}>sprite tile viewer</div>
            {children}
        </header>
    );
};

export { Header };
