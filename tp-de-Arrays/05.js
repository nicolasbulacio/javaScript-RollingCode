function analizarCadena(cadena) {
if (cadena === cadena.toUpperCase()) {
    return "El texto está formado solo por mayúsculas."
} else if (cadena === cadena.toLowerCase()) {
    return "El texto está formado solo por minúsculas."
} else {
    return "El texto esta formado por una combinacion de mayúsculas y minúsculas."
}
}


const texto = prompt("Ingresa un texto:")
const resultado = analizarCadena(texto)

document.writeln("<p>" + resultado + "</p>")
