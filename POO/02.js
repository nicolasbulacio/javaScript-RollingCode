class Cuenta {
    constructor(titular) {
        this.titular = titular
        this.saldo = 0
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad
            document.writeln(`Se ingresaron $${cantidad}.<br>`)
        } else {
            document.writeln("La cantidad a ingresar debe ser mayor a cero.<br>")
        }
    }

    extraer(cantidad) {
        if (cantidad > 0) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad
                document.writeln(`Se extrajeron $${cantidad}.<br>`)
            } else {
                document.writeln("Saldo insuficiente para realizar la operación.<br>")
            }
        } else {
            document.writeln("La cantidad a extraer debe ser mayor a cero.<br>")
        }
    }

    informar() {
        document.writeln(`Titular: ${this.titular}<br>Saldo: $${this.saldo.toFixed(2)}<br><br>`)
    }
}

const cuenta = new Cuenta("Alex")
let operacion

do {
    operacion = prompt(`¿Qué operación desea realizar?
1 - Ingresar dinero
2 - Extraer dinero
3 - Informar estado de la cuenta
4 - Salir`)

    switch (operacion) {
        case "1":
            const ingreso = parseInt(prompt("Ingrese la cantidad a ingresar:"))
            cuenta.ingresar(ingreso)
            cuenta.informar()
            break;

        case "2":
            const extraccion = parseInt(prompt("Ingrese la cantidad a extraer:"))
            cuenta.extraer(extraccion)
            cuenta.informar()
            break;

        case "3":
            cuenta.informar()
            break;

        case "4":
            document.writeln("Gracias por usar el sistema.<br>")
            break;

        default:
            document.writeln("Opción inválida. Intente nuevamente.<br>")
    }
} while (operacion !== "4")
