"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

// Dynamically import Leaflet components (client-side only)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Riyadh Location Coordinates
const riyadhCoordinates: [number, number] = [24.879296, 46.602964];

const MapComponent = () => {
  return (
    <div className="w-full">
      {/* Leaflet Map */}
      <div className="relative z-10 w-full h-[350px] md:h-[568px]">
        <MapContainer
          center={riyadhCoordinates}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
          attributionControl={false} // This disables the attribution completely
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={riyadhCoordinates}>
            <Popup>
              <div className="text-left">
                <p className="text-lg">King Fahd Rd, Al Aarid, Riyadh</p>
                <p className="text-base gap-1 text-[#ED3937]">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="text-[#414042] ml-3">549533944</span>
                </p>
                <p className="text-base gap-1 text-[#ED3937]">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="text-[#414042] ml-3">4 PM – 2 AM</span>
                </p>
                <a
                  href="https://www.google.com/maps?q=King+Fahd+Rd,+Al+Aarid,+Riyadh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base mt-3 !text-[#ED3937] font-semibold transition"
                >
                  Get Directions
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
