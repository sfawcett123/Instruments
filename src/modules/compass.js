import Calculations from "./calculations.js"
import DrawInstrument from "./draw.js"

export default class Compass
{

    FPS = 25;                  // SPEED DIAL REFRESHS
    calc    = new Calculations();
    drawImg = new DrawInstrument();

    constructor() {
        this.REQUESTED_HEADING = 0;     // DESIRED HEADING
        this.CURRENT_HEADING = 0;     // DIAL HEADING
        this.DIRECTION = 0;              // DIRECTION OF TRAVEL
    }

    set_heading(hdg)
    {
        this.REQUESTED_HEADING = 360 - this.calc.mod(hdg, 360);
        if ( this.REQUESTED_HEADING == 0) {
            this.REQUESTED_HEADING = 360
        }
        this.DIRECTION = this.calc.direction(this.CURRENT_HEADING, this.REQUESTED_HEADING)
        console.log( "Direction of pointer set to " + this.DIRECTION )
    }

    draw( canvas , img , img2 )
    {
        console.log("Drawing Compass");

        this.ctx = canvas.getContext('2d');

        this.CURRENT_HEADING = this.calc.rotate( this.CURRENT_HEADING, this.REQUESTED_HEADING, this.DIRECTION);

        this.ctx.save(); 
        this.ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
        this.ctx.translate(canvas.width / 2, canvas.height / 2); //let's translate
        this.ctx.rotate( this.calc.radians( this.CURRENT_HEADING));
        this.ctx.translate(-(canvas.width / 2), -(canvas.height / 2)); //let's translate
        this.drawImg.drawImageScaled(img, this.ctx);
        this.ctx.restore();
        this.drawImg.drawImageScaled(img2, this.ctx);
    }
}