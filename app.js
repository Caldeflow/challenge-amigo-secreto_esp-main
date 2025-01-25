// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaramos el array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturamos el campo de texto
    const nombre = input.value.trim(); // Eliminamos espacios en blanco al inicio y al final

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }

    // Validamos que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista. Intenta con otro.");
        return;
    }

    // Agregamos el nombre al array y actualizamos la lista en el DOM
    amigos.push(nombre);
    actualizarLista();

    // Limpiamos el campo de texto
    input.value = "";
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de actualizarla

    // Recorremos el array y creamos un elemento <li> por cada amigo
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        li.className = "list-item"; 
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validamos que haya al menos dos nombres en la lista
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos en la lista para hacer el sorteo.");
        return;
    }

    // Seleccionamos un amigo al azar
    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const amigoGanador = amigos[indiceGanador];

    // Mostramos el resultado en el DOM
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoGanador}</strong></li>`;
}
