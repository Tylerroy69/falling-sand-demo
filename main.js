var canvas = document.getElementById('sandCanvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;
var pixels = new Array(width * height).fill('000000');

function update() {
    requestAnimationFrame(update);
}

update();