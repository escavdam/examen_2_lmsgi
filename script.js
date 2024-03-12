const apiUrl = 'https://piticli.glitch.me';
const randomAnimalEndpoint = '/animales/random';

const fetchRandomAnimal = async () => {
    const response = await fetch(apiUrl + randomAnimalEndpoint);
    return await response.json();
};

  

const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

const updateAnimalInfo = (data) => {
  const animalInfoContainer = document.getElementById('animal-info');

  animalInfoContainer.innerHTML = `
    <p>UUID: ${data.uuid}</p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?data=${data.uuid}" alt="QR Code">
    <h1>${data.nombre}</h1>
    <p>Fecha de Nacimiento: ${formatDate(data.fechaNacimiento)}</p>
    <p>Próxima Visita: ${formatDate(data.proximaVisita)}</p>
    <h2>Personalidad:</h2>
    <ul>${data.personalidad.map(p => `<li>${p}</li>`).join('')}</ul>
    <h2>Vacunas:</h2>
    <ul>${data.vacunas.map(v => `<li>${v}</li>`).join('')}</ul>
    <img src="${data.imagen}" alt="${data.nombre}">
  `;
};

fetchRandomAnimal()
  .then((randomAnimalData) => {
    updateAnimalInfo(randomAnimalData);
  });
