function crearLibro() {
const titulo = prompt("Ingresa el título del libro (deja vacío o cancela para terminar):");
if (titulo === null || titulo === "") 
    return null

const autor = prompt("Ingresa el autor del libro:")
if (autor === null || autor === "") {
    alert("Autor inválido. Se canceló el ingreso de este libro.")
    return null
}

  const añoStr = prompt("Ingresa el año de publicación:")
  const año = parseInt(añoStr)
  if (añoStr === null || isNaN(año)) {
    alert("Año inválido. Se canceló el ingreso de este libro.")
    return null;
  }

  const genero = prompt("Ingresa el género del libro:")
  if (genero === null || genero === "") {
    alert("Género inválido. Se canceló el ingreso de este libro.")
    return null
  }

  return { titulo, autor, año, genero }
}

const libros = []
let libro

do {
  libro = crearLibro()
  if (libro) {
    libros.push(libro)
  }
} while (libro)

if (libros.length > 0) {
  const generoFiltrar = prompt("Ingresa el género para filtrar los libros:")

  if (generoFiltrar !== null && generoFiltrar !== "") {
    function filtrarPorGenero(libros, genero) {
      return libros.filter(
        libro => libro.genero.toLowerCase() === genero.toLowerCase()
      )
    }

    const librosFiltrados = filtrarPorGenero(libros, generoFiltrar)

    document.writeln(`<h2>Libros del género "${generoFiltrar}":</h2>`)
    if (librosFiltrados.length === 0) {
      document.writeln("No se encontraron libros de ese género.")
    } else {
      librosFiltrados.forEach(libro => {
        document.writeln(`- "${libro.titulo}" por ${libro.autor} (${libro.año})<br>`)
      })
    }
  } else {
    alert("No ingresaste un género válido para filtrar.")
  }
} else {
  alert("No se ingresaron libros.")
}
