let nombres=['Jorge','Isabel','Juan','Pedro','Karina','Jose','Arturo','Rogelio','Bertha'];

const boton = document.getElementById("boton");

const mensaje = document.getElementById("mensaje");



function convertir(nombres){

    let nuevoNombres = nombres.map(n => n.toUpperCase());
    return nuevoNombres;
}



boton.addEventListener("click", (e) => {

    let nombreMayuscula = [];
    nombreMayuscula = convertir(nombres);

    let texto = "Volviendo mayuscula :";


    nombreMayuscula.forEach(element => {
        texto = texto + ", " + element;
    });

    mensaje.innerHTML = texto;
    console.log(texto);
});


/* 2) */
const boton2 = document.getElementById("boton2");
const edadPerro = document.getElementById("edadPerro");

function hallarEdadPerro(edad){
    return edad * 7;
}

boton2.addEventListener("click", (e) => {

    
    console.log(edadPerro);
    console.log(+edadPerro.value);
    let edadPe = hallarEdadPerro(+edadPerro.value);

    mensaje2.innerHTML = "La edad de tu perro es : "+edadPe;
    console.log(mensaje2);
});



/* 3) */
class Perro {
    constructor(nombre, color, raza) {
      this.nombre = nombre;
      this.color = color;
      this.raza = raza;
    }
}

const perro1 = new Perro("perro1","marron","raza1"); 
const perro2 = new Perro("perro2","negro","raza2"); 
const perro3 = new Perro("perro3","blanco","raza3"); 

console.log(perro1);
console.log("su nombre es : " + perro1.nombre);
console.log(perro2);
console.log("su color es : " + perro1.color);
console.log(perro3);
console.log("su raza es : " + perro1.raza);