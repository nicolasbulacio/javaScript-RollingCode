function parOImpar(numero) {
if (numero % 2 === 0) {
    return "El número " + numero + " es par."
} else {
    return "El número " + numero + " es impar."
}
}

const numeroIngresado = parseInt(prompt("Ingresa un número entero:"))
const resultado = parOImpar(numeroIngresado)

document.writeln("<p>" + resultado + "</p>")
