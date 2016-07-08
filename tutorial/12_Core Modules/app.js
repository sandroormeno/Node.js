//se usa normalmente el mismo nombre
var fs = require("fs");

fs.writeFileSync("maiz.txt", "el maiz es bueno y es rico");
console.log(fs.readFileSync("maiz.txt").toString());