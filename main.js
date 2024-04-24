var canvas = document.getElementById('sandCanvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;
var pixels = new Array(width * height).fill('000000');
var particleTypes = {
  sand: '#e7b662',
  water: '#0088ff',
  oil: '#776654'
};
var currentParticle = 'sand';

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (var i = 0; i < pixels.length; i++) {
    var x = i %  width;
    var y = Math.floor(k / width);
    ctx.fillStyle = particleTypes[pixels[i]];
    ctx.fillRect(x, y, 1, 1);
  }
}

function update() {
  // Simple particle interactions and movement updates
  draw();
  requestAnimationFrame(update);
}
update();