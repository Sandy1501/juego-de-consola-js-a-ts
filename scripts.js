var Jugador = /** @class */ (function () {
    function Jugador(nombre, poder) {
        this.vida = 100;
        this.habilidad = 100;
        this.nombre = "";
        this.poder = "";
        this.nombre = nombre;
        this.poder = poder;
    }
    Jugador.prototype.recuperar = function (jugadorObjetivo) {
        if (this.habilidad < 10) {
            console.log("estas a punto de morir");
            jugadorObjetivo.habilidad += 100;
        }
        else {
            console.log("aun pudes vivir");
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.revivir = function (jugadorObjetivo) {
        jugadorObjetivo.habilidad += 100;
        jugadorObjetivo.vida += 100;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.curar = function (jugadorObjetivo) {
        jugadorObjetivo.vida += 20;
        this.habilidad -= 40;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.atacar = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= 20;
        this.habilidad -= 40;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.status = function (jugadorObjetivo) {
        console.log(jugadorObjetivo);
        console.log(this);
    };
    return Jugador;
}());
var personaje1 = new Jugador('spider man', 'telaraña');
var personaje2 = new Jugador('Doctor Octopus', 'escalar');
console.log(personaje1);
console.log(personaje2);
