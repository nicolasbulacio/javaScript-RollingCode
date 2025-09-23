class Producto {
constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre
    this.precio = precio
}

imprimir() {
    document.writeln(`<strong>Producto:</strong><br>`)
    document.writeln(`Código: ${this.codigo}<br>`)
    document.writeln(`Nombre: ${this.nombre}<br>`)
    document.writeln(`Precio: $${this.precio.toFixed(2)}<br><br>`)
}
}


const producto1 = new Producto(101, "Laptop", 1500)
const producto2 = new Producto(102, "Mouse", 25)
const producto3 = new Producto(103, "Teclado", 45)


const productos = [producto1, producto2, producto3]


document.writeln("<h2>Listado de Productos</h2>")
productos.forEach(producto => producto.imprimir())
