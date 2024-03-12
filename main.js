function formatoFecha(fecha) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', options);
}

function cargarInformacionAnimal() {
    const url = 'https://piticli.glitch.me/animales/random';
  
    fetch(url)
      .then(response => response.json())
      .then(data => mostrarInformacion(data))
      .catch(error => console.error('Error al obtener la información del animal', error));
}

function mostrarInformacion(animal) {
    const animalInfoDiv = document.getElementById('animalInfo');
    animalInfoDiv.innerHTML = `
        <p>UUID: ${animal.uuid}</p>
        <h1>${animal.nombre}</h1>
        <p>Fecha de Nacimiento: ${formatoFecha(animal.fechaNacimiento)}</p>
        <p>Próxima Visita: ${formatoFecha(animal.proximaVisita)}</p>
            <ul>
                <li>Personalidad: ${animal.personalidad.join(', ')}</li>
                <li>Vacunas:
                    <ul>
                        ${animal.vacunas.map(vacuna => `<li>${vacuna}</li>`).join('')}
                    </ul>
                </li>
            </ul>
        <img src="${animal.imagen}" alt="Foto del Animal" id="fotoAnimal">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${animal.uuid}" alt="QR Code">
    `;
}

cargarInformacionAnimal();