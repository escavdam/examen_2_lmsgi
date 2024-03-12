const promesa = fetch('https://piticli.glitch.me/animales');
const respuesta = promesa.then(response => response.json());
const datos = respuesta.then(data => procesar(data));


function procesar(data) {
    const {uuid, nombre, fechaNacimiento, proximaVisita, personalidad, vacunas, imagen, esterilizado} = data[0];

    console.log(data[0])

    const id = document.getElementById('uuid');
    id.innerHTML = uuid;

    const name = document.getElementById('nombre');
    name.innerHTML = nombre;

    const fechaNacimientoFormatted = formatDate(fechaNacimiento);
    const birthday = document.getElementById('fechaNacimiento');
    birthday.innerHTML = fechaNacimientoFormatted;

    const proximaVisitaFormatted = formatDate(proximaVisita)
    const visit = document.getElementById('proximaVisita');
    visit.innerHTML = proximaVisitaFormatted;

    const personality = document.getElementById('personalidad');

    personalidad.forEach(element => {
        const li = document.createElement('li'); 
        li.innerHTML = element;
        personality.appendChild(li) 
    });

    const vacunaContenedor = document.getElementById('vacunas');

    vacunas.forEach(element => {
        const li = document.createElement('li'); 
        li.innerHTML = element;
        vacunaContenedor.appendChild(li) 
    });

    const esterilizadoContenedor = document.getElementById("esterilizado")
    if(esterilizado === true){
        esterilizadoContenedor.innerHTML = "Si"
    }else{
        esterilizadoContenedor.innerHTML = "No"
    }

    const img = document.getElementById("imagen");
    img.src = imagen;

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${uuid}&size=${200}x${200}`;

    fetch(url)
    .then(response => {
        const imagenQR = document.getElementById('imagenQR')
        imagenQR.src = response.url
    })
    
}