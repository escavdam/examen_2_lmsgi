# Examen 2º Trimestre LMSGI

## Objetivo

Debes de crear un componente utilizando HTML, CSS y JavaScript para mostrar en web la información que te devuelve el servidor. Puedes utilizar `XMLHttpRequest`, `fetch` y herramientas como `HTMX` para comunicarte con el servidor. Tendrás que representar correctamente cada propiedad en pantalla utilizando el elemento HTML adecuado.

Cada animal tiene las siguientes propiedades:
- `uuid`: Identificador único del animal. Muestralo como un elemento `<p>` y como un QR en un elemento `<img>`
- `nombre`: Nombre del animal. Muestralo como `<h1>`
- `fechaNacimiento`: Fecha de nacimiento del animal. Muestralo como `<p>` utilizando el formato `dd/mm/aaaa`
- `proximaVisita`: Fecha de la proxima visita. Muestralo como `<p>` utilizando el formato `dd/mm/aaaa`
- `personalidad`: Lista de personalidades del animal. Muestralas como elementos `<li>`
- `vacunas`: Lista de vacunas administradas. Muestralas como elementos `<li>`
- `imagen`: URL de la foto del animal. Muestralo como elemento `<img>`

## API

La URL base de la API de desarrollo es: https://piticli.glitch.me/

Disponemos de un mirror en caso de gastar las solicitudes: https://piticlibonico.glitch.me/

Tenemos varios endpoints:

### Endpoints JSON

- `/animales`: Devuelve un listado de todos los animales.
- `/animales/random`: Devuelve un animal aleatorio.

### Endpoints HTML

Estos endpoints estan pensados para hacer el ejercicio con `HTMX`, si quieres usarlos mediante fetch, tendras que añadir a tus header en la peticion la propiedad `hx-request` con el valor `true`.

- `/hda/nombre`: Devuelve el nombre en un `<h1>`
- `/hda/nacimiento`: Devuelve la fecha en un `<p>`
- `/hda/personalidad`: Devuelve los elementos en `<li>`
- `/hda/vacunas`: Devuelve los elementos en `<li>`
- `/hda/visita`: Devuelve la fecha en un `<p>`
- `/hda/imagen`: Devuelve una imagen en un `<img>`

## Como realizar el examen

1. Crea una rama en el repositorio desde Github.
2. Clona el repositorio en tu ordenador.
3. Ve a tu rama.
4. A partir de aqui, puedes comenzar a crear tu componente.
5. 