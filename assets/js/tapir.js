var canvas = document.getElementById('tapir');
var ctx = canvas.getContext('2d');

const COLOR = {
    EAR: '#3E1D04',
    EAR_TIP: '#FFB300',
    HEAD: '#736361',
    NECK: '#3E1D04',
    // MUSSEL: '#F5F0CE',
    // EAR: '#62391A'
  };
  
// LEFT EAR
ctx.beginPath();
ctx.moveTo(178, 25);
ctx.lineTo(203, 100);
ctx.lineTo(232, 88);
ctx.lineTo(219, 40);
ctx.closePath();
ctx.fillStyle = COLOR.EAR;
ctx.fill();

// LEFT EAR TIP
ctx.beginPath();
ctx.moveTo(178, 25);
ctx.lineTo(219, 40);
ctx.lineTo(214, 25);
ctx.closePath();
ctx.fillStyle = COLOR.EAR_TIP;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(373, 25);
ctx.lineTo(348, 100);
ctx.lineTo(320, 90);
ctx.lineTo(332, 40);
ctx.closePath();
ctx.fillStyle = COLOR.EAR;
ctx.fill(); 

// RIGHT EAR TIP
ctx.beginPath();
ctx.moveTo(373, 25);
ctx.lineTo(332, 40);
ctx.lineTo(336, 25);
ctx.closePath();
ctx.fillStyle = COLOR.EAR_TIP;
ctx.fill();

// NECK
ctx.beginPath();
ctx.moveTo(167, 290);
ctx.lineTo(116, 460);
ctx.lineTo(435, 460);
ctx.lineTo(382, 290);
ctx.closePath();
ctx.fillStyle = COLOR.NECK;
ctx.fill();

// HEAD
ctx.beginPath();
ctx.moveTo(275, 71);
ctx.lineTo(203, 100);
ctx.lineTo(183, 235);
ctx.lineTo(167, 290);
ctx.lineTo(221, 369);
ctx.lineTo(242, 437);
ctx.lineTo(275, 448);
ctx.lineTo(308, 437);
ctx.lineTo(329, 369);
ctx.lineTo(382, 290);
ctx.lineTo(368, 235);
ctx.lineTo(348, 100);
ctx.lineTo(275, 71);
ctx.closePath();
ctx.fillStyle = COLOR.HEAD;
ctx.fill();

