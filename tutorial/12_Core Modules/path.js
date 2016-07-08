var path = require('path');

var websidename = "escritorio/sandro//cosas/index.html";
var websideAbout = "escritorio/sandro/cosas/about.html";

console.log(path.normalize(websidename));

console.log(path.dirname(websideAbout));
console.log(path.basename(websideAbout));
console.log(path.extname(websideAbout));
