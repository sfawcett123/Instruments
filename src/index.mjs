import * as Files from "./modules/file.js"

export function Compass() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext('2d');


    const img = new Image();
    img.src = Files.Path() + '/images/aircraft_bezel.png';

    const img2 = new Image();
    img2.src = Files.Path() + '/images/aircraft_compass.png';

    img.onload = () => {
        drawImageScaled(img, ctx );
    }

    img2.onload = () => {
        drawImageScaled(img2, ctx );
    }

    function drawImageScaled(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
};

