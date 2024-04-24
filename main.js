var canvas = document.getElementById('sandCanvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var pixels = new Array(width * height).fill(null);
var currentParticle = 'sand';
function updateParticles() {
    for (let i = 0; i < pixels.length; i++) {
      if (pixels[i] != null) {
        // Process particle interactions
      }
    }
}

function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < pixels.length; i++) {
      if (pixels[i] != null) {
        ctx.fillStyle = particleTypes[pixels[i]];
        ctx.fillRect((i % width), Math.floor(k / width), 1, 1);
      }
    }
}
