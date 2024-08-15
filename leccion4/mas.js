//tipo de dato boolean (true, false) el de tipo boolean solo tiene dos valores false o true
var bandera = false
console.log(typeof bandera); //dice que la bandera es de tipo boolen porque tiene alojado
// uno de los dos valores false or true

function funcion() { }
console.log(typeof funcion);

//Tipo de clase en un function
class persona {
    constructor(nombre, apellido) {

        this.nombre = nombre;
        this.apellido = apellido;

    }


}
console.log(typeof persona);
//tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

// null= ausencia de valor
var y = null;
console.log(typeof y);     //el null es considerado como un objeto