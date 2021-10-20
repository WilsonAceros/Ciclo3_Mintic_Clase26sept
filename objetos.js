// OBJETOS

const producto = {
    nombreProducto: "TV 20 pulg",
    precio: 500,
    inventario: 100,
}

console.log(typeof producto);
console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.inventario);


//CAPTURAR DATO POR TECLADO

var x = prompt("Ingresa un numero: ");
var y = prompt("Ingresa un numero: ");

function suma(){
    suma=parseInt(x)+parseInt(y);
    return suma;
}

alert(suma(x,y));


var nombre, apellido;
nombre = prompt("Escribe tu nombre: ");
apellido = prompt("Escribe tu apellido: ");

if (nombre=='Wilson' && apellido=='Aceros'){
    alert("Sr"+" "+nombre+" "+apellido+" puede pasar");
} else {
    alert("Nombre incorrecto, no puedes ingresar");
}