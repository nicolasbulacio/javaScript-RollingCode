class Rectangulo {
constructor(ancho, alto) {
    this.ancho = ancho
    this.alto = alto
}

setAncho(nuevoAncho) {
    if (nuevoAncho > 0) {
        this.ancho = nuevoAncho
    } else {
        document.writeln("El ancho debe ser mayor a 0.<br>")
    }
}

setAlto(nuevoAlto) {
    if (nuevoAlto > 0) {
        this.alto = nuevoAlto
    } else {
        document.writeln("El alto debe ser mayor a 0.<br>")
    }
}

mostrarPropiedades() {
    document.writeln(`Ancho: ${this.ancho}<br>`)
    document.writeln(`Alto: ${this.alto}<br>`)
}

calcularArea() {
    return this.ancho * this.alto
}

calcularPerimetro() {
    return 2 * (this.ancho + this.alto)
}
}


let ancho = parseInt(prompt("Ingrese el ancho del rectángulo:"))
let alto = parseInt(prompt("Ingrese el alto del rectángulo:"))


const miRectangulo = new Rectangulo(ancho, alto)


document.writeln("Propiedades del rectángulo:<br>")
miRectangulo.mostrarPropiedades()

document.writeln("Cálculos:<br>")
document.writeln(`Área: ${miRectangulo.calcularArea()}<br>`)
document.writeln(`Perímetro: ${miRectangulo.calcularPerimetro()}<br>`)
