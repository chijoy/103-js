var canvas = document.getElementById('tapir');
var ctx = canvas.getContext('2d');

const COLOR = {
    EAR: '#3E1D04',
    EAR_TIP: '#FFB300',
    // PUPIL: '#221F20',
    // NOSE: '#221F20',
    // MUSSEL: '#F5F0CE',
    // EAR: '#62391A'
  };
  
  // LEFT EAR
  ctx.beginPath();
  ctx.moveTo(180, 25);
  ctx.lineTo(205, 100);
  ctx.lineTo(230, 90);
  ctx.lineTo(220, 40);
  ctx.closePath();
  ctx.fillStyle = COLOR.EAR;
  ctx.fill();

  // LEFT EAR TIP
  ctx.beginPath();
  ctx.moveTo(180, 25);
  ctx.lineTo(220, 40);
  ctx.lineTo(216, 25);
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = '#FFB300';
//   ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = COLOR.EAR_TIP;
  ctx.fill();

  // RIGHT EAR
  ctx.beginPath();
  ctx.moveTo(370, 25);
  ctx.lineTo(345, 100);
  ctx.lineTo(320, 90);
  ctx.lineTo(330, 40);
  ctx.closePath();
  ctx.fillStyle = COLOR.EAR;
  ctx.fill(); 

  // RIGHT EAR TIP
  ctx.beginPath();
  ctx.moveTo(370, 25);
  ctx.lineTo(330, 40);
  ctx.lineTo(334, 25);
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = '#FFB300';
//   ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = COLOR.EAR_TIP;
  ctx.fill();