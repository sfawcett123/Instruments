import * as Files from "./file.js"
import * as Draw from "./draw.js"

export function DrawCompass( canvas , ctx , bezel , rose , angle)
{
    ctx.save(); //saves the state of canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
    ctx.translate(canvas.width/2, canvas.height/2); //let's translate
    ctx.rotate(Math.PI / 180 * (angle )); //increment the angle and rotate the image
    ctx.translate(-(canvas.width/2), -(canvas.height/2)); //let's translate
    Draw.drawImageScaled(rose , ctx );
    ctx.restore();
    Draw.drawImageScaled(bezel , ctx );

}