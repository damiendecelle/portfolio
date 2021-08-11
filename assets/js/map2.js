var map = L.map('map').setView([46.87682062778468, 2.4964653064719737], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

L.marker([48.11961648987352, -1.7015624058256718]).addTo(map)
    .bindPopup('Université Rennes 2')


L.marker([48.13519660207416, -1.6220706158905784]).addTo(map)
.bindPopup('Kermap')


L.marker([47.22728756375332, -1.6346188458677975]).addTo(map)
.bindPopup('Lacroix')


L.marker([48.08264436412311, -1.6790400889087345]).addTo(map)
.bindPopup('Air Breizh')


L.marker([48.11181284729058, -1.6798938852331948]).addTo(map)
.bindPopup("Rayons d'Action")


L.marker([48.8507069547556, 2.30834139763105]).addTo(map)
.bindPopup('Covoiturage.Beta.gouv')


L.marker([44.95593844144862, -0.6275196228852105]).addTo(map)
.bindPopup('DREAL Nouvelle-Aquitaine')


L.marker([48.08891024491505, -1.673732331236474]).addTo(map)
.bindPopup('EPF Bretagne')
