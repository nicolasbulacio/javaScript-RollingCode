//USANDO NOTACION LITERAL
const auto = {
    color: "Blanco",
    marca: "Honda",
    modelo: "Civic",
    encendido: false,

encender() {
    if (this.encendido) {
        console.log("El auto ya está encendido.")
    } else {
        this.encendido = true
        console.log("El auto ha sido encendido.")
}
},
apagar() {
if (!this.encendido) {
    console.log("El auto ya está apagado.")
} else {
    this.encendido = false
        console.log("El auto ha sido apagado.")
}
}
}

auto.encender()
auto.apagar()


//MODELANDO CLASES
/*class Auto {
constructor(color, marca, modelo) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
}

encender() {
    if (!this.encendido) {
        this.encendido = true
        document.writeln("El auto está encendido.<br>")
    }
}

apagar() {
    if (this.encendido) {
        this.encendido = false;
        document.writeln("El auto está apagado.<br>")
    }
}
}

const miAuto = new Auto("Blanco", "Honda", "Civic")

miAuto.encender()
miAuto.apagar()
*/