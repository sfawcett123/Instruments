import * as Files from "./modules/file.js"
import * as Draw from "./modules/draw.js"

var HEADING  = 0;     // DESIRED HEADING
var _HEADING = 0;  // DIAL HEADING
var FPS = 25 ; // SPEED DIAL REFRESHS
var DIRECTION = 0;

export function SetHeading( hdg )
{
    HEADING =  360 - mod(hdg , 360);
    if( HEADING ==  0 )
    {
            HEADING = 360
    }
    DIRECTION = direction()
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
            rotate();

            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(canvas.width/2, canvas.height/2); //let's translate
            ctx.rotate( radians( _HEADING ) );
            ctx.translate(-(canvas.width/2), -(canvas.height/2)); //let's translate
            Draw.drawImageScaled(img , ctx );
            ctx.restore();
            Draw.drawImageScaled(img2 , ctx );

        }, FPS);
    }
}

function rotate()
{
    if( Math.abs( HEADING % 360 )== Math.abs( _HEADING % 360 ) ) return ;

    _HEADING =  mod(_HEADING , 360);

    _HEADING += DIRECTION;

    //console.log( "Target Heading    = " + _HEADING );
    //console.log( "Requested Heading = " + HEADING);
}

function direction()
{
    var a = ( _HEADING % 360 ) - HEADING
    a = (a + 180) % 360


    console.log( "Direction " + a);

    return ( a < 0 ) ? -1 : 1;
}

function mod( a, n )
{
    return a - Math.floor( a / n) * n ;

}

function radians( degree )
{
   return  degree * Math.PI / 180;
}