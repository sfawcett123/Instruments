import Compass from "./modules/compass.js"

var compass = new Compass();

export function SetHeading( hdg )
{
    console.log( "Setting Heading to " + hdg )
    compass.set_heading( hdg );
}

export function DrawCompass() {

    var canvas = document.querySelector("canvas");

    const img2 = new Image();
    img2.src = 'src/images/aircraft_bezel.png';

    const img = new Image();
    img.src = 'src/images/aircraft_compass.png';

    img.onload = function () {
        setInterval(function () {
            compass.draw(canvas, img, img2);
        }, compass.FPS );
    }
}