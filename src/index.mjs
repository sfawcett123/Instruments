import * as Files from "./modules/file.js"

export function Compass() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext('2d');

    const img2 = new Image();
    img2.src =  'src/images/aircraft_bezel.png';

    const img = new Image();
    img.src =  'src/images/aircraft_compass.png';


    var ang = 0; 
    var fps = 1000 / 25; 
    img.onload = function () { 
        setInterval(function () {
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(canvas.width/2, canvas.height/2); //let's translate
            ctx.rotate(Math.PI / 180 * (ang += 5)); //increment the angle and rotate the image 
            ctx.translate(-(canvas.width/2), -(canvas.height/2)); //let's translate
            drawImageScaled(img , ctx );
            ctx.restore();
            drawImageScaled(img2 , ctx );

        }, fps);
    }
}

export function drawImageScaled(img, ctx) {
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