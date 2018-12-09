import React from "react";
import classnames from "classnames";

import styles from "./header.module.css";

interface HeaderProps {
    className?: string;
    loading: boolean;
}

const Header: React.StatelessComponent<HeaderProps> = ({ className, loading, children }) => {
    const classes = classnames(styles.header, className);
    const logoClasses = classnames(styles.logo, { [styles.spin]: loading });

    return (
        <header className={classes}>
            <div className={logoClasses} />
            <div className={styles.title}>sprite tile viewer</div>
            {children}
        </header>
    );
};

export { Header };
