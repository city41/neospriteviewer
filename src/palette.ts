const step = 256 / 15;
const palette = new Array(15).fill(1, 0, 15).map((_, i) => {
    const value = (i + 1) * step;
    return [value * 0.8, value * 0.9, value, 255];
});

palette.unshift([0, 0, 0, 0]);

export { palette };
