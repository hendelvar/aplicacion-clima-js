let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '8c6391f73becef573dc7c5e7c80c60db'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response =>mostrarDatosClima(response))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturainfo = document.createElement('p')
    temperaturainfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)} °C`

    const humedadinfo = document.createElement('p')
    humedadinfo.textContent = `La humedad es: ${humedad} %`

    const iconoinfo = document.createElement('img')
    iconoinfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcioninfo = document.createElement('p')
    descripcioninfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturainfo)
    divDatosClima.appendChild(humedadinfo)
    divDatosClima.appendChild(descripcioninfo)
    divDatosClima.appendChild(iconoinfo)
}