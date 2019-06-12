import React, { useEffect, useState } from "react";
import L from "leaflet";

const MapForm = ({ setFormData, formData }) => {
  const [markerData, setMarkerData] = useState({});

  // City coord
  const coord = city => {
    if (city === "Barreiras") {
      return [-12.147, -44.997];
    } else if (city === "LEM") {
      return [-12.0905, -45.7804];
    } else {
      return [-12.147, -44.997];
    }
  };

  useEffect(() => {
    // Create icons
    const LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: "https://i.imgur.com/kV6zEFS.png",
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
    let markerIcon;
    if (formData.type === "Comercial") {
      markerIcon = comercialIcon;
    } else if (formData.type === "Casa") {
      markerIcon = houseIcon;
    } else if (formData.type === "Galpão") {
      markerIcon = galpaoIcon;
    } else if (formData.type === "Apartamento") {
      markerIcon = apartmentIcon;
    } else {
      markerIcon = houseIcon;
    }
    // create map
    let mymap2 = L.map("mapid2", { attributionControl: false }).setView(
      coord(formData.city),
      13
    );
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9yZGhhbi1jYXJ2YWxobyIsImEiOiJjandnZjlmN2cxNnUzNGJvMzVlM3JrZDY5In0.tFGrxlCyPbq8p9-icwWr5A",
      {
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1Ijoiam9yZGhhbi1jYXJ2YWxobyIsImEiOiJjandnZjlmN2cxNnUzNGJvMzVlM3JrZDY5In0.tFGrxlCyPbq8p9-icwWr5A"
      }
    ).addTo(mymap2);

    // create mark
    mymap2.on("click", onMapClick);
    let newMarker2;
    function onMapClick(e) {
      if (newMarker2 === undefined) {
        newMarker2 = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: markerIcon
        }).addTo(mymap2);
        setMarkerData({
          ...newMarker2
        });
        setFormData({
          ...formData,
          lat: newMarker2._latlng.lat,
          lng: newMarker2._latlng.lng
        });
      } else {
        newMarker2.remove();
        newMarker2 = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: markerIcon
        }).addTo(mymap2);
        setMarkerData({
          ...newMarker2
        });
        setFormData({
          ...formData,
          lat: newMarker2._latlng.lat,
          lng: newMarker2._latlng.lng
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="mapid2" />;
};

export default MapForm;
