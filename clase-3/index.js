//conjuciones

// and && (y)
// 1 condicion es V y la segunda es V = V
// 1 condicion es F la 2 segunda NO LA EVALUA

// let a = true
// let b = true

// const resultado = a && b
// console.log(resultado)

// or || (0)
// 1 condicion es V y la segunda es F = V
// 1 condicion es F y la segunda es F = F
// 1 condicion es F la 2 segunda es V = V
// 1 condicion es V y la segunda es F = V
// 1 condicion es V la 2 segunda NO LA EVALUA

// not ! (no o negacion)

// const c = true
// const d = !c
// console.log(d)

/// estructuras if / if else / else if / for : clasico - of - in

// const edad = 15
// if(edad < 13 ){
//     console.log(edad < 13)
//     console.log("Es menor",)
// }else if(edad < 13 && edad > 20){
//     console.log(edad >= 13)
//     console.log(edad < 20)
//     console.log("Es mayor")
// }else{
//     console.log("Es mayor")
// }

// const nombre = "pedro"
// if(nombre === "pedro"){
//     console.log("es pedro")
// }

// REPITE un bloque de codigo MIENTRAS se cumpla la condicion QUE YO LE PONGO
// for(inicio; condicion; contador){

// }


// primera vuelta
// i = 0
// 0 es menor que 5?
// i = i + 1 // 0 + 1 = 1

// imprime 0

// segunda vuelta
// i = 1
// 1 es menor que 5?
// i = i + 1 // 1 + 1 = 2
// imprime 1

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// indice =         0     1     2 ......

for(let i=0; i < array.length; i++){
    //2 / 2 = 1 su resto es 0
    if(array[i] % 2 === 0){
        console.log("Los pares son:", array[i])
    }

}





