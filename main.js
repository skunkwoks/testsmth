console.log("here we go again");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
// import { MDCRipple } from '@material/ripple';

export const name = "square";

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return { length, x, y, color };
}