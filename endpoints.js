fetch("https://piticli.glitch.me/")
.then(resp => resp.json)
.then(data => datosAnimales(data))