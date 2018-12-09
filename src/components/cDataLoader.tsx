import React, { useState } from "react";
import classnames from "classnames";
import { CData } from "../interfaces";

import { setConfig } from "react-hot-loader";
// @ts-ignore: the typing for setConfig doesn't have this prop but it does work
setConfig({ pureSFC: true });

interface CDataLoaderProps {
    className?: string;
    onLoad: (cData: CData) => void;
}

function isC1File(file: File) {
    const index = file.name[file.name.length - 1];

    return !!(parseInt(index, 10) & 1);
}

const CDataLoader: React.StatelessComponent<CDataLoaderProps> = ({ className, onLoad }) => {
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    function onFilesChosen(e: React.ChangeEvent<HTMLInputElement>) {
        setStatusMessage(null);

        const files = e.target.files;

        if (!files || files.length !== 2) {
            return setStatusMessage("Please choose a pair of C ROM files");
        }

        const fr = new FileReader();

        fr.onload = e1 => {
            const fr2 = new FileReader();
            fr2.onload = e2 => {
                const c1Data = new Uint8Array((isC1File(files[0]) ? fr.result : fr2.result) as ArrayBuffer);
                const c2Data = new Uint8Array((isC1File(files[0]) ? fr2.result : fr.result) as ArrayBuffer);

                onLoad({ c1Data, c2Data });
            };
            fr2.readAsArrayBuffer(files[1]);
        };

        fr.readAsArrayBuffer(files[0]);
    }

    return (
        <div>
            <input type="file" onChange={onFilesChosen} multiple={true} />
            {statusMessage}
        </div>
    );
};

export { CDataLoader };
