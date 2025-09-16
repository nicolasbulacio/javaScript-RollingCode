class Auto {
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

const miAuto = new Auto("negro", "Ford", "Mustang")


miAuto.encender()

miAuto.apagar()
