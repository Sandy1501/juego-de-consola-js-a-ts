class Jugador {
    vida : number = 100;
    habilidad : number = 100;
    nombre : string = ""; 
    poder : string = "";
    constructor (nombre : string, poder : string){
        this.nombre=nombre;
        this.poder=poder;
    }   
    recuperar(jugadorObjetivo : any){
        if(this.habilidad<10){
            console.log("estas a punto de morir");
            jugadorObjetivo.habilidad +=100;
        }else{
            console.log("aun pudes vivir");
        }
        this.status(jugadorObjetivo);
    }
    revivir(jugadorObjetivo : any){
        jugadorObjetivo.habilidad +=100;
        jugadorObjetivo.vida +=100;
        this.status(jugadorObjetivo);
    }
   
    curar(jugadorObjetivo : any){
        jugadorObjetivo.vida +=20;
        this.habilidad -=40;
        this.status(jugadorObjetivo);
    }

    atacar(jugadorObjetivo : any){
        jugadorObjetivo.vida -=20;
        this.habilidad -=40;
        this.status(jugadorObjetivo);
    }

    status(jugadorObjetivo :any){
        console.log(jugadorObjetivo);
        console.log(this);
    }
    
}

const personaje1 = new Jugador ('spider man', 'telaraña');
const personaje2 = new Jugador ('Doctor Octopus', 'escalar');

console.log(personaje1);
console.log(personaje2);