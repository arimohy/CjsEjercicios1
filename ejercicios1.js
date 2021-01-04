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
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const primo=(numero =undefined)=>{
    if(numero===undefined)return console.error(`El valor no ingresado`);
    if(typeof numero!=="number")return console.error(`El valor "${numero}" no es un nro`);
    if(numero==0)return console.error("El numero no puede ser 0");
    if(numero==1)return console.error("El numero no puede ser 1");
    if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo");
    let divisible=false;
    for (let i = 2; i < numero; i++) {
        if((numero%i)==0){
            divisible=true;
            break;
        }
    }
    return(divisible)
    ?console.log(`el nro ${numero},no es primo`)
    :console.log(`el nro ${numero},si es primo`)
    
}
primo(20)
//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const espar=(nro=undefined)=>{
    if(nro===undefined)return console.error(`El valor no ingresado`);
    if(typeof nro!=="number")return console.error(`El valor "${nro}" no es un nro`);
    if((nro%2)==0){
        console.info(`El valor ${nro}, es par`); 
    }
    else
    console.info(`El valor ${nro}, es impar`); 
    
}
espar(10);
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const ConvCAF=(grados =undefined,unidad=undefined)=>{
    if(grados===undefined)return console.error(`El valor no ingresado`);
    if(typeof grados!=="number")return console.error(`El valor "${grados}" no es un nro`);

    if(unidad===undefined)return console.error(`El valor no ingresado`);
    if(typeof unidad!=="string")return console.error(`El valor "${grados}" no es un striing`);
    if(unidad.length!==1 || !/(C||F)/.test(unidad)) return console.warn("valor de unidad no reconocido")
    if(unidad=="C"){
        var f=(grados*9/5)+32;
        console.info(`El grado ${grados} °C,en Fahrenheit es ${f} °F`)
    }
    else{
        var c=(grados-3)*5/9;
        console.info(`El grado ${grados} °F,en Celcius es ${c} °C`)

    }
    
}
ConvCAF(110,"F");
ConvCAF(23,"C");
//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const BinarioDecimal=(nro=undefined,base=undefined)=>{
    if(nro===undefined)return console.error(`El valor no ingresado`);
    if(typeof nro!=="number")return console.error(`El valor "${nro}" no es un nro`);
  
    if(base===undefined)return console.error(`El valor de base no ingresado`);
    if(typeof base!=="number")return console.error(`El valor "${base}" no es un nro`);
    
    if(base ===2 ){
        return console.info(`${nro} base ${base} es ${parseInt(nro,base)} base 10`);

    }else if(base===10)
    return console.info(`${nro} base ${base} es ${nro.toString(2)} base 2`)

    else{
        return console.error("el tipo de base no es valido")
    }
}

BinarioDecimal(100,2);
BinarioDecimal(114,10);
//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const Descuento=(nro=undefined,descuento=0)=>{
    if(nro===undefined)return console.error(`El valor no ingresado`);
    if(typeof nro!=="number")return console.error(`El valor "${nro}" no es un nro`);
   
    if(descuento === 0) return console.info(`${nro} no tiene descuento`);
    if(Math.sign(nro)==-1) return console.error("el monto no puede ser negativo")
    if(Math.sign(descuento)==-1) return console.error("el descuento  no puede ser negativo")
    return console.info(`${nro}-${descuento}%=${nro-(nro*descuento)/100}`)
   
}

Descuento(120,12)

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const aniospasados=(fecha=undefined)=>{
    if(fecha===undefined )return console.warn("No ingresaste fecha");
    if(!(fecha instanceof Date)) return console.error("el valor no es una fecha valida");

    let hoymenosfecha=new Date().getTime()-fecha.getTime(),
    anioms=1000*60*60*24*365
    aniosh=Math.floor(hoymenosfecha/anioms);
    return(Math.sign(aniosh)===-1)
    ?console.info(`Faltan ${Math.abs(aniosh)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(aniosh) ===1)
    ?console.info(`Pasaron ${aniosh} años desde ${fecha.getFullYear()}.`)
    :console.info(`Estamos en el año actual ${fecha.getFullYear()}`)

}
aniospasados(new Date(1996,02,14))
