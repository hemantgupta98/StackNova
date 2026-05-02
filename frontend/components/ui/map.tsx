/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker asset URLs for bundlers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const markerIcon2xUrl =
  typeof markerIcon2x === "string" ? markerIcon2x : (markerIcon2x as any).src;
const markerIconUrl =
  typeof markerIcon === "string" ? markerIcon : (markerIcon as any).src;
const markerShadowUrl =
  typeof markerShadow === "string" ? markerShadow : (markerShadow as any).src;

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2xUrl,
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
});

export default function MapComponent() {
  const position: [number, number] = [22.8046, 86.2029];

  const onMapCreated = (map: L.Map) => {
    map.setView(position, 13);
    // Lock panning so the fixed overlay pin stays on the user's location
    map.dragging.disable();
    map.touchZoom.disable();
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
  };

  return (
    <div className="relative">
      <MapContainer
        center={position}
        zoom={13}
        className="w-full rounded-xl"
        style={{ height: "400px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      {/* Fixed small center pin overlay */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2C8.68629 2 6 4.68629 6 8C6 12.5 12 20 12 20C12 20 18 12.5 18 8C18 4.68629 15.3137 2 12 2Z"
            fill="#1976D2"
          />
          <circle cx="12" cy="8" r="2" fill="white" />
        </svg>
      </div>
    </div>
  );
}
