import React, { useEffect, useState } from "react";
import L from "leaflet";
import ShowPage from "./rent/ShowPage";

const Map = ({ rents }) => {
  useEffect(() => {
    // create map
    const mymap = L.map("mapid").setView([-12.147, -44.998], 14);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9yZGhhbi1jYXJ2YWxobyIsImEiOiJjandnZjlmN2cxNnUzNGJvMzVlM3JrZDY5In0.tFGrxlCyPbq8p9-icwWr5A",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1Ijoiam9yZGhhbi1jYXJ2YWxobyIsImEiOiJjandnZjlmN2cxNnUzNGJvMzVlM3JrZDY5In0.tFGrxlCyPbq8p9-icwWr5A"
      }
    ).addTo(mymap);
    //Load markers

    rents.map((rent, index) => {
      L.marker([rent.lat, rent.lng])
        .bindPopup(
          `<h1>${rent.type}</h1><hr/><h3>R$ ${
            rent.price
          }</h3><br/><button id="${
            rent._id
          }" class="btn btn-primary">Ver</button>`
        )
        .on("popupopen", function() {
          L.DomEvent.on(
            document.getElementById(`${rent._id}`),
            "click",
            () => handlePopup(rent._id) // The result of this call is the event handler func.
          );
        })
        .addTo(mymap);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rents]);

  const [open, setOpen] = useState(false);

  const [rentID, setRentID] = useState("");

  function handleClose() {
    setOpen(false);
  }

  const handlePopup = rentId => {
    setOpen(true);
    setRentID(rentId);
  };

  return (
    <>
      <div id="mapid" />
      <ShowPage handleClose={handleClose} open={open} rentID={rentID} />
    </>
  );
};

export default Map;
