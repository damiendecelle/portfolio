var map = L.map('map').setView([48.10966236248766, -1.6465376339380078], 16);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

L.marker([48.10966236248766, -1.6465376339380078]).addTo(map)
    .bindPopup('3 rue Berthe Savery<br>35000, Rennes')
    .openPopup();