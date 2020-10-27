//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function Tamaño(Cadena){
    s=Cadena.toString();
    console.log("Esta es la cadena : "+s);
    console.log(s.length);

}
//Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function Recorte(Cadena,n){
    s=Cadena.toString();
    console.log("El recorte tamaño "+n.toString()+" "+Cadena+" es:");
    console.log(s.substring(0,n))

}
//Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function Convertir(Cadena,f){
    s=Cadena.toString();
    return (s.split(f));
}
//Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function Repetir(Cadena,v){
    s=Cadena.toString()+" ";
    console.log(s.repeat(v))
}
//probando
var d=[3,3,2,1,5,6,3,2,5,6]
ss="la le li lo lu"
dd="sssks"
Tamaño(d);
Recorte(d,5)
console.log(Convertir(ss," "))
Repetir(dd,4)
//programa una duncio  invierta
const invertirCadena =(cadena="")=>
(!cadena)
?console.warn("No ingresaste una cadena de texto")
:console.info(cadena.split("").reverse().join(""));

invertirCadena("quiero que funcione");
//programa una funcion numero de veces que se repite
 const textoEnCadena=(cadena="",texto="")=>{
     if(!cadena)return console.warn("No ingresaste el texto largo")
     if(!texto)return console.warn("No ingresaste la palabra")
     
     let i=0,contador =0;
     while(i!==-1){
         i=cadena.indexOf(texto,i);
         if(i!=-1){
             i++;
             contador++;
         }
     }
     return console.info(`la palabra ${texto} se repite ${contador} veces`);
 }
 textoEnCadena("hola mundo adios mundo ","mundo");
 //7; si es palindromo
 const Palindromo=(palabra="")=>{
    if(!palabra)return console.warn("No ingresaste el palabra")
    palabra=palabra.toLocaleLowerCase();
    let palabrareves=palabra.split("").reverse().join("");

    return(palabra===palabrareves)
    ?console.info(`si es palindromo ${palabra},palabra al reves ${palabrareves}`)
    :console.info(`no es palindromo ${palabra},palabra al reves ${palabrareves}`)
 }
 Palindromo("casa");
 Palindromo("oso");

 //8 eliminar repeticiones 
 const eliminarCaracteres=(texto="",patron="")=>
 (!texto)
 ?console.warn("no ingresaste texto")
 :(!patron)
 ?console.warn("No ingresaste un patron de caracteres")
 :console.info(texto.replace(new RegExp(patron,'ig'),""))

 eliminarCaracteres("xyz1,xyz2,xyz3,xyz4,xyz5","xy");
 eliminarCaracteres("xyz1,xyz2,xyz3,xyz4,xyz5","[a-z]");

 //9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 const nroaleatorio=()=>
 console.info(Math.round(Math.random() * (601 - 501) + 501))

 nroaleatorio()
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua=(nro=0)=>{
    if(!nro)return console.warn("No ingresaste el numero")
    let nrostring;
    let nroreves;
    if(Number.isInteger(nro) && nro>=1){
        nrostring=nro.toString()
        nroreves=nrostring.split("").reverse().join("");
    }
    else
    console.warn("ingrese un numero")

    return(nrostring===nroreves)
    ?console.info(`si es capicua ${nrostring},palabra al reves ${nroreves}`)
    :console.info(`no es capicua ${nrostring},palabra al reves ${nroreves}`)
}
capicua(123);
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial=(nro=0)=>{
    if(!nro)return console.warn("No ingresaste el numero")
    var total = 1; 
	for (i=1; i<=nro; i++) {
		total = total * i; 
	}
	console.info(total); 
}
factorial(5);