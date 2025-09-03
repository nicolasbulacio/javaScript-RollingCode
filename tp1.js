
/*EJERCICIO I*/
/*alert("Hola Mundo")*/

/*EJERCICIO II*/
//document.writeln("Hola Mundo")

//EJERCICIO III 
//alert("El resultado de sumar 3 mas 5 es 8")

//EJERCICIO IV
/*const nombreDeUsuario=prompt("Ingrese su nombre")
alert("Hola "+nombreDeUsuario)
*/

//EJERCICIO V
/*const num1=parseInt(prompt("Ingrese el primer numero"))
const num2=parseInt(prompt("Ingrese el segundo numero"))
alert("El resultado de la suma es "+ (num1+num2))*/

//EJERCICIO VI
/*const num1 = parseInt(prompt("Ingresa el primer número:"))
const num2 = parseInt(prompt("Ingresa el segundo número:"))

if (num1 > num2) {
alert("El numero mayor es el: " + num1)
} else if (num2 > num1) {
alert("El numero mayor es el: " + num2)
} else {
alert("Ambos números son iguales.")
}*/

//EJERCICIO VII
/*const num1 = parseInt(prompt("Ingresa el primer número:"))
const num2 = parseInt(prompt("Ingresa el segundo número:"))
const num3 = parseInt(prompt("Ingerese el tercer numero:"))

let mayor

if (num1 > num2 && num1 > num3) {
mayor = num1
} else {
mayor = num3
if (num2 > num3) {
mayor = num2
} else {
mayor = num3
}
}

alert("El numero mayor es: " + mayor)*/


//EJERCICIO VIII
/*const numero = parseInt(prompt("Ingresa un número:"));

if (numero % 2 === 0) {
alert("El " + numero + " es divisible por 2.");
} else {
alert("El " + numero + " No es divisible por 2.");
}
*/

//EJERCICIO IX
/*const frase = prompt("Ingresa una frase (hasta 10 caracteres):")
let vocales = ""

if (frase.length > 0) {
const letra1 = frase.charAt(0).toLowerCase()
if (letra1 === "a" || letra1 === "e" || letra1 === "i" || letra1 === "o" || letra1 === "u") vocales += letra1
}
if (frase.length > 1) {
const letra2 = frase.charAt(1).toLowerCase()
if (letra2 === "a" || letra2 === "e" || letra2 === "i" || letra2 === "o" || letra2 === "u") vocales += letra2
}
if (frase.length > 2) {
const letra3 = frase.charAt(2).toLowerCase()
if (letra3 === "a" || letra3 === "e" || letra3 === "i" || letra3 === "o" || letra3 === "u") vocales += letra3
}
if (frase.length > 3) {
const letra4 = frase.charAt(3).toLowerCase()
if (letra4 === "a" || letra4 === "e" || letra4 === "i" || letra4 === "o" || letra4 === "u") vocales += letra4
}
if (frase.length > 4) {
const letra5 = frase.charAt(4).toLowerCase()
if (letra5 === "a" || letra5 === "e" || letra5 === "i" || letra5 === "o" || letra5 === "u") vocales += letra5
}
if (frase.length > 5) {
const letra6 = frase.charAt(5).toLowerCase()
if (letra6 === "a" || letra6 === "e" || letra6 === "i" || letra6 === "o" || letra6 === "u") vocales += letra6
}
if (frase.length > 6) {
const letra7 = frase.charAt(6).toLowerCase()
if (letra7 === "a" || letra7 === "e" || letra7 === "i" || letra7 === "o" || letra7 === "u") vocales += letra7
}
if (frase.length > 7) {
const letra8 = frase.charAt(7).toLowerCase()
if (letra8 === "a" || letra8 === "e" || letra8 === "i" || letra8 === "o" || letra8 === "u") vocales += letra8
}
if (frase.length > 8) {
const letra9 = frase.charAt(8).toLowerCase()
if (letra9 === "a" || letra9 === "e" || letra9 === "i" || letra9 === "o" || letra9 === "u") vocales += letra9
}
if (frase.length > 9) {
const letra10 = frase.charAt(9).toLowerCase()
if (letra10 === "a" || letra10 === "e" || letra10 === "i" || letra10 === "o" || letra10 === "u") vocales += letra10
}

alert("Vocales encontradas: " + vocales)
*/

//EJERCICIO X y XI
/*const numero = parseInt(prompt("Ingresa un número:"))
let mensaje = ""
let ponerComa = false
let cantidadDivisores = 0

if (numero % 2 === 0) {
if (ponerComa) {
mensaje += ", 2"
} else {
mensaje += "2"
ponerComa = true
}
cantidadDivisores++
}
if (numero % 3 === 0) {
if (ponerComa) {
mensaje += ", 3"
} else {
mensaje += "3"
ponerComa = true
}
cantidadDivisores++
}
if (numero % 5 === 0) {
if (ponerComa) {
mensaje += ", 5"
} else {
mensaje += "5"
ponerComa = true
}
cantidadDivisores++
}
if (numero % 7 === 0) {
if (ponerComa) {
mensaje += ", 7"
} else {
mensaje += "7"
ponerComa = true
}
cantidadDivisores++
}
if (cantidadDivisores === 0) {
alert("El número NO es divisible por 2, 3, 5 ni 7.")
} else {
if (cantidadDivisores === 1) {
    alert("El número es divisible solo por: " + mensaje)
} else {
    alert("El número es divisible por: " + mensaje)
}
}*/
