const imagenAnimal = document.querySelector("#imagenAnimal")
const nombreAnimal = document.querySelector("#nombre")
const uiidAnimal = document.querySelector("#uiid")
const fechaNacimientoAnimak = document.querySelector("#fechaNacimiento")
const fotoAnimal = document.querySelector("#imagenAnimal")
const proximaVisitaDelAnimal = document.querySelector("#proximaVisita")
const personalidadAnimal = document.querySelector("#personalidad")
const vacunasAnimal = document.querySelector("#vacunas")
const esterelizadoAnimal = document.querySelector("#esterelizado")
const qrAnimal = document.querySelector("#qr")

async function getAnimales(){
    const url = `https://piticli.glitch.me/animales`
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}

async function llamarDatosAnimales(){
    const Animal = await getAnimales();
    const uiid = Animal[9].uuid;
    const nombre = Animal[9].nombre;
    const nacimiento = new Date(Animal[9].fechaNacimiento);
    const foto = Animal[9].imagen;
    const proximaVisita = new Date(Animal[9].proximaVisita);
    const personalidades = Animal[9].personalidad;
    const vacunas = Animal[9].vacunas;
    const esesterelizado = Animal[9].esterilizado;
    //console.log(nombre)
    personalidades.forEach(personalidad => {
        personalidadAnimal.innerHTML += `<li>${personalidad}</li>`
    });
    vacunas.forEach(vacuna => {
        vacunasAnimal.innerHTML = `
    <li>${vacuna}</li>`
    })
    nombreAnimal.innerHTML = `
    ${nombre}`
    uiidAnimal.innerHTML = `
    ${uiid}`
    fechaNacimientoAnimak.innerHTML = `
    <p>Fecha De Nacimiento: ${nacimiento}</p>`
    fotoAnimal.innerHTML = `
    <img src="${foto}" alt="${foto} width="300" height="300">`
    proximaVisitaDelAnimal.innerHTML = `
    <p>Proxima Visita: ${proximaVisita}</p>`
    esterelizadoAnimal.innerHTML = `
    ${esesterelizado}`
    qrAnimal.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${uiid}"/>`

}

llamarDatosAnimales();





/*fetch("https://piticli.glitch.me/animales")
.then(resp => resp.json)
.then(data => datosAnimales(data))

function datosAnimales(animales){
    console.log()
}*/

