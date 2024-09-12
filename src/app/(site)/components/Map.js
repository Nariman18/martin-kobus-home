"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

function MapBox() {
  const mapContainerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/nariman18/cllfrt3t0013s01pl6d3ncuxy",
      center: [-122.503714, 37.871328],
      zoom: 16.3,
      attributionControl: false,
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* Show the attributions div if Map is true */}

      {mapLoaded && <div className="mapboxgl-control-container" />}
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default MapBox;
