function analizarCadena(cadena) {
if (cadena === cadena.toUpperCase()) {
    return "La cadena está formada solo por mayúsculas."
} else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada solo por minúsculas."
} else {
    return "La cadena contiene una mezcla de mayúsculas y minúsculas."
}
}


const texto = prompt("Ingresa una cadena de texto:")
const resultado = analizarCadena(texto)

document.writeln("<p>" + resultado + "</p>")
