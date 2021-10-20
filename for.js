var cont,n;

n=prompt("Escribe un numero:");
document.write("Hola "+n+" veces<br>");

for(let i=0;i<n;i++){
    document.write("Hola"+"<br>");
}

cont=0;
while(cont<10){
    console.log("Valor de la constante: "+cont);
    cont++;
}

cont=0;
do{
    console.log("Valor de la i: "+cont);
    cont++;
}while(cont<5)