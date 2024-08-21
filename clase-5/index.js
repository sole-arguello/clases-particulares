//for clasico
const numeros = [25, 5, 10, 2, 8]
const palabras = [ "hola", "chau"]

// for(let i = 0; i < arrayNumeros.length; i++){

//     //console.log(arrayNumeros[i])

// }

//for...in itera sobre las propiedades(claves) de un objeto, (en el caso de un array, sobre los índices)

//sintaxis
// for(let i in array){

//     console.log(array[i])

// }

for(let numero in numeros){

    console.log("in", numeros[numero])

}


//for...of itera sobre los valores de un objeto iterable como arrays, strings, etc.

//sintaxis
// for(let variable of array){

//     console.log(variable)
// }
// for(let numero of numeros){

//      console.log("Of",numero)

// }

for(let[i, numero] of numeros.entries()){
    console.log(`i: ${i}, valor: ${numero}`)
}

// for(let numero of arrayNumeros){

//     console.log(numero)

// }

// //entries (clave -valor )

// for(let [i, valor] of arrayNumeros.entries()){

//     console.log(`i: ${i}, valolr: ${valor}`)
// }










