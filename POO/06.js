class Libro {
#isbn
#titulo
#autor

constructor(isbn, titulo, autor, numeroPaginas) {
    this.#isbn = isbn
    this.#titulo = titulo
    this.#autor = autor
    this.numeroPaginas = numeroPaginas
}

get isbn() {
    return this.#isbn
}

get titulo() {
    return this.#titulo;
}

get autor() {
    return this.#autor
}

get numeroPaginas() {
    return this.numeroPaginas
}

set isbn(valor) {
    this.#isbn = valor
}

set titulo(valor) {
    this.#titulo = valor
}

set autor(valor) {
    this.#autor = valor
}

set numeroPaginas(valor) {
    this.numeroPaginas = valor
}

mostrarLibro() {
    document.writeln(` El libro ${this.titulo} con ISBN ${this.isbn}, creado por ${this.autor}, tiene ${this.numeroPaginas} páginas.<br><br>`)
}
}

const estockDeLibros = []

function crearLibro() {
const isbn = prompt(" Ingresa el ISBN del libro:")
const titulo = prompt(" Ingresa el título del libro:")
const autor = prompt(" Ingresa el autor del libro:")
const numeroPaginas = parseInt(prompt(" Ingresa el número de páginas del libro:"))

if (!isbn || !titulo || !autor || isNaN(numeroPaginas) || numeroPaginas <= 0) {
alert(" Datos inválidos. Intenta de nuevo.")
    return
}

const nuevoLibro = new Libro(isbn, titulo, autor, numeroPaginas)
estockDeLibros.push(nuevoLibro)
alert(" Libro agregado correctamente.")
}

crearLibro()

document.writeln("<h2> Lista de libros en estock:</h2>")
estockDeLibros.forEach(libro => libro.mostrarLibro())

if (estockDeLibros.length >= 2) {
const libro1 = estockDeLibros[0]
const libro2 = estockDeLibros[1]

if (libro1.numeroPaginas > libro2.numeroPaginas) {
    document.writeln(` El libro con más páginas es: ${libro1.titulo} (${libro1.numeroPaginas} páginas).<br>`)
} else if (libro2.numeroPaginas > libro1.numeroPaginas) {
    document.writeln(` El libro con más páginas es: ${libro2.titulo} (${libro2.numeroPaginas} páginas).<br>`)
} else {
    document.writeln(` Ambos libros tienen la misma cantidad de páginas (${libro1.numeroPaginas}).<br>`)
}
}
