function suma() {
    var a=1,b=2;
    suma=a+b;
}

console.log(suma());

// METODOS STRING

// El método split divide la cadena dada en el subcadena y devuelve las partes como una matriz.
const statement = "Visit, the, site, GeekFlare";

console.log(statement.split(" "));
console.log(statement.split(", "));



// El método indexOf devuelve el índice inicial de un carácter dado de la cadena. 
// Volverá -1 si el carácter no está presente en la cadena.

const company = "GeekFlare";

console.log(company.indexOf("Flare"));
console.log(company.indexOf("O"));



// El método replace reemplaza la primera instancia del subcadena con newSubString.

const statement1 = "Visit the site Google";

console.log(statement1.replace("Google", "GeekFlare"));




// El método slice devuelve la subcadena de la cadena de startIndex a endIndex (No incluído).
// El string.slice(0, 6) devuelve la subcadena de la 0th indexar a 5th índice.

const company1 = "GeekFlare";

console.log(company1.slice(0, 4));



// El método substr es similar a la slice método. La única diferencia es que el método
// substr acepta la longitud de la subcadena que debe extraerse de la cadena original.

const company2 = "GeekFlare";

console.log(company2.substr(4, 5));




// El método charAt devuelve el carácter en el índice dado.
// Devuelve una cadena vacía si el índice no es válido.

const company3 = "GeekFlare";

console.log(company3.charAt(2));
console.log(company3.charAt(10));




// El método trim elimina los espacios en blanco inicial y final de la cadena.
// Es una operación in situ, es decir, actualiza la cadena original.

const company4 = "         Geek   Flare           ";

console.log(company4);
console.log(company4.trim());