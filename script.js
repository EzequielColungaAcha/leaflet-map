// Add map

const map = L.map('map').setView([-36.000717, -58.144487], 13)

// Set tile options

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add markers

const markerJI901 = L.marker([-36.003335, -58.143492])
const markerJI902 = L.marker([-36.3166426966025, -58.5501525607909])
const markerJI903 = L.marker([-35.998057, -58.135591])
const markerJIRIMM1 = L.marker([-36.4132683483541, -58.296005017515])
const markerJIRIMM2 = L.marker([-36.519878, -58.261489])
const markerJIRIMM3 = L.marker([-35.997660982867, -58.4102391611066])
const markerJIRIMM4 = L.marker([-36.0605880438028, -58.7375383141412])
const markerJIRIMM5 = L.marker([-36.1485624346456, -58.2442967530429])
const markerJIRIMM6 = L.marker([-35.9090242669541, -58.1623059754367])
const markerHospital = L.marker([-36.003197, -58.141325])
const markerSalita = L.marker([-35.999961, -58.147767])
const markerUnidad = L.marker([-35.995698, -58.138800])

// Add markers to map

markerJI901.addTo(map)
markerJI902.addTo(map)
markerJI903.addTo(map)
markerJIRIMM1.addTo(map)
markerJIRIMM2.addTo(map)
markerJIRIMM3.addTo(map)
markerJIRIMM4.addTo(map)
markerJIRIMM5.addTo(map)
markerJIRIMM6.addTo(map)
markerHospital.addTo(map)
markerSalita.addTo(map)
markerUnidad.addTo(map)

// Popup templates

const popupJI901 = `
<h4 style="margin: 5px 0;">Jardín de Infantes N°901 (Pila)</h4>
`
const popupJI902 = `
<h4 style="margin: 5px 0;">Jardín de Infantes N°902 (Casalins)</h4>
`
const popupJI903 = `
<h4 style="margin: 5px 0;">Jardín de Infantes N°903 (Pila)</h4>
`
const popupJIRIMM1 = `
<h4 style="margin: 5px 0;">JIRIMM N°1 (Hinojales)</h4>
`
const popupJIRIMM2 = `
<h4 style="margin: 5px 0;">JIRIMM N°2 (Los Toldos)</h4>
`
const popupJIRIMM3 = `
<h4 style="margin: 5px 0;">JIRIMM N°3 (Las Lechuzas)</h4>
`
const popupJIRIMM4 = `
<h4 style="margin: 5px 0;">JIRIMM N°4 (De María)</h4>
`
const popupJIRIMM5 = `
<h4 style="margin: 5px 0;">JIRIMM N°5 (El Alegre)</h4>
`
const popupJIRIMM6 = `
<h4 style="margin: 5px 0;">JIRIMM N°6 (El Venado)</h4>
`
const popupHospital = `
<h4 style="margin: 5px 0;">Hospital Municipal de Pila</h4>
`
const popupSalita = `
<h4 style="margin: 5px 0;">Sala de Primeros Auxilios Municipal de Pila</h4>
`
const popupUnidad = `
<h4 style="margin: 5px 0;">Unidad Sanitaria de Pila</h4>
`

// Add popups msg

markerJI901.bindPopup(popupJI901)
markerJI902.bindPopup(popupJI902)
markerJI903.bindPopup(popupJI903)
markerJIRIMM1.bindPopup(popupJIRIMM1)
markerJIRIMM2.bindPopup(popupJIRIMM2)
markerJIRIMM3.bindPopup(popupJIRIMM3)
markerJIRIMM4.bindPopup(popupJIRIMM4)
markerJIRIMM5.bindPopup(popupJIRIMM5)
markerJIRIMM6.bindPopup(popupJIRIMM6)
markerHospital.bindPopup(popupHospital)
markerSalita.bindPopup(popupSalita)
markerUnidad.bindPopup(popupUnidad)