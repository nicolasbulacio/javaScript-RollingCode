const ciudades = [];
let entrada;

while (true) {
  entrada = prompt("Ingresa el nombre de una ciudad (Cancelar para terminar):")
if (entrada === null) break;
if (entrada !== "") {
    ciudades.push(entrada)
}
}

document.writeln("<h1>Ciudades ingresadas:</h1>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.writeln("<li>" + ciudades[i] + "</li>");
}
document.writeln("</ul>");
document.writeln("<p>Cantidad de ciudades: " + ciudades.length + "</p>")

if (ciudades.length >= 1) {
  document.writeln("<p>Primera ciudad: " + ciudades[0] + "</p>")
}
if (ciudades.length >= 3) {
  document.writeln("<p>Tercera ciudad: " + ciudades[2] + "</p>")
}
if (ciudades.length >= 1) {
  document.writeln("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>")
}

ciudades.push("París")
document.writeln("<ul>")
for (let i = 0; i < ciudades.length; i++) {
  document.writeln("<li>" + ciudades[i] + "</li>")
}
document.writeln("</ul>")

if (ciudades.length >= 2) {
  ciudades[1] = "Barcelona"
  
}

document.writeln("<ul>")
for (let i = 0; i < ciudades.length; i++) {
  document.writeln("<li>" + ciudades[i] + "</li>")
}
document.writeln("</ul>")
