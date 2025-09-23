class Persona {
constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre
    this.edad = edad
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
    this.annoNacimiento = annoNacimiento
    this.dni = this.generaDNI()
}

generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000)
}

mostrarGeneracion() {
    const año = this.annoNacimiento

if (anno >= 1995 && anno <= 2012) {
    console.log("Generación Z - Rasgo característico: Irreverencia")
} else if (anno >= 1981 && anno <= 1994) {
    console.log("Generación Millennials - Rasgo característico: Frustración")
} else if (anno >= 1969 && anno <= 1980) {
    console.log("Generación X - Rasgo característico: Obsesión por el éxito")
} else if (anno >= 1949 && anno <= 1968) {
    console.log("Generación Baby Boomers - Rasgo característico: Ambición")
} else if (anno >= 1930 && anno <= 1948) {
    console.log("Generación Silent - Rasgo característico: Austeridad")
} else {
    console.log("Generación no encontrada")
}
}


esMayorDeEdad() {
if (this.edad >= 18) {
    console.log(`${this.nombre} es mayor de edad.`)
} else {
    console.log(`${this.nombre} no es mayor de edad.`)
}
}

//MOSTRAR POR PANTALLA
mostrarDatos() {
const datos = `
    Nombre: ${this.nombre} <br>
    Edad: ${this.edad} <br>
    DNI: ${this.dni} <br>
    Sexo: ${this.sexo} <br>
    Peso: ${this.peso} kg<br>
    Altura: ${this.altura} m<br>
    Año de nacimiento: ${this.añoNacimiento}<br><br>
`

// MOSTRAR POR CONSOLA
console.log(`Nombre: ${this.nombre}`)
console.log(`Edad: ${this.edad}`)
console.log(`DNI: ${this.dni}`)
console.log(`Sexo: ${this.sexo}`)
console.log(`Peso: ${this.peso} kg`)
console.log(`Altura: ${this.altura} m`)
console.log(`Año de nacimiento: ${this.annoNacimiento}`)


document.writeln(datos)
}
}