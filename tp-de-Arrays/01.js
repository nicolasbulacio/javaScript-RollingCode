const meses = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

document.writeln("<h1>Meses del año</h1>")
document.writeln("<ul>")

for (let i = 0; i < meses.length; i++) {
    document.writeln("<li>" + (i + 1) + ". " + meses[i] + "</li>")
}



