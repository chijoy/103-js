var canvas = document.getElementById("basset-hound");
var ctx = canvas.getContext("2d");

// outer circle of face
// keep for reference

ctx.beginPath();
ctx.arc(280, 150, 130, 0, 2 * Math.PI);
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

// left eye
// moveTo start position
// bezierCurveTo x, y of left angle, x, y of right angle, end position

ctx.beginPath();
ctx.moveTo(216, 144);
ctx.bezierCurveTo(219, 154, 245, 153, 241, 132);
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();

// outer right eye

ctx.beginPath();
ctx.moveTo(346, 150);
ctx.lineTo(295, 125);
ctx.lineTo(337, 195);
ctx.fillStyle="#b4c2cd";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle="#b4c2cd";
ctx.stroke();

// outer nose
ctx.beginPath();
ctx.moveTo(275, 93);
ctx.lineTo(261, 159);
ctx.lineTo(217, 206);
ctx.lineTo(209, 315);
ctx.lineTo(275, 297);
ctx.lineTo(341, 315);
ctx.lineTo(332, 206);
ctx.lineTo(288, 159);
ctx.lineTo(275, 93);
ctx.lineWidth = 1;
// ctx.strokeStyle="#f8f1cc";
ctx.strokeStyle="black";
ctx.stroke();