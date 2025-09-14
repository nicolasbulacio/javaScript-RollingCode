
let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

function mostrarTablaMultiplicar(n) {
    document.writeln("<h2>Tabla de multiplicar del " + n + "</h2>")
    for (let i = 1; i <= 10; i++) {
        document.writeln(n + " x " + i + " = " + (n * i) + "<br>")
    }
}

mostrarTablaMultiplicar(numero)
