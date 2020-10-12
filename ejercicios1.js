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