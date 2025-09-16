const cuenta = {
    titular: "Alex",
    saldo: 0,

ingresar(cantidad) {
    if (cantidad > 0) {
        this.saldo += cantidad
        document.writeln(`Se ingresaron $${cantidad}.<br>`)
    } else {
        document.writeln("La cantidad a ingresar debe ser mayor a cero.<br>")
    }
},
extraer(cantidad) {
    if (cantidad > 0) {
        if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        document.writeln(`Se extrajeron $${cantidad}.<br>`)
        } else {
        document.writeln("Saldo insuficiente para realizar la operacion.<br>")
}
    } else {
        document.writeln("La cantidad a extraer debe ser mayor a cero.<br>")
    }
},
informar() {
    document.writeln(`Titular: ${this.titular}<br>Saldo: $${this.saldo.toFixed(2)}<br><br>`)
}
}

let operacion

do {
    operacion = prompt(`¿Qué operación desea realizar?
1 - Ingresar dinero
2 - Extraer dinero
3 - Informar estado de la cuenta
4 - Salir`)

switch (operacion) {
    case "1":
        let ingreso = parseFloat(prompt("Ingrese la cantidad a ingresar:"))
        cuenta.ingresar(ingreso)
        cuenta.informar()
    break;

    case "2":
        let extraccion = parseFloat(prompt("Ingrese la cantidad a extraer:"))
        cuenta.extraer(extraccion)
        cuenta.informar()
        break

    case "3":
        cuenta.informar()
        break

    case "4":
        document.write("Gracias por usar el sistema.<br>")
        break

    default:
        document.write("Opción inválida. Intente nuevamente.<br>")
}
} while (operacion !== "4")

