import * as Files from "./modules/file.js"

export function Compass() {
    var canvas = document.querySelector("canvas");
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = Files.Path() + '/images/Nautical_compass_rose.svg';

    img.onload = () => { drawImageScaled(img, context); };

    function drawImageScaled(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
};

