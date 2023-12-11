import "maplibre-gl/dist/maplibre-gl.css";

import { useEffect, useRef, useState } from "react";
import {
  Map as MapLibreMap,
  NavigationControl,
  StyleSpecification,
} from "maplibre-gl";

export default function Maplibre({ mapStyle }: { mapStyle: StyleSpecification }) {
  const [map, setMap] = useState<MapLibreMap | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const mapInstance = new MapLibreMap({
        container: ref.current,
        style: mapStyle,
        zoom: 5,
      });
      mapInstance.addControl(new NavigationControl());
      setMap(mapInstance);

      return () => {
        mapInstance.remove();
      };
    }
  }, [ref]);

  useEffect(() => {
    if (map) {
      map.setStyle(mapStyle);
    }
  }, [mapStyle]);

  return <div style={{ width: "100%", height: "100%" }} ref={ref} />;
}
