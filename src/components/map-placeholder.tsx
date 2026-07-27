"use client";

import type { ComponentType } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapContainerAny = MapContainer as unknown as ComponentType<any>;
const TileLayerAny = TileLayer as unknown as ComponentType<any>;
const MarkerAny = Marker as unknown as ComponentType<any>;
const PopupAny = Popup as unknown as ComponentType<any>;

export function OfficeMap() {
  return (
    <MapContainerAny center={[4.0511, 9.7679]} zoom={13} className="h-[320px] w-full rounded-2xl">
      <TileLayerAny
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerAny position={[4.0511, 9.7679]}>
        <PopupAny>Grace Travel Consultancy, Douala</PopupAny>
      </MarkerAny>
    </MapContainerAny>
  );
}
