# Examen 2º Trimestre LMSGI

## Objetivo

Debes de crear un componente utilizando HTML, CSS y JavaScript mostrando varios datos devueltos desde un servidor. La gente de backend te ha levantado un servidor de mockup que devuelve JSON con las propiedades que usarán en la aplicación final sin exponer datos reales.

La URL base de la API de desarrollo es: "https://piticli.glitch.me/", es donde podeis acceder a los siguientes endpoints:
- `/animales`: Devuelve un listado de todos los animales en `JSON`.
- `/animales/random`: Devuelve un animal aleatorio en `JSON`.
- `/hda/uuid`: Devuelve un uuid envuelto en un `<p>`
- `/hda/nombre`: Devuelve un nombre envuelto en un `<h1>`
- `/hda/fechaNacimiento`: Devuelve una fecha envuelta en un `<p>`
- `/hda/personalidad`: Devuelve una lista de rasgos de personalidad en elementos `<li>`
- `/hda/vacunas`: Devuelve una lista de vacunas en elementos `<li>`
- `/hda/imagen`: Devuelve una imagen


Cada animal tiene las siguientes propiedades:
- `uuid`: Identificador único del animal.
- `nombre`: Nombre del animal.
- `fechaNacimiento`: Fecha de nacimiento del animal.
- `personalidad`: Lista de personalidades del animal.
- `foto`: URL de la foto del animal.


- Los elementos que sean un dato simple se deben de mostrar con un elemento `<p>`.
- Los elementos que sean una lista de datos se deben de mostrar con elementos `<li>`.
- Los elementos que sean una imagen se deben de mostrar con un elemento `<img>`.
- El elemento `uuid` debe mostrarse mediante un elemento `<p>`.
- El elemento `uuid` debe mostrarse como un QR en el perfil.
- Las fechas deben de mostrarse en formato `dd/mm/aaaa`.

## Como realizar el examen

1. Crea una rama en el repositorio desde Github.
2. Clona el repositorio en tu ordenador.
3. Ve a tu rama.
4. A partir de aqui, puedes comenzar a crear tu componente.