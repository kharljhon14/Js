function drawGrid(context, minor, major, stroke, fill) {
  minor = minor || 10;
  major = major || minor * 5;
  stroke = stroke || "#00ff00";
  fill = fill || "#00ff00";
  context.save();
  context.strokeStyle = stroke;
  context.fillStyle = fill;
  let width = context.canvas.width;
  let height = context.canvas.height;

  for (let x = 0; x < width; x += minor) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.lineWidth = x % major == 0 ? 0.5 : 0.25;
    if (x % major == 0) context.fillText(x, x, 10);
    context.stroke();
  }

  for (let y = 0; y < canvas.height; y += 10) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.lineWidth = y % major == 0 ? 0.5 : 0.25;
    if (y % 50 == 0) context.fillText(y, 0, y + 10);
    context.stroke();
  }
  context.restore();
}
