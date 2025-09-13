//EJERCICIO I
/*const edad = parseInt(prompt("Por favor, ingresa tu edad:"))

if (isNaN(edad)) {
    alert("El dato ingresado no es un numero. ")
} else if (edad >= 18) {
    alert("Ya puedes conducir.")
} else {
    alert("Aún no puedes conducir.")
}*/

//EJERCICIO II
/*while (true) {
nota = parseInt(prompt("Ingresa una nota del 0 al 10:"))

    if (isNaN(nota)) {
    alert("Introduce un número válido.")
    continue
}
    if (nota < 0 || nota > 10) {
    alert("Número erróneo.")
    continue
}
break;
}
if (nota <= 2) {
    alert("Muy deficiente")
} else if (nota <= 4) {
    alert("Insuficiente")
} else if (nota <= 6) {
    alert("Suficiente")
} else if (nota === 7) {
    alert("Bien")
} else if (nota <= 9) {
    alert("Notable")
} else {
    alert("Sobresaliente")
}*/

//EJERCICIO III
/*let resultado = ""
let texto

while (true) {
texto = prompt("Ingresa una cadena de texto (pulsa Cancelar para terminar):")

    if (texto === null) {
    break;
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
const numero = parseFloat(entrada);
if (isNaN(numero)) {
    alert("Eso no es un número válido. Intenta de nuevo.")
    continue
}
    suma += numero
};
alert("La suma total de los números ingresados es: " + suma)
*/

//EJERCICIO V

/*while (true) {
    let dni = prompt("Introduce el número de tu DNI (sin puntos):")

    if (dni === null) {
        break;
    }

    dni = parseInt(dni);
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        alert("Por favor, introduce un número válido entre 0 y 99999999.")
        continue
    }

    const resto = dni % 23
    let letra = ""

    switch (resto) {
        case 0: letra = "T"; break;
        case 1: letra = "R"; break;
        case 2: letra = "W"; break;
        case 3: letra = "A"; break;
        case 4: letra = "G"; break;
        case 5: letra = "M"; break;
        case 6: letra = "Y"; break;
        case 7: letra = "F"; break;
        case 8: letra = "P"; break;
        case 9: letra = "D"; break;
        case 10: letra = "X"; break;
        case 11: letra = "B"; break;
        case 12: letra = "N"; break;
        case 13: letra = "J"; break;
        case 14: letra = "Z"; break;
        case 15: letra = "S"; break;
        case 16: letra = "Q"; break;
        case 17: letra = "V"; break;
        case 18: letra = "H"; break;
        case 19: letra = "L"; break;
        case 20: letra = "C"; break;
        case 21: letra = "K"; break;
        case 22: letra = "E"; break;
        default:
            letra = "Error";
    }

    alert("El DNI " + dni + " se corresponde con la letra: " + letra)
}
*/

//EJERCICIO VI
/*for (let i = 1; i <= 30; i++) {
    let linea = ""
for (let j = 0; j < i; j++) {
    linea += i
}
console.log(linea);
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
    console.log(linea);
}
}*/

//EJERCICIO VIII
/*const numero = parseInt(prompt("Introduce un número (máximo 50):"));

if (isNaN(numero) || numero < 1 || numero > 50) {
    alert("Número inválido. Debe ser un entero entre 1 y 50.")
} else {
for (let i = 1; i <= numero; i++) {
    let linea = ""
    for (let j = 1; j <= i; j++) {
        linea += j
    }
    document.writeln(linea+"<br>")
}
}*/

//EJERCICIO IX

/*for (let i = 1; i <= 500; i++) {
    let salida = i.toString()
    if (i % 4 === 0) {
        salida += ' (Múltiplo de 4)'
    }
    if (i % 9 === 0) {
        salida += ' (Múltiplo de 9)'
    }

    document.writeln(salida+"<br>")

    if (i % 5 === 0) {
        document.writeln('—————————————————————'+"<br>")
    }
}*/


//EJERCICIO X

/*const filas = parseInt(prompt("Introduce el número de filas:"))
const columnas = parseInt(prompt("Introduce el número de columnas:"))

if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    console.log("Entrada no válida. Usa números mayores que 0.")
} else {
  let total = filas * columnas

    for (let i = 0; i < filas; i++) {
    let fila = ""
    for (let j = 0; j < columnas; j++) {
        fila += total.toString().padStart(4, ' ') + " "
        total--
    }
    console.log(fila)
    }
}*/

//EJERCICIO XI
/*const nombre1 = prompt("Introduce el primer nombre:")
const edad1 = parseInt(prompt("Introduce la edad de " + nombre1 + ":"))

const nombre2 = prompt("Introduce el segundo nombre:")
const edad2 = parseInt(prompt("Introduce la edad de " + nombre2 + ":"))

const nombre3 = prompt("Introduce el tercer nombre:")
const edad3 = parseInt(prompt("Introduce la edad de " + nombre3 + ":"))

if (!(nombre1 && !isNaN(edad1) && edad1 >= 0 &&
        nombre2 && !isNaN(edad2) && edad2 >= 0 &&
        nombre3 && !isNaN(edad3) && edad3 >= 0)) {
console.log("Entrada inválida. Por favor, recarga y prueba de nuevo.")
} else {
    let nombreMayor = nombre1
    let edadMayor = edad1

if (edad2 > edadMayor) {
    nombreMayor = nombre2
    edadMayor = edad2
}

if (edad3 > edadMayor) {
    nombreMayor = nombre3;
    edadMayor = edad3
}

console.log("La persona de mayor edad es " + nombreMayor + " con " + edadMayor + " años.")
}*/

//EJERCICIO XII
/*const resultado= Math.floor(Math.random()*100)+1
console.log(resultado)*/

//EJERCICIO XIII
/*const texto =prompt("Ingrese un texto").toUpperCase()
document.writeln(texto)*/

//EJERCICIO XIV
/*const texto = prompt("Ingrese una cadena de texto:")
let resultado = ""

for (let i = 0; i < texto.length; i++) {
    resultado += texto[i]
if (i < texto.length - 1) {
    resultado += "-"
}
}

document.writeln(resultado)*/


