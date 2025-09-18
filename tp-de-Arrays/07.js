
function mostrarTablaMultiplicar(n) {
    document.writeln("<h2>Tabla de multiplicar del " + n + "</h2>")
    for (let i = 1; i <= 10; i++) {
        document.writeln(n + " x " + i + " = " + (n * i) + "<br>")
    }
}

let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"))
if (numero===null) {
    alert("Ingrese un numero")
    
}
mostrarTablaMultiplicar(numero)
