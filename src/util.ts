export function generateSdfOpenLayers () {
    const canvas = document.createElement("canvas");
    canvas.width = 30;
    canvas.height = 30;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 30, 30);
    return canvas
}

export function generateSdfMapLibre () {
    const canvas = document.createElement("canvas");
    canvas.width = 30;
    canvas.height = 30;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 30, 30);
    return ctx.getImageData(
        0,
        0,
        30,
        30
    )
}