import * as Files from "./modules/file.js"
import * as Draw from "./modules/draw.js"

var HEADING=0;     // DESIRED HEADING
var _HEADING = 0;  // DIAL HEADING
var FPS = 50 ; // SPEED DIAL REFRESHS

export function SetHeading( hdg )
{
    HEADING = 360 - hdg;
}
export function Compass() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext('2d');

    const img2 = new Image();
    img2.src =  'src/images/aircraft_bezel.png';

    const img = new Image();
    img.src =  'src/images/aircraft_compass.png';

    var ang = 0;

    img.onload = function () {
        setInterval(function () {
            // Need a proper function to drive
            if( HEADING != _HEADING )
                _HEADING += 1;

            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(canvas.width/2, canvas.height/2); //let's translate
            ctx.rotate(Math.PI / 180 * (_HEADING )); //increment the angle and rotate the image
            ctx.translate(-(canvas.width/2), -(canvas.height/2)); //let's translate
            Draw.drawImageScaled(img , ctx );
            ctx.restore();
            Draw.drawImageScaled(img2 , ctx );

        }, FPS);
    }
}
