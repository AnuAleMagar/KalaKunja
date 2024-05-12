import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MapRoute = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const leafletMap = L.map("map").setView([28.3949, 84.124], 8);
    setMap(leafletMap);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(leafletMap);

    return () => {
      leafletMap.remove();
    };
  }, []);

  const getDirections = (source, destination) => {
    if (map) {
      L.Routing.control({
        waypoints: [
          L.latLng(source.lat, source.lng),
          L.latLng(destination.lat, destination.lng),
        ],
      }).addTo(map);
    }
  };

  const handleGetDirections = () => {
    getCurrentLocation((currentLocation) => {
      const destination = {
        lat: 27.67734, // Example latitude of the destination
        lng: 85.36909, // Example longitude of the destination,
      };
      getDirections(currentLocation, destination);
    });
  };

  const getCurrentLocation = (callback) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          callback({ lat: latitude, lng: longitude });
        },
        function (error) {
          console.error("Error getting current location:", error);
          alert(
            "Error getting current location. Please make sure location access is enabled and try again."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div>
      <Navbar />
      <div class="row container  bg-gray-100 shadow  m-auto flex" >
        <div class="col-lg-2 text-primary textile   pt-5">
          <h1>Sharma Textile</h1>
          <p>Sharma Textiles is more than just a small textile shop nestled in the heart of Kaushaltar, Bhaktapur—it's a cherished gem within the local community. Established with a vision to provide quality fabrics and personalized service, Sharma Textiles has become a trusted destination for locals seeking everything from vibrant saris to intricately woven textiles</p>
        </div>
        <div class="ms-6 mb-5"> 
          <div id="map" class="col-lg-10 bg-gray-500" style={{ height: "550px",width:"988px" }} />
          <button onClick={handleGetDirections}>Get Directions</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapRoute;
