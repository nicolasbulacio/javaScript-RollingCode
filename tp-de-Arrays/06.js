
let ladoA = parseInt(prompt("Ingrese el valor del lado A del rectángulo:"))
let ladoB = parseInt(prompt("Ingrese el valor del lado B del rectángulo:"))


function calcularPerimetroRectangulo(a, b) {
    return 2 * (a + b)
}

let perimetro = calcularPerimetroRectangulo(ladoA, ladoB)

documentWriteLn("El perímetro del rectángulo es: " + perimetro)

// TRIANGULO
/*let lado1 = parseFloat(prompt("Ingrese el valor del lado 1 del triángulo:"))
let lado2 = parseFloat(prompt("Ingrese el valor del lado 2 del triángulo:"))
let lado3 = parseFloat(prompt("Ingrese el valor del lado 3 del triángulo:"))

function trianguloValido(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a)
}

function calcularPerimetro(a, b, c) {
    return a + b + c
}

function tipoDeTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "equilátero"
    } else if (a === b || a === c || b === c) {
        return "isósceles"
    } else {
        return "escaleno"
    }
}

if (trianguloValido(lado1, lado2, lado3)) {
    let perimetro = calcularPerimetro(lado1, lado2, lado3)
    let tipo = tipoDeTriangulo(lado1, lado2, lado3)
    alert("El triángulo es un triangulo " + tipo + " y su perímetro es: " + perimetro)
} else {
    alert("Los valores ingresados NO forman un triángulo válido.")
}*/
