console.log("Fechador.js online")
const cartaDeAnimal = document.querySelector("#animal")

async function animalChooser() {
    api = `https://piticli.glitch.me/animales/random`
    const request = await fetch(api)
    const choosenAnimal = await request.json()

    const { uuid, nombre, fechaNacimiento, proximaVisita, personalidad, vacunas, imagen } = choosenAnimal
    
    
    return choosenAnimal
}

async function qrCodeGenerator() {
    const qrCode2Generate = await animalChooser()
    api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCode2Generate}`

    return
}


async function crearCartaDeAnimal() {
    const wantedAnimal = await animalChooser()
    console.log(wantedAnimal)


    cartaDeAnimal.innerHTML =
    `
    <img id="imagen" src="${wantedAnimal.imagen}" alt="no imagen">
    <h1 id="nombre" >${wantedAnimal.nombre}</h1>
    <p id="fechaNacimiento" >Fecha de nacimiento: ${wantedAnimal.fechaNacimiento}</p>
    <p id="proximaVisita" >Proxima Vista: ${wantedAnimal.proximaVisita}</p>
    <li id="personalidad" >Personalidad: ${wantedAnimal.personalidad}</li>
    <li id="vacunas" >Vacunas: ${wantedAnimal.vacunas}</li>
    <p id="uuid" >${wantedAnimal.uuid}</p>
    <img id="qrCode" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${wantedAnimal.uuid}" alt="QR code broken lol">
    `
}

crearCartaDeAnimal()