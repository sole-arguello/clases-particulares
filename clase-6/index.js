
// // SIN PARAMETROS
// //Declarativas

// //sintaxis


// //saludar()

// function saludar(){
//     //bloque de codigo
//     console.log("hola")
// }

// //let num = [1, 2]

// saludar()


// /////////////////////////////////////////

// //Expresion 
// // despedida() no la puedo llamar antes de crearla
// const despedida = function(){
//     console.log("chau")
// }
// despedida()
// let num = []

// console.log(num)
// despedida()


// /////////////////////////////////////////
// //flecha o arrowFunction ()=>{}

// const mostrar = () => {
//     console.log("Mostrando algo")
//     return "hola"
// }

// mostrar()
// console.log(mostrar())


// //CON PARAMETROS
// //declarativas
// function sumar(a, b){
//     //bloque de codigo
//     console.log(a + b)
//     return a + b
// }

// console.log(sumar(4,6))
// sumar(11, 24)


// //expresion

// const restar = function(c, d){
//     return c - d
// }
// //argumentos
// console.log(restar(10, 5))


// //flecha

// const multiplicar = (e, f)=>{
//     return e * f
// }
// console.log(multiplicar(5, 5))

//  const nombre = ( "evento", sumar() )

// declaracion de variables y su alcance 


// locales y globales

let varibleGlobal = "soy global"

const miFuncion = ()=>{

    let variable = "soy local"
    console.log(variable)
    console.log(varibleGlobal)

}
//console.log(variable)
miFuncion()

console.log(varibleGlobal)




