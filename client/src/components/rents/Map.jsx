import React, { useEffect, useState } from "react";
import L from "leaflet";
import ShowPage from "./rent/ShowPage";

const Map = ({ rents, path }) => {
  useEffect(() => {
    // Create city data
    let cityRent;
    let cityCoord;
    if (path === "/lem") {
      cityRent = rents.filter(rent => rent.city === "LEM");
      cityCoord = [-12.0905, -45.7804];
    } else if (path === "/barreiras") {
      cityRent = rents.filter(rent => rent.city === "Barreiras");
      cityCoord = [-12.147, -44.997];
    }
    const cityResult = [cityRent, cityCoord];

    // Create icons

    const LeafIcon = L.Icon.extend({
      options: {
        shadowUrl:
          "http://dermvetolympia.com/wp-content/uploads/revslider/petowners_slide/shadow.png",
        iconSize: [30, 35], // size of the icon
        shadowSize: [40, 45], // size of the shadow
        iconAnchor: [15, 35], // point of the icon which will correspond to marker's location
        shadowAnchor: [12, 50], // the same for the shadow
        popupAnchor: [12, -35] // point from which the popup should open relative to the iconAnchor
      }
    });
    const galpaoIcon = new LeafIcon({
        iconUrl: "https://i.imgur.com/QM4NdW4.png"
      }),
      houseIcon = new LeafIcon({ iconUrl: "https://i.imgur.com/gZEJHpx.png" }),
      comercialIcon = new LeafIcon({
        iconUrl: "https://i.imgur.com/Dd53WJ6.png"
      }),
      apartmentIcon = new LeafIcon({
        iconUrl: "https://i.imgur.com/Cy0yen5.png"
      });

    // create map
    const mymap = L.map("mapid", { attributionControl: false }).setView(
      cityResult[1],
      15
    );
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

    cityResult[0].map(rent => {
      let markerIcon;
      if (rent.type === "Comercial") {
        markerIcon = comercialIcon;
      } else if (rent.type === "Casa") {
        markerIcon = houseIcon;
      } else if (rent.type === "Galpão") {
        markerIcon = galpaoIcon;
      } else if (rent.type === "Apartamento") {
        markerIcon = apartmentIcon;
      } else {
        markerIcon = houseIcon;
      }

      L.marker([rent.lat, rent.lng], { icon: markerIcon })
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
