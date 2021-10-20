nombreArreglo = [];
cadenas = ["juan", "pedro"];
numeros = [1, 5, 9, 8];
objetos = [{
    precio: 500,
    nombrep: "TV"
}];
arreglo = [cadenas, numeros, objetos];

console.log(arreglo.length);
console.log(cadenas);
console.log(numeros);
console.table(numeros);
numeros[2] = 86;
console.log(numeros[2]);
console.log(objetos);
console.log(arreglo)

numeros.forEach(function (numeros) {
    if (numeros = 5) {
        console.log(numeros);
    }
})

let sum = 0;
const numbers1 = [65, 44, 12, 4];

numbers1.forEach(myFunction1);

function myFunction1(item) {
    sum += item;
}

console.log(sum);


const numbers2 = [65, 44, 12, 4];
numbers2.forEach(myFunction2)

function myFunction2(item, index, arr) {
    arr[index] = item * 10;
    console.log(arr);
}