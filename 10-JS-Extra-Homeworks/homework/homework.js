// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
      // propid1 = valor propiedad2 = valor
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí


 // array =[]
 // return Object.keys (objeto). map ((key) => {
   // return [key, objeto[key]]
  //});

  //var matriz = []
  //for ( var key in objeto){
    //matriz.push ([key, objeto[key]])
  //}
  //return matriz
  return Object.entries (objeto)  
}
  

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número 
  //de veces que aparece 
  //en formato par clave-valor.
  //                 012345.................
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí 
  var objeto = {}
    for (i=0; i<string.length;i++){
     if ( !objeto[string[i]]){
      objeto[string[i]] =0
     }
     objeto[string[i]] += 1
    }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //         0 1 2 3 4 5 6 7
  //Ejemplo: s o y H E N R Y -> HENRYsoy
  //Escribe tu código aquí :
  var mayusc = ''
  var minusc = ''
  for (var i = 0; i < s.length; i++ ) {
    if (s[i] === s[i].toUpperCase()){
    mayusc += s [i]
    }else{
      minusc += s[i]
    }
  }
  return mayusc + minusc 
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí :

//return str.split('').reverse().join(' ')
  //var frase = []
 // for (i = 0; i < str.length; i++) {
   // frase.unshift(str[i])
//  }
  //return frase.join('').split(' ').reverse().join(' ')
  var fraseInv = str.split(' ').map(function(palabra){
   return palabra.split('').reverse().join('')
  }).join(' ')
   return fraseInv
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //var transformaNumero = toString(numero)
  var NumeroString = numero.toString()
  var NumeroDadoVuelta = NumeroString.split("").reverse().join("")
    if (NumeroString === NumeroDadoVuelta){
      return "Es capicua"
    }
    return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 
  var array = '';

  for(i=0;i < cadena.length; i++){
   if (cadena[i]=== 'a' || cadena[i]=== 'b' || cadena[i]=== 'c') {
    delete cadena[i]
   }
   else{
   
    array = array+cadena[i]
  }
}
return array

//OTRA FORMA CON CONTINUE 
//for(i=0;i < cadena.length; i++){
  //if (cadena[i]=== 'a' || cadena[i]=== 'b' || cadena[i]=== 'c') continue
  //else{
   //array = array+cadena[i]
   //}
   //}
   //return array
}
  
  

  


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 return  arr.sort(function(a,b,) {
    return a.length - b.length;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  // [ 5, 9, 3, 4, 7 ]    [1, 8, 2, 3, 4]
  var nuevoArray=[]
  for (var elemento1 of arreglo1){
    for(var lelmento2 of arreglo2){
      if (elemento1 ===lelmento2 ){
        nuevoArray.push(elemento1);
      }
    }
  }
  return nuevoArray
  // OTRA FORMA 
  // arrayInterseccion= arreglo.filter(value => arreglo.includes(value))
 //return arrayInterseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

