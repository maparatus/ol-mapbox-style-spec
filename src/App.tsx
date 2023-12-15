import "./App.css"

import spec from "./spec.json";
import MaplibreMapView from "./components/MapLibre";
import OpenLayerMapView from "./components/OpenLayers";
import testStyles, { StyleSpecificationExt } from "./test-styles";
import { useEffect, useState } from "react";
import {packages as lockPackages} from "../package-lock.json";
import semver from "semver";

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
    const baseKey = path.slice(0, -1).join(".")
    toSupport[baseKey] = {
      ...toSupport[baseKey],
      sdk: obj
    };
  }
  if (
    path[0] !== "expression_name" &&
    path[path.length - 1] === "bugs"
  ) {
    const baseKey = path.slice(0, -1).join(".")
    toSupport[baseKey] = {
      ...toSupport[baseKey],
      bugs: obj
    };
  }
});

function MapDemo({ mapStyle }: { mapStyle: StyleSpecificationExt }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, calc(50% - 4px))",
        gap: 8,
      }}
    >
      <div
        style={{ border: "solid 1px black", height: 300, overflow: "hidden", background: "#fff" }}
      >
        <MaplibreMapView mapStyle={mapStyle} />
      </div>
      <div
        style={{ border: "solid 1px black", height: 300, overflow: "hidden", background: "#fff" }}
      >
        <OpenLayerMapView mapStyle={mapStyle} />
      </div>
    </div>
  );
}

type SdkSupportItem = {
  "ol": string;
  "js": string;
  "android": string;
  "ios": string;
  "macos": string;
}
type SdkSupport = {
  "basic functionality": SdkSupportItem
  "data-driven styling": SdkSupportItem
  "basic functionality fallback": SdkSupportItem
  "data-driven styling fallback": SdkSupportItem
}

const INITIAL_VERSION = "12.1.1"
const CURRENT_VERSION = lockPackages['node_modules/ol-mapbox-style'].version;

function getIcon (def: SdkSupport, version: string) {
  const key = "basic functionality";

  if (version !== CURRENT_VERSION) {
    if (semver.valid(def[key].ol)) {
      const isSupported = semver.gte(version, def[key].ol)
      return isSupported ? "✅" : "❌"
    }
    return "❌"
  }
  
  let icon = "⬜"
  if (!def[key] || !def[key].ol) {
    icon = "⬜";
  } else if (def[key].ol === "UNKNOWN") {
    icon = "🤷"
  } else if (def[key].ol === "IN_REVIEW") {
    icon = "🔜"
  } else if (def[key].ol === "999.9.9") {
    const fallbackKey = `${key} fallback` as keyof SdkSupport
    if (def[fallbackKey] && def[fallbackKey].ol !== "UNKNOWN" && def[fallbackKey].ol !== "999.9.9") {
      icon = "🏚️"
    } else {
      icon = "❌"
    }
  } else {
    icon = "✅"
  }
  return icon;
}

function BugLink ({link}: {link: string}) {
  const issueMatches = link.match(/https:\/\/github.com\/openlayers\/ol-mapbox-style\/issues\/(\d+)$/)
  const prMatches = link.match(/https:\/\/github.com\/openlayers\/ol-mapbox-style\/pull\/(\d+)$/)
  if (issueMatches) {
    const num = issueMatches[1];
    return <a target="_blank" className="BugLink" href={link}>#{num}</a>
  } else if (prMatches) {
    const num = prMatches[1];
    return <a target="_blank" className="BugLink" href={link}>pr#{num}</a>
  } else {
    console.error(`Invalid link: '${link}'`)
    return <span>???</span>;
  }
}

async function getVersionInfo () {
  const res = await fetch("https://data.jsdelivr.com/v1/packages/npm/ol-mapbox-style");
  const json = await res.json();
  return json;
}

export default function App () {
  const [versions, setVersions] = useState([])
  const [currentVersion, setCurrentVersion] = useState(CURRENT_VERSION)

  useEffect(() => {
    getVersionInfo().then(json => {
      const newVersions = json.versions.map(v => v.version).filter(v => {
        return semver.gte(v, INITIAL_VERSION)
      })
      setVersions(newVersions)
    })
  }, [])

  const isComparing = currentVersion !== CURRENT_VERSION 

  return (
    <div
      style={{
        padding: 12,
      }}
    >
      <h1>ol-mapbox-style-spec</h1>
      <p>A specification test for ol-mapbox-style against maplibre-gl</p>

      <p>
        <strong>Note:</strong> The spec current refers to the support with all the PR patches applied. However the tests run against the stable <code>v12.1.1</code>
      </p>

      <p>Icon key (not yet complete):</p>
      <dl style={{display: "grid", gridTemplateColumns: "20px auto", gap: 6, border: "solid 1px #ddd", padding: 8}}>
        <dt>🤷</dt>
        <dd style={{margin: 0}}><em>Unknown</em>: not yet investigated</dd>

        <dt>❌</dt>
        <dd style={{margin: 0}}><em>Not supported</em>: does nothing</dd>

        <dt>🏚️</dt>
        <dd style={{margin: 0}}><em>Fallback</em>: fill-extrusion emulates the 2D part of that spec</dd>

        <dt>✅</dt>
        <dd style={{margin: 0}}><em>Supported</em>: has same behaviour as maplibre to a great enough extent to considered supported</dd>
        
        <dt>🔜</dt>
        <dd style={{margin: 0}}><em>In review</em>: feature in review and coming soon (hopefully)</dd>
        
        <dt>⬜</dt>
        <dd style={{margin: 0}}><em>Not required</em>: not required by spec</dd>
      </dl>

      <div style={{marginBottom: 12}}>
        <label htmlFor="versions">Compare against </label>
        
        <select
          id="versions"
          value={currentVersion}
          onChange={(e) => setCurrentVersion(e.target.value)}
          disabled={versions.length < 1 || versions.length === 1}
        >
          {versions.length < 1 && <option>loading versions&hellip;</option>}
          {versions.map(v => {
            return <option key={v}>{v}</option>
          })}
        </select>
      </div>

      <div style={{overflowX: "auto"}}>
        <table>
          <thead>
            <tr>
              <td>Feature key</td>
              <td>{CURRENT_VERSION}</td>
              {isComparing && <td>{currentVersion}</td>}
            </tr>
          </thead>
          <tbody>
            {Object.entries(toSupport).map(([key, def]) => {
              return <tr key={key}>
                <td>
                  <a href={`#${key}`}>{key}</a>{" "}
                  {def.bugs && <span>({def.bugs?.map((bugLink: string) => <BugLink key={bugLink} link={bugLink} />)})</span>}
                </td>
                <td>{getIcon(def.sdk, CURRENT_VERSION)}</td>
                {isComparing && <td>{getIcon(def.sdk, currentVersion)}</td>}
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
          marginTop: 16,
        }}
      >
        {Object.entries(toSupport).map(([key, def]) => {
          const styles = testStyles[key] ?? [];
          const isMissingStyles = styles.length === 0;
          
          const icon = getIcon(def.sdk, currentVersion);
          return (
            <div
              key={key}
              style={{ display: "flex", gap: 4, flexDirection: "column" }}
            >
              <a id={key} />
              <div>
                {icon}&nbsp;
                {key}{" "}
                {def.bugs && <span>({def.bugs?.map((bugLink: string) => <BugLink key={bugLink} link={bugLink} />)})</span>}
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
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 6 }}>
                  {styles.map((style, styleIndex) => {
                    return <div key={styleIndex} style={{
                      background: "#f6f6f6",
                      padding: 8,
                      border: "solid 1px #eee",
                    }}>
                      {style.metadata?.description}
                      <MapDemo key={styleIndex} mapStyle={style} />
                    </div>;
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
