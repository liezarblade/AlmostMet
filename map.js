// Create map

const map = L.map('map',{
zoomControl:true
}).setView([20.5937,78.9629],5);

// Dark Map

L.tileLayer(
'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
{
attribution:'© OpenStreetMap'
}
).addTo(map);


// Get User Location

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat = position.coords.latitude;
const lng = position.coords.longitude;

// Move map to user

map.setView([lat,lng],15);


// YOU

const me = L.circleMarker(
[lat,lng],
{
radius:14,
color:'#00ff88',
fillColor:'#00ff88',
fillOpacity:1
}
).addTo(map);

me.bindPopup(`
<b>You</b>
<br>
Visible Now
`);


// DEMO USERS

const users=[

{
name:"🌸 Sakura",
age:22,
gender:"Female",
lat:lat+0.001,
lng:lng+0.001
},

{
name:"🎧 Luna",
age:24,
gender:"Female",
lat:lat-0.0015,
lng:lng+0.001
},

{
name:"🎒 Maya",
age:21,
gender:"Female",
lat:lat+0.002,
lng:lng-0.001
}

];

users.forEach(user=>{

const marker=L.circleMarker(
[user.lat,user.lng],
{
radius:12,
color:'#e50914',
fillColor:'#e50914',
fillOpacity:1
}
);

marker.addTo(map);

marker.bindPopup(`

<div>

<h3>${user.name}</h3>

<p>${user.gender}</p>

<p>Age ${user.age}</p>

<p>Online Now 🟢</p>

<button
class="wave-btn"
onclick="window.location.href='chat.html'">

Wave 👋

</button>

</div>

`);

});

},

(error)=>{

alert(
"Please enable location access."
);

}

);