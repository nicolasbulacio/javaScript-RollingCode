//EJERCICIO I   
/*const edad = parseInt(prompt("Por favor, ingresa tu edad:"))

if (isNaN(edad)) {
alert("El dato ingresado no es un numero. ")
} else if (edad >= 18) {
alert("Ya puedes conducir.")
} else {
alert("Aún no puedes conducir.")}
*/

//EJERCICIO II
/*while (true) {
nota = parseInt(prompt("Ingresa una nota del 0 al 10:"), 10)

if (isNaN(nota)) {
alert("Introduce un número válido.")
continue
}
if (nota < 0 || nota > 10) {
alert("Número erróneo.")
continue
}
break
}
if (nota <= 2) {
alert("Muy deficiente");
} else if (nota <= 4) {
alert("Insuficiente");
} else if (nota <= 6) {
alert("Suficiente");
} else if (nota === 7) {
alert("Bien");
} else if (nota <= 9) {
alert("Notable");
} else {
alert("Sobresaliente");
}*/

//EJERCICIO III
/*let resultado = ""
let texto

while (true) {
texto = prompt("Ingresa una cadena de texto (pulsa Cancelar para terminar):")

if (texto === null) {
    break 
}
if (resultado === "") {
    resultado = texto
} else {
    resultado += "-" + texto
}
if (resultado !== "") {
alert("Cadenas concatenadas:\n" + resultado)
} else {
alert("No ingresaste ninguna cadena.")
}
}*/

//EJERCICIO IV
/*let suma = 0

while (true) {
const entrada = prompt("Ingresa un número (pulsa Cancelar para terminar):")
if (entrada === null) {
break
}
const numero = parseFloat(entrada)
if (isNaN(numero)) {
alert("Eso no es un número válido. Intenta de nuevo.")
continue; 
}
suma += numero
}
alert("La suma total de los números ingresados es: " + suma)
*/

//EJERCICIO V
/*const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

while (true) {
let dni = prompt("Introduce el número de tu DNI (sin puntos):")

if (dni === null) {
break
}
dni = parseInt(dni)
if (isNaN(dni) || dni < 0 || dni > 99999999) {
alert("Por favor, introduce un número válido entre 0 y 99999999.")
continue
}
const resto = dni % 23
const letra = letras[resto]
alert("El DNI "+ dni + " se corresponde con la letra: " + letra)
}*/

//EJERCICIO VI  
/*for (let i = 1; i <= 30; i++) {
let linea = ''
for (let j = 0; j < i; j++) {
linea += i
}
console.log(linea)
}*/

//EJERCICIO VII
/*let numero = parseInt(prompt("Introduce un número (valor máximo 50):"))

if (isNaN(numero) || numero < 1 || numero > 50) {
alert("Número inválido. Debe ser un numero entre 1 y 50.")
} else {
for (let i = numero; i >= 1; i--) {
let linea = ""
for (let j = 0; j < i; j++) {
linea += i
}
console.log(linea)
}
}*/

//EJERCICIO VIII
/*let numero = parseInt(prompt("Introduce un número (máximo 50):"))

if (isNaN(numero) || numero < 1 || numero > 50) {
alert("Número inválido. Debe ser un entero entre 1 y 50.")
} else {
for (let i = 1; i <= numero; i++) {
let linea = ""
for (let j = 1; j <= i; j++) {
linea += j
}
console.log(linea)
}
}*/


