const ciudades = [];
let entrada;

// Solicitar ciudades al usuario
while (true) {
  entrada = prompt("Ingresa el nombre de una ciudad (Cancelar para terminar):");
if (entrada === null) break;
if (entrada !== "") {
    ciudades.push(entrada);
}
}

// Mostrar arreglo original
document.writeln("<h2>Ciudades ingresadas:</h2>");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
    document.writeln("<li>" + ciudades[i] + "</li>");
}
document.writeln("</ul>");

// Mostrar longitud del arreglo
document.writeln("<p><strong>Longitud del arreglo:</strong> " + ciudades.length + "</p>");

// Mostrar primera, tercera y última ciudad
if (ciudades.length >= 1) {
  document.writeln("<p><strong>Primera ciudad:</strong> " + ciudades[0] + "</p>");
}
if (ciudades.length >= 3) {
  document.writeln("<p><strong>Tercera ciudad:</strong> " + ciudades[2] + "</p>");
}
if (ciudades.length >= 1) {
  document.writeln("<p><strong>Última ciudad:</strong> " + ciudades[ciudades.length - 1] + "</p>");
}


ciudades.push("París");
document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.writeln("<li>" + ciudades[i] + "</li>");
}
document.writeln("</ul>");




// Reemplazar segunda ciudad por "Barcelona"
if (ciudades.length >= 2) {
  ciudades[1] = "Barcelona";
  
}



document.writeln("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.writeln("<li>" + ciudades[i] + "</li>");
}
document.writeln("</ul>");
