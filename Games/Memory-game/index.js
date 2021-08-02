const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

drawGrid(context);

// context.beginPath();
context.strokeStyle = "#fff";
context.fillStyle = "#fff";
context.lineWidth = 2;
// context.moveTo(50, 50);
// context.lineTo(150, 250);
// context.lineTo(150, 150);
// context.lineTo(250, 150);
// context.lineTo(50, 50);
// context.stroke();
// context.fillText("(50, 50)", 30, 40);
// context.fillText("(150, 250)", 130, 260);
// // context.fillText("(150, 150)", 125, 145);
// context.fillText("(250, 150)", 225, 165);
// context.fill();

context.beginPath()
context.moveTo(50, 250);
context.quadraticCurveTo(25, 300, 50, 350);
context.quadraticCurveTo(100,350, 150, 250);
context.closePath();
context.strokeStyle = "#FFFF00";
context.fillStyle = "#000000";
context.fill();
context.stroke();
