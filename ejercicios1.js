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

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const nrodeVocalesCondonantes=(cadena=undefined)=>{
    if(cadena===undefined )return console.warn("No ingresaste un texto");
    var nroVocales=cadena.match(/[aeiouáéíóúü]/gi).length
    return console.info(`El nro de vocales es ${nroVocales} y El nro de consonantes es ${(cadena.replace(/\s+/g, '')).length-nroVocales} de la palabra ${cadena}`)
}
nrodeVocalesCondonantes("Yhomira")
nrodeVocalesCondonantes("Alexandra")
nrodeVocalesCondonantes("Yhomira Alexandra")
//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const ValidadNombre=(nombre="")=>{
    if(!nombre)return console.warn("No ingresaste un nombre");
    if(typeof nombre!== "string")return console.error(`El valor ${nombre} no es una cadena de texto`)
    let expreg=/^[a-zñáéíóúü\s]+$/gi.test(nombre);

    return(expreg)
    ?console.info(`${nombre} ,es un nombre valido`)
    :console.warn("No es valido el nombre");
}
ValidadNombre("Yhomira ññÑ")
//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const ValidarExpEmail=(email="")=>{
    if(!email)return console.warn("No ingresaste un nombre");
    if(typeof email!== "string")return console.error(`El valor ${email} no es una cadena de texto`)
    let expreg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return(expreg)
    ?console.info(`${email} ,es un nombre valido`)
    :console.warn("No es valido el nombre");
}
ValidarExpEmail("fdf@gmail.com");

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const alcuadrado=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.warn("No es un arreglo");
    if(!(arreglo instanceof Array))return console.error("El valor ingresado no es un arreglo");
    if(arreglo.length===0)return console.error("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number")return console.error("LOS VALORES NO SON NUMEROS");
    
    }
    const arreglof=arreglo.map(el=>el*el);
    return console.info(`El arreglo original= ${arreglo},El arreglo al cuadrado ${arreglof}`);
}
alcuadrado([3,4,3]);
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const mayorymenor=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.warn("No es un arreglo");
    if(!(arreglo instanceof Array))return console.error("El valor ingresado no es un arreglo");
    if(arreglo.length===0)return console.error("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number")return console.error("LOS VALORES NO SON NUMEROS");
    
    }
    return console.info(`Arreglo original ${arreglo},el valor mayor es ${Math.max(...arreglo)} y el valor minimo es ${Math.min(...arreglo)}`)
}
mayorymenor([3,4,3,-45]);
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
const separarparimpar=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.warn("No es un arreglo");
    if(!(arreglo instanceof Array))return console.error("El valor ingresado no es un arreglo");
    if(arreglo.length===0)return console.error("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number")return console.error("LOS VALORES NO SON NUMEROS");
    
    }
    return console.info({
        pares:arreglo.filter(nro=>nro%2===0),
        impares:arreglo.filter(nro=>nro%2===1)
    })
}
separarparimpar([1,2,3,4,5,6,7,8,9])
//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const OrdAscDesc=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.warn("No es un arreglo");
    if(!(arreglo instanceof Array))return console.error("El valor ingresado no es un arreglo");
    if(arreglo.length===0)return console.error("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number")return console.error("LOS VALORES NO SON NUMEROS");
    
    }
    return console.info({
        arreglo,
        asc:arreglo.map(el=>el).sort(),
        desc:arreglo.map(el=>el).sort().reverse()
    })
}
OrdAscDesc([7, 5,7,8,6])
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const Eliminarduplicados=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.warn("No es un arreglo");
    if(!(arreglo instanceof Array))return console.error("El valor ingresado no es un arreglo");
    if(arreglo.length===0)return console.error("El arreglo esta vacio");
    if(arreglo.length===1)return console.error("aumente mas valores a su arreglo");
    return console.info({
        arreglo,
        sinduplicados:arreglo.filter((value,index,self)=>self.indexOf(value)===index)
    })
}
Eliminarduplicados(["x", 10, "x", 2, "10", 10, true, true]) 
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedioarreglo=(arreglo=undefined)=>{
    if(arreglo===undefined)return console.warn("No es un arreglo");
    if(!(arreglo instanceof Array))return console.error("El valor ingresado no es un arreglo");
    if(arreglo.length===0)return console.error("El arreglo esta vacio");
    for(let num of arreglo){
        if(typeof num !== "number")return console.error("LOS VALORES NO SON NUMEROS");
    
    }
    return console.info(
        arreglo.reduce((total,num,index,arreglo)=>{
            total+=num;
            if(index===arreglo.length-1){
                return`El promedio de ${arreglo.join("+")}es ${total/arreglo.length}`;
            }
            else{
                return total;
            }
        })
    )
    }
promedioarreglo([1,9,4,6,4])

//27) Programa una clase llamada Pelicula.

    //La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    //- Todos los datos del objeto son obligatorios.
    //- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    //   7 restantes números.
    //- Valida que el título no rebase los 100 caracteres.
    //- Valida que el director no rebase los 50 caracteres.
    //- Valida que el año de estreno sea un número entero de 4 dígitos.
    //- Valida que el país o paises sea introducidos en forma de arreglo.
    //- Valida que los géneros sean introducidos en forma de arreglo.
    // - Valida que los géneros introducidos esten dentro de los géneros 
    //   aceptados*.
    //- Crea un método estático que devuelva los géneros aceptados*.
    //- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        //decimal de una posición.
    //- Crea un método que devuelva toda la ficha técnica de la película.
    //- Apartir de un arreglo con la información de 3 películas genera 3 
    // instancias de la clase de forma automatizada e imprime la ficha técnica 
        //de cada película.

//* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
class Pelicula{
    constructor({id,titulo,director,estreno,pais,generos,calificacion})
    {
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;
        //validaciones
        this.validarIMDB(id)
        this.validarCadena("Nombre del Titulo",titulo,100)
        this.validarCadena("Nombre del director",director,50)
        this.validarnro("Estreno",estreno,4)
        this.validararreglo("Pais",pais)
        this.validarGeneros(generos)
        this.validarCalificacion(calificacion)
    }
    static get Listageneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary ","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static generosaceptados()
    {
        return console.info(`Los generos aceptados son:${Pelicula.Listageneros.join(",")}`);
    }
    validarCadena(propiedad,valor,tamano){
        if(!valor) return console.warn(` ${propiedad} "${valor}" Esta vacio`);
        if(typeof valor !=="string")return console.error(`${propiedad} "${valor}" ingresado ,no es una cadena de texto`);
        if(valor.length>tamano)return console.error(`${propiedad} "${valor}" ingresado ,no puede ser mayor "${tamano}"`);
        return true;
    }
    validarnro(propiedad,valor,tamano){
        if(!valor )return console.warn(` ${propiedad} "${valor}" Esta vacio`);
        if(typeof valor !=="number")return console.error(`${propiedad} "${valor}" ingresado ,no es un  numero`);
        var expre=new RegExp("^([0-9]){"+tamano+"}$");
        if(!expre.test(valor))
            return console.error(` "${valor}"no es valido,el valor debe contar con ${tamano}digitos`)
        
        return true;
    }
    validarnro(propiedad,valor){
        if(!valor )return console.warn(` ${propiedad} "${valor}" Esta vacio`);
        if(typeof valor !=="number")return console.error(`${propiedad} "${valor}" ingresado ,no es un  numero`);
        return true;
    }
    validararreglo(propiedad,valor){
        if(!(valor instanceof Array))return console.error(`${propiedad} "${valor}" ingresado ,no es un arreglo`);
        if(valor.length===0)return console.error(`arreglo ingresado ,no tiene datos`);
        for(let cadena of valor){
            if(typeof cadena !=="string")return console.error(`EL VALOR ${cadena} no es una cadena de texto`);
        }
        return true;
        
    }
   
    validarIMDB(id){
        if(this.validarCadena("IMDB id",id,9)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
            return console.error(`IMDB "${id}"no es valido debe tener 9 caracteres,los 2 primeros caracteres en minuscula y los 7 ultimos numeros`)
        }
    }

    validarGeneros(generos){

        if(this.validararreglo("Generos",generos)){
            for(let genero of generos){
                //console.log(genero,Pelicula.Listageneros.includes(genero));
                if(!Pelicula.Listageneros.includes(genero)){
                console.error( `Genero(s) incorrecto "${generos.join(",")}"`)
                Pelicula.generosaceptados();
                }
            }
        }

    }
    validarCalificacion(calificacion){
        if(this.validarnro("Calificacion",calificacion)){
            return(calificacion<0 || calificacion>10)
            ?console.error(`la calificacion  tiene que ser un nuemero entre 0 y 10`)
            :this.calificacion=calificacion.toFixed(1);
        }
    }


    fichatecnica(){
        console.info(`Ficha tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño estreno:\"${this.estreno}"\n
        Pais: "${this.pais.join("_")}\n"Generos: "${this.generos.join(",")}"\n
        Calificacion: "${this.calificacion}"\nIMDB id : "${this.id}"`);
    }
    
}

//Pelicula.generosaceptados();
/*const peli =new Pelicula({
    id:"mm1234567",
    titulo:"1111111111111111111111111111111111111111111111111122222222222222222222222222222222222222222222222222",
    director:"01234567890123456789012345678901234567890123456789",
    estreno:2212,
    pais:["md"],
    generos:["Comedy","Horror"],
    calificacion: 5.91412121
});
peli.fichatecnica();*/

const mispelis =[{
    id:"mm1234567",
    titulo:"peli0",
    director:"01234567890123456789012345678901234567890123456789",
    estreno:2212,
    pais:["md"],
    generos:["Comedy","Horror"],
    calificacion: 5.91412121
},
{
    id:"mm1234568",
    titulo:"peli1",
    director:"01234567890123456789012345678901234567890123456789",
    estreno:2212,
    pais:["md"],
    generos:["Comedy","Horror"],
    calificacion: 5.91412121
},
{
    id:"mm1234569",
    titulo:"peli3",
    director:"01234567890123456789012345678901234567890123456789",
    estreno:2212,
    pais:["md"],
    generos:["Comedy","Horror"],
    calificacion: 5.91412121
}
]
mispelis.forEach(el=>new Pelicula(el).fichatecnica())