import React, { useEffect } from "react";
import L from "leaflet";

const Map = ({ rents }) => {
  useEffect(() => {
    // create map
    const mymap = L.map("mapid").setView([-12.147, -44.998], 14);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9yZGhhbi1jYXJ2YWxobyIsImEiOiJjandnZjlmN2cxNnUzNGJvMzVlM3JrZDY5In0.tFGrxlCyPbq8p9-icwWr5A",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1Ijoiam9yZGhhbi1jYXJ2YWxobyIsImEiOiJjandnZjlmN2cxNnUzNGJvMzVlM3JrZDY5In0.tFGrxlCyPbq8p9-icwWr5A"
      }
    ).addTo(mymap);
    //Load markers
    rents.map((rent, index) => {
      console.log(rent.lat);
      L.marker([rent.lat, rent.lng])
        .bindPopup(`hello <h1>${rent.type}<h1>`)
        .addTo(mymap);
    });
  }, [rents]);

  return <div id="mapid" />;
};

export default Map;
