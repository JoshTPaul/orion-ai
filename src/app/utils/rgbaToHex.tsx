export function rgbaToHex({ r, g, b }) {
  const red = Math.round(r * 255)
    .toString(16)
    .padStart(2, "0");
  const green = Math.round(g * 255)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.round(b * 255)
    .toString(16)
    .padStart(2, "0");
  //   const alpha = a
  //     ? Math.round(a * 255)
  //         .toString(16)
  //         .padStart(2, "0")
  //     : 0;

  return `#${red}${green}${blue}`;
}
