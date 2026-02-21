"use client";

import { useRef, useEffect, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { DynamicIcon } from "lucide-react/dynamic";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

const MALE_CENTER: [number, number] = [73.5093, 4.1755]; // [lng, lat]

interface LocationMapProps {
  onLocationChange: (lat: number, lng: number) => void;
  onInteraction: () => void;
}

export function LocationMap({
  onLocationChange,
  onInteraction,
}: LocationMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const hasInteracted = useRef(false);
  const isMapReady = useRef(false);
  const { resolvedTheme } = useTheme();

  const getStyle = useCallback((theme: string | undefined) => {
    return theme === "dark"
      ? "mapbox://styles/mapbox/dark-v11"
      : "mapbox://styles/mapbox/streets-v12";
  }, []);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: getStyle(resolvedTheme),
      center: MALE_CENTER,
      zoom: 12,
      accessToken: MAPBOX_TOKEN,
      attributionControl: false,
    });

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );
    map.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-left"
    );

    // Only track interactions after the map has fully loaded
    map.on("load", () => {
      isMapReady.current = true;
    });

    const handleMoveEnd = () => {
      const center = map.getCenter();
      onLocationChange(center.lat, center.lng);
    };

    map.on("moveend", handleMoveEnd);

    // Only count real user interactions (drag, zoom via buttons/gesture)
    map.on("dragstart", () => {
      if (isMapReady.current && !hasInteracted.current) {
        hasInteracted.current = true;
        onInteraction();
      }
    });
    map.on("zoomstart", () => {
      if (isMapReady.current && !hasInteracted.current) {
        hasInteracted.current = true;
        onInteraction();
      }
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to theme changes
  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.setStyle(getStyle(resolvedTheme));
  }, [resolvedTheme, getStyle]);

  return (
    <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
      {/* Map container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Fixed center pin overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10">
        <DynamicIcon
          name="map-pin"
          className="w-8 h-8 text-highlight drop-shadow-lg"
          fill="#DFEC58"
          strokeWidth={1.5}
        />
      </div>

      {/* Pulsing dot at pin base */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
        <div className="w-2 h-2 bg-highlight rounded-full animate-ping opacity-75" />
      </div>
    </div>
  );
}
