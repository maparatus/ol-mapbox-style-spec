import "./App.css"

import spec from "./spec.json";
import { StyleSpecification } from "maplibre-gl";
import MaplibreMapView from "./components/MapLibre";
import OpenLayerMapView from "./components/OpenLayers";
import testStyles from "./test-styles";

const walkObject = (
  obj: any,
  fn: (path: string[], obj: any) => void,
  path: string[] = [],
) => {
  fn(path, obj);
  if (Array.isArray(obj)) {
    obj.forEach((item, index) =>
      walkObject(item, fn, path.concat(String(index))),
    );
  } else if (typeof obj === "object") {
    for (const [key, item] of Object.entries(obj)) {
      walkObject(item, fn, path.concat(key));
    }
  }
};

const toSupport: Record<string, any> = {};
walkObject(spec, (path, obj) => {
  if (
    path[0] !== "expression_name" &&
    path[path.length - 1] === "sdk-support" &&
    "js" in obj["basic functionality"]
  ) {
    toSupport[path.slice(0, -1).join(".")] = obj;
  }
});

function MapDemo({ mapStyle }: { mapStyle: StyleSpecification }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, calc(50% - 6px))",
        gap: 12,
      }}
    >
      <div
        style={{ border: "solid 1px black", height: 300, overflow: "hidden" }}
      >
        <MaplibreMapView mapStyle={mapStyle} />
      </div>
      <div
        style={{ border: "solid 1px black", height: 300, overflow: "hidden" }}
      >
        <OpenLayerMapView mapStyle={mapStyle} />
      </div>
    </div>
  );
}

function getIcon (def, type: "basic" | "data-driven") {
  const key = {
    "data-driven": "data-driven styling",
    "basic": "basic functionality"
  }[type]
  let icon = "⬜"
  if (!def[key] || !def[key].ol) {
    icon = "⬜";
  } else if (def[key].ol === "TODO") {
    icon = "📝"
  } else if (def[key].ol === "999.9.9") {
    icon = "❌"
  } else {
    icon = "✅"
  }
  return icon;
}

export default function App () {
  return (
    <div
      style={{
        padding: 12,
      }}
    >
      <h1>ol-mapbox-style-spec</h1>
      <p>A specification test for ol-mapbox-style against maplibre-gl</p>


      <p>Icon key (not yet complete):</p>
      <dl style={{display: "grid", gridTemplateColumns: "20px auto", gap: 6, border: "solid 1px #ddd", padding: 8}}>
        <dt>📝</dt>
        <dd style={{margin: 0}}>Todo</dd>

        <dt>❌</dt>
        <dd style={{margin: 0}}>Not supported</dd>

        <dt>✅</dt>
        <dd style={{margin: 0}}>Supported</dd>
        
        <dt>⬜</dt>
        <dd style={{margin: 0}}>Not required</dd>
        
      </dl>

      <div style={{overflowX: "auto"}}>
        <table>
          <thead>
            <tr>
              <td>feature</td>
              <td>basic functionality</td>
              <td>data-driven styling</td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(toSupport).map(([key, def]) => {
              return <tr>
                <td><a href={`#${key}`}>{key}</a></td>
                <td>{getIcon(def, "basic")}</td>
                <td>{getIcon(def, "data-driven")}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {Object.entries(toSupport).map(([key, def]) => {
          const styles = testStyles[key] ?? [];
          const isMissingStyles = styles.length === 0;
          
          const icon = getIcon(def, "basic");
          return (
            <div
              key={key}
              style={{ display: "flex", gap: 4, flexDirection: "column" }}
            >
              <a id={key} />
              <div>
                {icon}&nbsp;
                {key}
              </div>
              {isMissingStyles && (
                <div
                  style={{
                    border: "solid 1px #ddd",
                    padding: 4,
                  }}
                >
                  Missing test style
                </div>
              )}
              {!isMissingStyles && (
                <div style={{ position: "relative" }}>
                  {styles.map((style, styleIndex) => {
                    return <MapDemo key={styleIndex} mapStyle={style} />;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
