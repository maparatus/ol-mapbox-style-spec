import "ol/ol.css";

import { useEffect, useRef, useState } from "react";
import { Map as OlMap } from "ol";
import apply from "ol-mapbox-style";
import { StyleSpecification } from "maplibre-gl";


export default function OpenLayers({ mapStyle }: { mapStyle: StyleSpecification }) {
  const [map, setMap] = useState<OlMap | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const mapInstance = new OlMap({
        layers: [],
        // HACK: Doesn't deal well with 1.5/1.25 etc...
        pixelRatio: Math.ceil(window.devicePixelRatio),
        target: ref.current,
      });

      setMap(mapInstance);

      return () => {
        mapInstance.dispose();
      };
    }
  }, [ref]);

  useEffect(() => {
    if (map) {
      apply(map, mapStyle, {getImage: mapStyle.metadata?.getImageOpenLayers});
      map.getView().setZoom(5);
      
      if (mapStyle.metadata?.setupOpenLayers) {
        mapStyle.metadata?.setupOpenLayers(map)
      }
    }
  }, [map]);

  return <div style={{ width: "100%", height: "100%" }} ref={ref} />;
}
