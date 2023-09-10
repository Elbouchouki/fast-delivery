const getRGB = () => Math.floor(Math.random() * 256);

const rgbToHex = (r: number, g: number, b: number) => "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");

export const generateRandomColor = () => rgbToHex(getRGB(), getRGB(), getRGB());