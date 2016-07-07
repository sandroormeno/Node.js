var peliculas = require("./pelis");

var emilyPelis = peliculas();
emilyPelis.peliFav = "Historia de Amor";
console.log("la peli favorita de Emily es: " + emilyPelis.peliFav);