import React, { useEffect, useState } from "react";
import L from "leaflet";

const MapForm = ({ setFormData, formData }) => {
  const [markerData, setMarkerData] = useState({});

  useEffect(() => {
    // create map
    let mymap2 = L.map("mapid2").setView([-12.147, -44.997], 13);
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
        newMarker2 = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap2);
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
        newMarker2 = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap2);
        setMarkerData({
          ...newMarker2
        });
        setFormData({
          ...formData,
          lat: newMarker2._latlng.lat,
          lng: newMarker2._latlng.lng
        });
        console.log(newMarker2._latlng);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="mapid2" />;
};

export default MapForm;
