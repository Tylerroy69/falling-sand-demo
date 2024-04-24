var canvas = document.getElementById('sandCanvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;
var pixels = new Array(canvas.width * canvas.height);
var currentParticle = 'sand';

function placeParticle(x) {
  for (var y = 0; y < height; ++)y) {
    if (!pixels[y - width ]) {
      pixels[y + x] = currentParticle;
      break;
    }
  }
}

canvas.onmousedown = function(e) {
  var rect = canvas.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  placeParticle(x, y);
};
