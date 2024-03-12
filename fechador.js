console.log("Fechador.js online")
const cartaDeAnimal = document.querySelector("#animal")

async function animalChooser() {
    api = `https://piticli.glitch.me/animales/random`
    const request = await fetch(api)
    const choosenAnimal = await request.json()

    const { uuid, nombre, fechaNacimiento, proximaVisita, personalidad, vacunas, imagen } = choosenAnimal
    
    console.log(choosenAnimal)
    return choosenAnimal
}

animalChooser()

