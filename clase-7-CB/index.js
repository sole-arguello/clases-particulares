
// callback

//Es una funcion que se pasa como parametro de otra funcion
// se ejecuta DESPUES de la ejecucion de la primera


//la o las callbacks
function sumar(a, b){
    return a + b
}

function restar(a,b ){
    return a - b
}

function dividir(a, b){
    if(b === 0){
        return "No se puede dividir por 0"
    }

    return a / b
}

function multiplicar(a, b){
    return a * b
}


//funcion primera 
function operacion( a, b, cb){
    //CB funcion secundaria
    return cb(a, b)
}


console.log("Resultado",operacion(3, 5, sumar))
console.log("Resultado",operacion(8, 5, restar))
console.log("Resultado",operacion(8, 0, dividir))
console.log("Resultado",operacion(8, 5, dividir))
console.log("Resultado",operacion(8, 5, multiplicar))


////////////////////////////////////////////////////

// metodos de arrays - forEach, map, filter, reduce

//sintaxis
// metodo forEach y dentro la CB
// array.forEach( () => { } )

const datos = [
    42,
    "hola",
    [1, 2, 3],
    {nombre: "pedro"}
]

datos.forEach( items => { console.log(items) } )



const numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
numeros.filter( num => {
    
    if(num % 2 === 0){
        console.log(num)
    }
})