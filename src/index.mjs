import * as Files from "./modules/file.js"

export function Compass() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext('2d');

    const img = new Image();
    img.src =  'src/images/aircraft_compass.png';


    var ang = 0; //angle
    var fps = 1000 / 25; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
        canvas.width = this.width << 1; //double the canvas width
        canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
        setInterval(function () {
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(cache.width, cache.height); //let's translate
            ctx.rotate(Math.PI / 180 * (ang += 5)); //increment the angle and rotate the image 
            ctx.drawImage(img, -cache.width / 2, -cache.height / 2, cache.width, cache.height); //draw the image ;)
            ctx.restore(); //restore the state of canvas
        }, fps);
    };

};
