import "maplibre-gl/dist/maplibre-gl.css";

import { useEffect, useRef, useState } from "react";
import {
  Map as MapLibreMap,
  NavigationControl,
  StyleSpecification,
} from "maplibre-gl";
import { useInView } from "react-intersection-observer";

export default function Maplibre({ mapStyle }: { mapStyle: StyleSpecification }) {
  const { ref: refInView, inView } = useInView();
  const [map, setMap] = useState<MapLibreMap | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && inView) {
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
  }, [ref, inView]);

  useEffect(() => {
    if (map) {
      map.setStyle(mapStyle);

      if (mapStyle.metadata?.setupMapLibre) {
        mapStyle.metadata?.setupMapLibre(map)
      }
    }
  }, [map, mapStyle]);

  return <div ref={refInView} style={{ position: "relative", width: "100%", height: "100%" }}>
    <div style={{ width: "100%", height: "100%" }} ref={ref} />
  </div>;
}
