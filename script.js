function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function animalInfo(animal) {
    const animalInfoContainer = document.getElementById('animal-info');
    animalInfoContainer.innerHTML = `
        <h1>${animal.nombre}</h1>
        <p>UUID: ${animal.uuid}</p>
        <img id="QR" src="https://api.qrserver.com/v1/create-qr-code/?data=${animal.uuid}&size=100x100" alt="QR">
        <img src="${animal.imagen}" alt="${animal.nombre}">
        <p>Fecha de Nacimiento: ${formatDate(animal.fechaNacimiento)}</p>
        <p>Próxima Visita: ${formatDate(animal.proximaVisita)}</p>
        <h2>Personalidad</h2>
        <ul>
            ${animal.personalidad.map(personalidad => `<li>${personalidad}</li>`).join('')}
        </ul>
        <h2>Vacunas</h2>
        <ul>
            ${animal.vacunas.map(vacuna => `<li>${vacuna}</li>`).join('')}
        </ul>
    `;
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://piticli.glitch.me/animales/random');
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const animal = JSON.parse(xhr.responseText);
            animalInfo(animal);
        } else {
            console.error('Error', xhr.status);
        }
    }
};
xhr.send();