const estudiantes = []

while (true) {
    const nombre = prompt("Ingresa el nombre del estudiante (deja vacío para terminar):")
if (!nombre) break;  

const notaIngresada = prompt(`Ingresa la nota de ${nombre}:`)
const nota = parseFloat(notaIngresada)

if (isNaN(nota)) {
    alert("La nota no es un número válido. Intenta de nuevo.")
    continue
}

estudiantes.push({ nombre, nota })
}


function calcularNotaMedia(estudiantes) {
let suma = 0
for (let i = 0; i < estudiantes.length; i++) {
    suma += estudiantes[i].nota
}
return estudiantes.length > 0 ? suma / estudiantes.length : 0
}


document.writeln("<h2>Listado de estudiantes:</h2>");
for (let i = 0; i < estudiantes.length; i++) {
    document.writeln(`- ${estudiantes[i].nombre}: ${estudiantes[i].nota}<br>`)
}


const media = calcularNotaMedia(estudiantes)
document.writeln(`<h3>Nota media del grupo: ${media.toFixed(2)}</h3>`)
