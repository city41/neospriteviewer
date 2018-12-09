import React, { useState } from "react";
import classnames from "classnames";
import { CData } from "../interfaces";

import { setConfig } from "react-hot-loader";
// @ts-ignore: the typing for setConfig doesn't have this prop but it does work
setConfig({ pureSFC: true });

import styles from "./cDataLoader.module.css";

interface CDataLoaderProps {
    className?: string;
    onLoad: (cData: CData) => void;
}

function getCIndex(fileName: string) {
    const regex = /.*[cC](\d).*/g;

    const result = regex.exec(fileName);

    if (result) {
        return parseInt(result[1], 10);
    } else {
        return null;
    }
}

function isC1File(file: File) {
    const cIndex = getCIndex(file.name);

    return !!(cIndex && cIndex & 1);
}

function areCRomFiles(files: FileList) {
    return Array.from(files).every(file => !!getCIndex(file.name));
}

function areAProperPair(files: FileList) {
    const firstIndex = getCIndex(files[0].name);
    const secondIndex = getCIndex(files[1].name);

    if (!firstIndex || !secondIndex) {
        return false;
    }

    const minIndex = Math.min(firstIndex, secondIndex);
    const maxIndex = Math.max(firstIndex, secondIndex);

    return maxIndex - minIndex === 1;
}

const CDataLoader: React.StatelessComponent<CDataLoaderProps> = ({ className, onLoad }) => {
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    function onFilesChosen(e: React.ChangeEvent<HTMLInputElement>) {
        setStatusMessage(null);

        const files = e.target.files;

        if (!files || files.length !== 2 || !areCRomFiles(files)) {
            return setStatusMessage("Please choose a pair of C ROM files");
        }

        if (!areAProperPair(files)) {
            return setStatusMessage("Please choose a proper pair, see the help");
        }

        const fr = new FileReader();

        fr.onload = e1 => {
            const fr2 = new FileReader();
            fr2.onload = e2 => {
                const c1Data = new Uint8Array((isC1File(files[0]) ? fr.result : fr2.result) as ArrayBuffer);
                const c2Data = new Uint8Array((isC1File(files[1]) ? fr2.result : fr.result) as ArrayBuffer);

                onLoad({ c1Data, c2Data });
            };
            fr2.readAsArrayBuffer(files[1]);
        };

        fr.readAsArrayBuffer(files[0]);
    }

    return (
        <div>
            <input type="file" onChange={onFilesChosen} multiple={true} />
            <span className={styles.errorMessage}>{statusMessage}</span>
        </div>
    );
};

export { CDataLoader };
