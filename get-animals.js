document.addEventListener('htmx:configRequest', function(evt) {
  Object.keys(evt.detail.headers).forEach(function(key) {
    delete evt.detail.headers[key];
  });
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://piticli.glitch.me/animales')
      .then(response => response.json())
      .then(data => {
          const animal = data[0]; // Assuming you're only displaying information for one animal
          const birthdate = new Date(animal.fechaNacimiento);
          const nextVisit = new Date(animal.proximaVisita);

          const animalInfo = document.createElement('div');
          animalInfo.innerHTML = `
              <h1>${animal.nombre}</h1>
              <div class="animal-details">
                  <p>UUID: ${animal.uuid}</p>
              </div>
              <p>Fecha de nacimiento: ${birthdate.toLocaleDateString()}</p>
              <p>Próxima visita: ${nextVisit.toLocaleDateString()}</p>
              <ul>
                  <li>Personalidad: ${animal.personalidad.join(', ')}</li>
                  <li>Vacunas: ${animal.vacunas.join(', ')}</li>
              </ul>
              <img src="${animal.imagen}" alt="${animal.nombre}"/>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${animal.uuid}"/>
`;
          const animalInfoContainer = document.getElementById('animal-info');
          animalInfoContainer.innerHTML = '';
          animalInfoContainer.appendChild(animalInfo);

          const qrCodeContainer = document.createElement('div');
          qrCodeContainer.id = 'qr-code';
      });
});