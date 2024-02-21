import React, { ReactNode, useState } from "react";
import { CData, FIXData, SData, SPRData } from "../interfaces";

import { setConfig } from "react-hot-loader";
// @ts-ignore: the typing for setConfig doesn't have this prop but it does work
setConfig({ pureSFC: true });

import styles from "./dataLoader.module.css";

interface DataLoaderProps {
    className?: string;
    onLoad: (data: CData | SData | SPRData | FIXData | null) => void;
    data: CData | SData | null;
    statusMessage?: ReactNode | null;
}

function getCIndex(fileName: string): number | null {
    const regex = /.*[cC](\d).*/g;

    const result = regex.exec(fileName);

    if (result) {
        return parseInt(result[1], 10);
    } else {
        return null;
    }
}

function getSIndex(fileName: string): number | null {
    const regex = /.*[sS](\d).*/g;

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

function areCRomFiles(files: FileList): boolean {
    return files.length === 2 && Array.from(files).every(file => !!getCIndex(file.name));
}

function isAnSRomFile(files: FileList): boolean {
    return files.length === 1 && !!getSIndex(files[0].name);
}

function isAnSPRFile(files: FileList): boolean {
    return files.length === 1 && files[0].name.toLowerCase().endsWith(".spr");
}

function isAFIXFile(files: FileList): boolean {
    return files.length === 1 && files[0].name.toLowerCase().endsWith(".fix");
}

function areAProperPair(files: FileList) {
    const firstIndex = getCIndex(files[0].name);
    const secondIndex = getCIndex(files[1].name);

    if (!firstIndex || !secondIndex) {
        return false;
    }

    const minIndex = Math.min(firstIndex, secondIndex);
    const maxIndex = Math.max(firstIndex, secondIndex);

    // the pair has to be consecutive with the odd number coming first
    // ie: C3,C4 is a valid pair, but C4,C5 is not
    return maxIndex - minIndex === 1 && !!(minIndex & 1);
}

function isCorrectLength(data: Uint8Array, tileSize: number): boolean {
    return data.length % tileSize === 0;
}

const DataLoader: React.StatelessComponent<DataLoaderProps> = ({ className, onLoad, statusMessage: statusMessageFromProps }) => {
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [loadCount, setLoadCount] = useState(1);

    function onFilesChosen(e: React.ChangeEvent<HTMLInputElement>) {
        setStatusMessage(null);

        const files = e.target.files;
        const target = e.target;

        const _onLoad = (data: CData | SData | SPRData | FIXData | null) => {
            if (data) {
                onLoad({
                    ...data,
                    filename: data.filename + loadCount
                });
            } else {
                onLoad(data);
            }

            setLoadCount(lc => lc + 1);
            target.value = "";
        };

        if (!files || files.length === 0) {
            return _onLoad(null);
        }

        if (areCRomFiles(files)) {
            if (!areAProperPair(files)) {
                return setStatusMessage("Please choose a proper pair, click the help below");
            }
            const fr = new FileReader();

            fr.onload = e1 => {
                const fr2 = new FileReader();
                fr2.onload = e2 => {
                    const c1Data = new Uint8Array((isC1File(files[0]) ? fr.result : fr2.result) as ArrayBuffer);
                    const c2Data = new Uint8Array((isC1File(files[1]) ? fr.result : fr2.result) as ArrayBuffer);

                    if (!isCorrectLength(c1Data, 64) || !isCorrectLength(c2Data, 64)) {
                        setStatusMessage("Invalid files, not multiples of 64 bytes");
                    } else {
                        _onLoad({ fileType: "C", c1Data, c2Data, filename: files[0].name });
                    }
                };
                fr2.readAsArrayBuffer(files[1]);
            };

            fr.readAsArrayBuffer(files[0]);
        } else if (isAnSRomFile(files)) {
            const fr = new FileReader();

            fr.onload = e1 => {
                const sData = new Uint8Array(fr.result as ArrayBuffer);

                if (!isCorrectLength(sData, 32)) {
                    setStatusMessage("Invalid file, not multiple of 32 bytes");
                } else {
                    _onLoad({ fileType: "S", sData, filename: files[0].name });
                }
            };

            fr.readAsArrayBuffer(files[0]);
        } else if (isAnSPRFile(files)) {
            const fr = new FileReader();

            fr.onload = e1 => {
                const sprData = new Uint8Array(fr.result as ArrayBuffer);

                if (!isCorrectLength(sprData, 128)) {
                    setStatusMessage("Invalid file, not multiple of 128 bytes");
                } else {
                    _onLoad({ fileType: "SPR", sprData: sprData, filename: files[0].name });
                }
            };

            fr.readAsArrayBuffer(files[0]);
        } else if (isAFIXFile(files)) {
            const fr = new FileReader();

            fr.onload = e1 => {
                const fixData = new Uint8Array(fr.result as ArrayBuffer);

                if (!isCorrectLength(fixData, 128)) {
                    setStatusMessage("Invalid file, not multiple of 32 bytes");
                } else {
                    _onLoad({ fileType: "FIX", fixData: fixData, filename: files[0].name });
                }
            };

            fr.readAsArrayBuffer(files[0]);
        } else {
            return setStatusMessage("Please choose a pair of C ROM files, an S ROM file, or an SPR file");
        }
    }

    return (
        <div className={className}>
            <input type="file" onChange={onFilesChosen} multiple={true} />
            <span className={styles.errorMessage}>{statusMessage || statusMessageFromProps}</span>
        </div>
    );
};

export { DataLoader };
