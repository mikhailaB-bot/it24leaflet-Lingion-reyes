
// ===================================
// BARANGAY LINGION COMMUNITY MAP
// Manolo Fortich, Bukidnon
// ===================================

// 1. Initialize Map
var map = L.map('map').setView(
    [8.4040, 124.8871], 16
);

// 2. OpenStreetMap Layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }
).addTo(map);


// 3. LANDMARK MARKERS

// Barangay Lingion Hall
var hall = L.marker([8.4040, 124.8871])
    .addTo(map);

hall.bindPopup(`
    <b>Barangay Lingion Hall</b><br>
    Community administration and public services.<br>
    Barangay Lingion, Manolo Fortich, Bukidnon.
`);


// Lingion Elementary School
var school = L.marker([8.4017745, 124.887214])
    .addTo(map);

school.bindPopup(`
    <b>Lingion Elementary School</b><br>
    An educational institution serving
    children in the community.
`);


// Multi-Purpose Facility
var facility = L.marker([8.395833, 124.886927])
    .addTo(map);

facility.bindPopup(`
    <b>Barangay Lingion Multi-Purpose Facility</b><br>
    A community facility for local activities
    and public gatherings.
`);


// 4. 500-METER RADIUS CIRCLE
var circle = L.circle(
    [8.4040, 124.8871],
    {
        color: '#e11d48',
        fillColor: '#fb7185',
        fillOpacity: 0.20,
        radius: 500
    }
).addTo(map);

circle.bindPopup(
    "500-Meter Radius Around Barangay Lingion"
);


// 5. DISPLAY COORDINATES WHEN MAP IS CLICKED
map.on('click', function(e) {

    var lat = e.latlng.lat.toFixed(6);
    var lng = e.latlng.lng.toFixed(6);

    document.getElementById('coords').innerHTML =
        "Latitude: " + lat +
        " | Longitude: " + lng;

    L.popup()
        .setLatLng(e.latlng)
        .setContent(
            "<b>Selected Location</b><br>" +
            "Latitude: " + lat + "<br>" +
            "Longitude: " + lng
        )
        .openOn(map);

});
