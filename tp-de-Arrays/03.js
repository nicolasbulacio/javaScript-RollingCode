const resultados = [];
const contador = {};

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1
  const dado2 = Math.floor(Math.random() * 6) + 1
    const suma = dado1 + dado2;

resultados.push(suma)


if (contador[suma]) {
    contador[suma]++
} else {
    contador[suma] = 1
}
}

document.writeln("<h2>Resultados en los dados:</h2>")
document.writeln("<p>" + resultados.join(", ") + "</p>")


document.writeln("<h2>Frecuencia de cada resultado:</h2>")
document.writeln("<ul>")
for (let suma = 2; suma <= 12; suma++) {
    const veces = contador[suma] || 0
        document.writeln("<li>Suma " + suma + ": " + veces + " veces</li>")
}
document.writeln("</ul>")