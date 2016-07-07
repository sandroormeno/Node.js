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