import zip from "lodash.zip";

const step7 = Math.floor(256 / 7);
const palette7 = new Array(7).fill(1, 0, 15).map((_, i) => {
    const value = (i + 1) * step7;
    return [value * 0.6, value * 0.9, value, 255];
});

const step8 = 256 / 8;
const palette8 = new Array(8).fill(1, 0, 15).map((_, i) => {
    const value = (i + 1) * step8;
    return [value, value * 0.9, value * 0.6, 255];
});

palette7.unshift([0, 0, 0, 0]);

const zipped = zip(palette7, palette8);

const palette: number[][] = zipped.reduce((b, pair) => b.concat((pair as any) as number[][]), [] as number[][]);

export { palette };
