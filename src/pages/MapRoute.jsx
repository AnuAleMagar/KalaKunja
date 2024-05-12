import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const MapRoute = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const leafletMap = L.map("map").setView([28.3949, 84.124], 8);
    setMap(leafletMap);

    L.tileLayer(
      "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ).addTo(leafletMap);

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
        lat: 27.8253, // Example latitude of the destination
        lng: 83.6348, // Example longitude of the destination
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
          
      <div class="row container p-5 bg-red-500 m-auto">
        <div class="col-lg-2">
           <h1>Description</h1>
        </div>
        <div>
        <div id="map" class="col-lg-10"  style={{ height: "600px" }} />
      <button onClick={handleGetDirections}>Get Directions</button>
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default MapRoute;
