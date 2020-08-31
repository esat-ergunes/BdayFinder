



let backBtn = document.querySelector(".backBtn");


  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXNhdGVyZ25zIiwiYSI6ImNrZWkxYXBsZTFmajUycm43ZTFyNDRxeWQifQ.TZuyDohiaBcxxkI5EL-fuQ"; // replace this with your access token
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // replace this with your style URL
    center: [4.3483136, 50.846105599999994],
    zoom: 10.7,
  });



  /*var marker = new mapboxgl.Marker()
    .setLngLat([4.3483136, 50.846105599999994])
    .addTo(map); // add the marker to the map*/

 backBtn.addEventListener("click", (e) => {
     e.preventDefault();
     window.location.href = "/index.html";
     console.log('clicked');
     
   });





   
