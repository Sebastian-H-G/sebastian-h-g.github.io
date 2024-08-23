<script>
    // Initialisiere eine Leaflet Karte
    var map = L.map('map').setView([0, 0], 2); // Mittelpunkt der Weltkarte, Zoom-Level 2

    // Füge eine OpenStreetMap-Kachel-Layer hinzu
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Lade die GeoJSON-Daten und füge sie zur Karte hinzu
    fetch('deine_geojson_datei.geojson')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            L.geoJSON(data).addTo(map);
        });
</script>
