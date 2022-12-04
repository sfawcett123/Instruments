
var canvas=document.querySelector("canvas");
const context = canvas.getContext('2d');
const img = new Image();
img.src = './images/Nautical_compass_rose.svg';

img.onload = () => {          context.drawImage(img, 0, 0);        };


