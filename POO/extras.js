const persona = {
    nombre: prompt("Ingresa un nombre"),
    edad: parseInt(prompt("Ingresa una edad:")),
    hobbies: prompt("Ingresa al menos un hobby (separado por comas si son varios):")
            .split(",")
            .map(h => h.trim())
}


function agregarHobby(persona, nuevoHobby) {
if (nuevoHobby && nuevoHobby.trim() !== "") {
    persona.hobbies.push(nuevoHobby.trim())
} else {
    alert("No puede estar en blanco")
}
}

const nuevoHobby = prompt("Ingresa al menos un hobby (separado por comas si son varios):")
agregarHobby(persona, nuevoHobby)

document.writeln(`<h2>Hobbies de ${persona.nombre}:</h2>`)
for (let i = 0; i < persona.hobbies.length; i++) {
    document.writeln(`- ${persona.hobbies[i]}<br>`)
}
