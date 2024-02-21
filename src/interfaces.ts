export interface CData {
    fileType: "C";
    c1Data: Uint8Array;
    c2Data: Uint8Array;
    filename: string;
}

export interface SPRData {
    fileType: "SPR";
    sprData: Uint8Array;
    filename: string;
}

export interface SData {
    fileType: "S";
    sData: Uint8Array;
    filename: string;
}

export interface FIXData {
    fileType: "FIX";
    fixData: Uint8Array;
    filename: string;
}
