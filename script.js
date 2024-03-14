const promesa = fetch('https://piticli.glitch.me/animales/random');
const respuesta = promesa.then(response => response.json());
const datos = respuesta.then(data => procesar(data));

function formatDate(dateString) {
    const date = new Date (dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function procesar(data){ 

    const {uuid, nombre, fechaNacimiento, proximaVisita, personalidad, vacunas, imagen, esterilizado} = data;
    
    console.log(data)
    
    const id = document.getElementById('uuid');
    id.innerHTML=uuid;
    
    const name = document.getElementById('nombre');
    name.innerHTML= nombre;
    
    const nacimiento = formatDate('fecha');
    const birthday = document.getElementById('fecha');
    birthday.innerHTML= nacimiento;
    
    const proximaVisitaFormatted = formatDate(proximaVisita)
    const visit = document.getElementById('proximaVisita');
    visit.innerHTML = proximaVisitaFormatted;
    
    const personalidad_contenedor = document.getElementById('personalidad');
    
    personalidad.forEach(element => {
        const li = document.createElement('li'); 
        li.innerHTML = element;
        personalidad_contenedor.appendChild(li) 
    });
    
    const vacunas_contenedor = document.getElementById('vacunas');

    vacunas.forEach(element => {
        const li = document.createElement('li'); 
        li.innerHTML = element;
        vacunas_contenedor.appendChild(li) 
    });

    const img = document.getElementById("imagen");
    img.src = imagen;
    
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${uuid}&size=${200}x${200}`;

    fetch(url)
    .then(response => {
        const imagenQR = document.getElementById('imagenQR')
        imagenQR.src = response.url
    })
    
    
}
