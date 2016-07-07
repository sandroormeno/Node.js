function Usuario(){
    this. nombre = "";
    this. vida = 100;
    this. Davida = function giveLive(jugador){
        jugador.vida += 3;
        console.log(this.nombre + " dio 3 vidas a " + jugador.nombre);
        this.vida -= 3;
    }
}
var Sandro = new Usuario();
var Malena = new Usuario();

Sandro.nombre = "Sandro";
Malena.nombre = "Malena";

Sandro.Davida(Malena);
console.log("Sandro: " + Sandro.vida )
console.log("Malena: " + Malena.vida )
//Esto es lo nuevo, se puede añadir   funciones a todos los objetos
Usuario.prototype.quitaVida = function uppercut(jugador){
        jugador.vida -= 5;
        console.log(this.nombre + " quitó 5 vidas a " + jugador.nombre);
}
Malena.quitaVida(Sandro);
console.log("Sandro: " + Sandro.vida );
console.log("Malena: " + Malena.vida );

//se puede añadir propiedades   a todos los objetos
Usuario.prototype.magia = 120;
console.log("Sandro.magia: " + Sandro.magia );
console.log("Malena.magia: " + Malena.magia );
