var canvas = document.getElementById("basset-hound");
var ctx = canvas.getContext("2d");

// outer circle of face
// keep for reference

ctx.beginPath();
ctx.arc(290, 150, 125, 0, 2 * Math.PI);
ctx.fillStyle="#c77321";
ctx.fill();
ctx.strokeStyle="#c77321";
ctx.stroke();

// outer left eye

ctx.beginPath();
ctx.moveTo(204, 150);
ctx.lineTo(256, 125);
ctx.lineTo(213, 195);
ctx.fillStyle="#b4c2cd";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle="#b4c2cd";
ctx.stroke();
ctx.closePath();

// left eye
// moveTo start position
// bezierCurveTo x, y of left angle, x, y of right angle, end position

ctx.beginPath();
ctx.moveTo(216, 145);
ctx.bezierCurveTo(219, 154, 245, 153, 241, 133);
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();