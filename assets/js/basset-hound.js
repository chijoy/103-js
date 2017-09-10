var canvas = document.getElementById("basset-hound");
var ctx = canvas.getContext("2d");

// outer circle of face
// keep for reference

ctx.beginPath();
ctx.arc(275, 158, 130, 0, 2 * Math.PI);
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

// right eye
// moveTo start position
// bezierCurveTo x, y of left angle, x, y of right angle, end position
ctx.beginPath();
ctx.moveTo(309, 132);
ctx.bezierCurveTo(306, 153, 332, 154, 333, 144);
ctx.fillStyle="black";
ctx.fill();
ctx.strokeStyle="black";
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
ctx.strokeStyle="#f8f1cc";
ctx.fillStyle="#f8f1cc";
ctx.fill();
ctx.stroke();

// nose

ctx.beginPath();
ctx.moveTo(275, 200);
ctx.lineTo(242, 213);
ctx.lineTo(242, 253);
ctx.lineTo(275, 261);
ctx.lineTo(308, 253);
ctx.lineTo(308, 213);
ctx.lineTo(275, 200);
ctx.lineWidth = 1;
ctx.strokeStyle="black";
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();

// left ear

ctx.beginPath();
ctx.moveTo(177, 75);
ctx.lineTo(200, 195);
ctx.lineTo(210, 315);
ctx.lineTo(236, 307);
ctx.lineTo(236, 464);
ctx.lineTo(173, 464);
ctx.bezierCurveTo(140, 463, 110, 450, 103, 315);
ctx.lineTo(177, 75);
ctx.lineWidth = 1;
ctx.strokeStyle="#76300e";
ctx.fillStyle="#76300e";
ctx.fill();
ctx.stroke();

// right ear

ctx.beginPath();
ctx.moveTo(374, 75);
ctx.lineTo(351, 195);
ctx.lineTo(341, 315);
ctx.lineTo(315, 307);
ctx.lineTo(315, 464);
ctx.lineTo(378, 464);
ctx.bezierCurveTo(411, 463, 441, 450, 448, 315);
ctx.lineTo(374, 75);
ctx.lineWidth = 1;
ctx.strokeStyle="#76300e";
ctx.fillStyle="#76300e";
ctx.fill();
ctx.stroke();

// neck

ctx.beginPath();
ctx.moveTo(236, 464);
ctx.lineTo(315, 464);
ctx.lineTo(315, 307);
ctx.lineTo(275, 297);
ctx.lineTo(236, 307);
ctx.fillStyle="#c77321";
ctx.fill();
ctx.strokeStyle="#c77321";
ctx.stroke();