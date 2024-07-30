//conjuciones 

// and && (y - 1)
// v - v = v (true)

// let a = false
// let b = true

// console.log(a && b)

// or || (letra o - 0)
// v - f = v (true)

// let c = true
// let d = false

// console.log(c || d)


// // not ! (no o negacion)

// let e = true
// let f = !e
// console.log(f)

//estructuras if / if - else / else if / for : clasico - of - in

// if
// let edad = 26

// if(edad < 18){
//     console.log(edad < 18)
//     console.log("es menor de edad")

// }else if(edad > 18 && edad < 25){
//     console.log(edad > 18)
//     console.log(edad < 25)
//     console.log("es adolescente")
// }else{
//     console.log(edad > 18)
//     console.log(edad < 25)
//     console.log("Es adulto")
// }
// if(edad >= 18){

//     //bloque de codigo a ejecutar
//     console.log(edad >= 18)
//     console.log("puedes votar")

// }

// let nombre = "pedro"

// if(nombre){
//     console.log(" Si es pedro")
// }



// for: clasico

// for(inicio ; condicion(v) ; contador++){
//     //bloque de codigo
// }
let array = ["pedro", "maria", "jose"]
// indice =     0       1         2 ....

console.log(array)
console.log(array.length)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// indice =     0   1   2   3   4   5   6   7   8   9
for(let i = 0; i < numeros.length; i++){// i = i + 1

    if(numeros[i] % 2 === 0){
        console.log("Los pares son:", numeros[i])
    }else{
        console.log("Los impares son:", numeros[i])
    }

}

// primera vuelta
// i = 0
// 0 < 3?
// 0 + 1 = 1


// segunda vuelta
// i = 1
// 1 < 3?
// 1 + 1 = 2


//ultima vuelta
// i = 3
// 3 < 3?


// for(let i = 0; i < 10; i++){}

