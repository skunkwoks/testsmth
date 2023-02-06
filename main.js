// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
console.log("here we go again");

const buttonRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));

export const name = "square";

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return { length, x, y, color };
}