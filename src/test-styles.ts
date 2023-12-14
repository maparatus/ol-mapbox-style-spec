import { Map as MlMap, RasterDEMSourceSpecification, StyleSpecification } from "maplibre-gl";
import { FeatureCollection } from "geojson";
import { Map as OlMap } from "ol";
import { Layer } from "ol/layer";
import { generateSdfMapLibre, generateSdfOpenLayers } from "./util";

const TerrariumSource: RasterDEMSourceSpecification = {
  type: 'raster-dem',
  attribution:
    '<a href="https://github.com/tilezen/joerd/blob/master/docs/attribution.md" target="_blank">Data sources and attribution</a>',
  tileSize: 256,
  tiles: [
    'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
  ],
  maxzoom: 15,
  encoding: 'terrarium',
}

const PointsGeoJSON: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-1, 0],
      },
      properties: {
        name: "one",
        size: 1,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, -1],
      },
      properties: {
        name: "two",
        size: 2,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0.5],
      },
      properties: {
        name: "three",
        size: 3,
      },
    },
  ],
};

const LineGeoJSON: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-3, 0],
          [3, 0],
        ],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-3, -1],
          [3, -1],
        ],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [-3, 0.5],
          [3, 0.5],
        ],
      },
      properties: {},
    },
  ],
};

const PolygonGeoJSON: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-3, -3],
            [-2, -3],
            [-2, -2],
            [-3, -2],
            [-3, -3],
          ],
        ],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [3, 3],
            [2, 3],
            [2, 2],
            [3, 2],
            [3, 3],
          ],
        ],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-0.5, -0.5],
            [0.5, -0.5],
            [0.5, 0.5],
            [-0.5, 0.5],
            [-0.5, -0.5],
          ],
        ],
      },
      properties: {},
    },
  ],
};

export type StyleSpecificationExt = StyleSpecification & {
  metadata: undefined | (StyleSpecification["metadata"] & {
    description?: string;
    setupOpenLayers?: (map: OlMap) => void;
    setupMapLibre?: (map: MlMap) => void;
    getImageOpenLayers?: (layer: Layer, id: string) => string | HTMLCanvasElement | HTMLImageElement;
  })
}

const testStyles: Record<string, StyleSpecificationExt[]> = {
  // "expression_name.values.-": [],
  // "expression_name.values.!": [],
  // "expression_name.values.!=": [],
  // "expression_name.values.*": [],
  // "expression_name.values./": [],
  // "expression_name.values.%": [],
  // "expression_name.values.^": [],
  // "expression_name.values.+": [],
  // "expression_name.values.<": [],
  // "expression_name.values.<=": [],
  // "expression_name.values.==": [],
  // "expression_name.values.>": [],
  // "expression_name.values.>=": [],
  // "expression_name.values.abs": [],
  // "expression_name.values.accumulated": [],
  // "expression_name.values.acos": [],
  // "expression_name.values.all": [],
  // "expression_name.values.any": [],
  // "expression_name.values.array": [],
  // "expression_name.values.asin": [],
  // "expression_name.values.at": [],
  // "expression_name.values.atan": [],
  // "expression_name.values.boolean": [],
  // "expression_name.values.case": [],
  // "expression_name.values.ceil": [],
  // "expression_name.values.coalesce": [],
  // "expression_name.values.collator": [],
  // "expression_name.values.concat": [],
  // "expression_name.values.cos": [],
  // "expression_name.values.downcase": [],
  // "expression_name.values.e": [],
  // "expression_name.values.feature-state": [],
  // "expression_name.values.floor": [],
  // "expression_name.values.format": [],
  // "expression_name.values.geometry-type": [],
  // "expression_name.values.get": [],
  // "expression_name.values.has": [],
  // "expression_name.values.heatmap-density": [],
  // "expression_name.values.id": [],
  // "expression_name.values.image": [],
  // "expression_name.values.in": [],
  // "expression_name.values.index-of": [],
  // "expression_name.values.interpolate-hcl": [],
  // "expression_name.values.interpolate-lab": [],
  // "expression_name.values.interpolate": [],
  // "expression_name.values.is-supported-script": [],
  // "expression_name.values.length": [],
  // "expression_name.values.let": [],
  // "expression_name.values.line-progress": [],
  // "expression_name.values.literal": [],
  // "expression_name.values.ln": [],
  // "expression_name.values.ln2": [],
  // "expression_name.values.log10": [],
  // "expression_name.values.log2": [],
  // "expression_name.values.match": [],
  // "expression_name.values.max": [],
  // "expression_name.values.min": [],
  // "expression_name.values.number-format": [],
  // "expression_name.values.number": [],
  // "expression_name.values.object": [],
  // "expression_name.values.pi": [],
  // "expression_name.values.properties": [],
  // "expression_name.values.resolved-locale": [],
  // "expression_name.values.rgb": [],
  // "expression_name.values.rgba": [],
  // "expression_name.values.round": [],
  // "expression_name.values.sin": [],
  // "expression_name.values.slice": [],
  // "expression_name.values.sqrt": [],
  // "expression_name.values.step": [],
  // "expression_name.values.string": [],
  // "expression_name.values.tan": [],
  // "expression_name.values.to-boolean": [],
  // "expression_name.values.to-color": [],
  // "expression_name.values.to-number": [],
  // "expression_name.values.to-rgba": [],
  // "expression_name.values.to-string": [],
  // "expression_name.values.typeof": [],
  // "expression_name.values.upcase": [],
  // "expression_name.values.var": [],
  // "expression_name.values.within": [],
  // "expression_name.values.zoom": [],
  "layer.type.values.background": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {},
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "background",
        },
      ],
    },
  ],
  "layer.type.values.circle": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
        },
      ],
    },
  ],
  "layer.type.values.fill-extrusion": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
            // "fill-extrusion-color": "#ff0000"
          }
        },
      ],
    },
  ],
  "layer.type.values.fill": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "fill",
          source: "polygons",
        },
      ],
    },
  ],
  "layer.type.values.heatmap": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "heatmap",
          source: "points",
        },
      ],
    },
  ],
  "layer.type.values.hillshade": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        terrarium: TerrariumSource,
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'hillshade',
          type: 'hillshade',
          source: 'terrarium',
          paint: {},
        },
      ],
    },
  ],
  "layer.type.values.line": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        lines: {
          type: "geojson",
          data: LineGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "lines",
        },
      ],
    },
  ],
  "layer.type.values.raster": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
        },
      ],
    },
  ],
  "layer.type.values.symbol": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
        },
      ],
    },
  ],
  "layout_background.visibility": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {},
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "background",
          layout: {
              visibility: "none",
          }
        },
      ],
    },
  ],
  "layout_circle.circle-sort-key": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: Array(10).fill(true).map((_, index) => {
              const o = index*0.05;
              return {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [0+o, 0+o],
                },
                properties: {
                  color: (index % 2) ? "red" : "blue",
                  zIndex: (index % 2),
                },
              };
            })
          }
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          layout: {
            "circle-sort-key": ["get", "zIndex"]
          },
          paint: {
            "circle-color": ["get", "color"]
          }
        },
      ],
    },
  ],
  "layout_circle.visibility": [
    {
        version: 8,
        name: "test",
        metadata: {
          description: "basic"
        },
        sources: {
          points: {
            type: "geojson",
            data: PointsGeoJSON,
          },
        },
        sprite: "",
        glyphs:
          "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
        layers: [
          {
            id: "test",
            type: "circle",
            source: "points",
            layout: {
                visibility: "none",
            }
          },
        ],
      },
  ],
  "layout_fill-extrusion.visibility": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion",
          "type": "fill-extrusion",
          "source": "polygons",
          "layout": {
            "visibility": "none"
          }
        },
      ],
    },
  ],
  "layout_fill.fill-sort-key": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: Array(10).fill(true).map((_, index) => {
              const o = index*0.1;
              return {
                type: "Feature",
                geometry: {
                  type: "Polygon",
                  coordinates: [
                    [
                      [0+o, 0+o],
                      [1+o, 0+o],
                      [1+o, 1+o],
                      [0+o, 1+o],
                      [0+o, 0+o],
                    ],
                  ],
                },
                properties: {
                  color: (index % 2) ? "red" : "blue",
                  zIndex: (index % 2),
                },
              };
            })
          }
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "fill",
          source: "polygons",
          layout: {
            "fill-sort-key": ["get", "zIndex"]
          },
          paint: {
            "fill-color": ["get", "color"]
          }
        },
      ],
    },
  ],
  "layout_fill.visibility": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "fill",
          source: "polygons",
          layout: {
            "visibility": "none"
          },
        },
      ],
    },
  ],
  "layout_heatmap.visibility": [],
  "layout_hillshade.visibility": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        terrarium: TerrariumSource,
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'hillshade',
          type: 'hillshade',
          source: 'terrarium',
          layout: {
            visibility: "none",
          },
          paint: {},
        },
      ],
    },
  ],
  "layout_line.line-cap": [
    ...([
      {desc: "default", propValue: undefined},
      {desc: "round", propValue: "round"},
      {desc: "butt", propValue: "butt"},
      {desc: "square", propValue: "square"},
    ] as const).map(({desc, propValue}) => {
      const out: StyleSpecificationExt = {
        version: 8,
        name: "test",
        metadata: {
          description: desc
        },
        sources: {
          points: {
            type: "geojson",
            data: LineGeoJSON,
          },
        },
        sprite: "",
        glyphs:
          "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
        layers: [
          {
            id: "test",
            type: "line",
            source: "points",
            layout: {
                "line-cap": propValue,
            },
            paint: {
              "line-color": "red",
              "line-width": 20,
            }
          },
        ],
      };
      return out;
    })
  ],
  "layout_line.line-join": [],
  "layout_line.line-miter-limit": [],
  "layout_line.line-round-limit": [],
  "layout_line.line-sort-key": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        lines: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: Array(10).fill(true).map((_, index) => {
              const o = index*0.1;
              return {
                type: "Feature",
                geometry: {
                  type: "LineString",
                  coordinates: [
                    [0+o, 0],
                    [1+o, 0],
                  ],
                },
                properties: {
                  color: (index % 2) ? "red" : "blue",
                  zIndex: (index % 2),
                },
              };
            })
          }
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "lines",
          layout: {
            "line-sort-key": ["get", "zIndex"]
          },
          paint: {
            "line-color": ["get", "color"]
          }
        },
      ],
    },
  ],
  "layout_line.visibility": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "points",
          layout: {
              visibility: "none",
          }
        },
      ],
    },
  ],
  "layout_raster.visibility": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
          layout: {
            visibility: "none",
          }
        },
      ],
    },
  ],
  "layout_symbol.icon-allow-overlap": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "zoo",
              "icon-size": 4,
              "icon-allow-overlap": true
          }
        },
      ],
    },
  ],
  "layout_symbol.icon-anchor": [],
  "layout_symbol.icon-ignore-placement": [],
  "layout_symbol.icon-image": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11"
          }
        },
      ],
    },
  ],
  "layout_symbol.icon-keep-upright": [],
  "layout_symbol.icon-offset": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11",
          }
        },
        {
          id: "test2",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11",
              "icon-offset": [90, 80]
          }
        },
      ],
    },
  ],
  "layout_symbol.icon-optional": [],
  "layout_symbol.icon-overlap": [],
  "layout_symbol.icon-padding": [],
  "layout_symbol.icon-pitch-alignment": [],
  "layout_symbol.icon-rotate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11",
              "icon-rotate": 45
          }
        },
      ],
    },
  ],
  "layout_symbol.icon-rotation-alignment": [],
  "layout_symbol.icon-size": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11",
              "icon-size": 3
          }
        },
      ],
    },
    {
      version: 8,
      name: "test",
      metadata: {
        description: "data-driven/feature"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11",
              "icon-size": ["get", "size"]
          }
        },
      ],
    },
    {
      version: 8,
      name: "test",
      metadata: {
        description: "data-driven/zoom zoom in and out should change size at zoom levels"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11",
              "icon-size": ["interpolate", ["linear"], ["zoom"], 0, 1, 12, 4], 
          }
        },
      ],
    },
  ],
  "layout_symbol.icon-text-fit-padding": [],
  "layout_symbol.icon-text-fit": [
    ...([
      {desc: "none", propValue: "none"},
      {desc: "width", propValue: "width"},
      {desc: "height", propValue: "height"},
      {desc: "both", propValue: "both"},
    ] as const).map(({desc, propValue}) => {
      const out: StyleSpecificationExt = {
        version: 8,
        name: "test",
        metadata: {
          description: desc
        },
        sources: {
          points: {
            type: "geojson",
            data: PointsGeoJSON,
          },
        },
        sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
        glyphs:
          "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
        layers: [
          {
            id: "test",
            type: "symbol",
            source: "points",
            layout: {
              "text-field": "{name}\n{name}",
              "text-font": ["Roboto Regular"],
              "icon-image": "wetland_bg_11",
              "icon-text-fit": propValue
            }
          },
        ],
      };
      return out
    })
  ],
  "layout_symbol.symbol-avoid-edges": [],
  "layout_symbol.symbol-placement": [],
  "layout_symbol.symbol-sort-key": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: Array(10).fill(true).map((_, index) => {
              const o = index*0.1;
              return {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [0+o, 0+o],
                },
                properties: {
                  icon: (index % 2) ? "aquarium" : "bank",
                  zIndex: (index % 2),
                },
              };
            })
          }
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "symbol-sort-key": ["get", "zIndex"],
            "icon-image": ["get", "icon"],
            "icon-allow-overlap": true,
          },
          paint: {
          }
        },
      ],
    },
  ],
  "layout_symbol.symbol-spacing": [],
  "layout_symbol.symbol-z-order": [],
  "layout_symbol.text-allow-overlap": [],
  "layout_symbol.text-anchor": [],
  "layout_symbol.text-field": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "[{name}]"
          }
        },
      ],
    },
  ],
  "layout_symbol.text-font": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Open Sans Bold"],
            "text-field": "[{name}]"
          }
        },
      ],
    },
  ],
  "layout_symbol.text-ignore-placement": [],
  "layout_symbol.text-justify": [],
  "layout_symbol.text-keep-upright": [],
  "layout_symbol.text-letter-spacing": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}", 
            "text-letter-spacing": 2,
          },
          paint: {}
        },
      ],
    },
  ],
  "layout_symbol.text-line-height": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}\n{name}", 
            "text-line-height": 2,
          },
          paint: {}
        },
      ],
    },
  ],
  "layout_symbol.text-max-angle": [],
  "layout_symbol.text-max-width": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name} {name}", 
            "text-max-width": 1,
          },
          paint: {}
        },
      ],
    },
  ],
  "layout_symbol.text-offset": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}",
          }
        },
        {
          id: "test2",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}",
            "text-offset": [5, 1],
          }
        },
      ],
    },
  ],
  "layout_symbol.text-optional": [],
  "layout_symbol.text-overlap": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "<<<<<name>>>>>\noverlap\noverlap",
            "text-allow-overlap": true,
          }
        },
      ],
    },
  ],
  "layout_symbol.text-padding": [],
  "layout_symbol.text-pitch-alignment": [],
  "layout_symbol.text-radial-offset": [],
  "layout_symbol.text-rotate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}", 
            "text-rotate": 30,
          },
          paint: {}
        },
      ],
    },
  ],
  "layout_symbol.text-rotation-alignment": [],
  "layout_symbol.text-size": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}", 
            "text-size": 30,
          },
          paint: {}
        },
      ],
    },
  ],
  "layout_symbol.text-transform": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}", 
            "text-transform": "uppercase",
          },
          paint: {}
        },
      ],
    },
  ],
  "layout_symbol.text-variable-anchor-offset": [],
  "layout_symbol.text-variable-anchor": [],
  "layout_symbol.text-writing-mode": [],
  "layout_symbol.visibility": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              visibility: "none",
          }
        },
      ],
    },
  ],
  "light.anchor": [],
  "light.color": [],
  "light.intensity": [],
  "light.position": [],
  "paint_background.background-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {},
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "background",
          paint: {
            "background-color": "rgba(255, 0, 0, 1)",
          },
        },
      ],
    },
  ],
  "paint_background.background-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {},
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "background",
          paint: {
            "background-color": "rgba(255, 0, 0, 1)",
            "background-opacity": 0.5,
          },
        },
      ],
    },
  ],
  "paint_background.background-pattern": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {},
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "background",
          paint: {
            "background-color": "rgba(255, 0, 0, 1)",
            "background-pattern": "wetland_bg_11",
          },
        },
      ],
    },
  ],
  "paint_circle.circle-blur": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          paint: {
            "circle-blur": 1.2,
          },
        },
      ],
    },
  ],
  "paint_circle.circle-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          paint: {
            "circle-color": "rgba(255, 0, 0, 1)",
          },
        },
      ],
    },
  ],
  "paint_circle.circle-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          paint: {
            "circle-color": "rgba(255, 0, 0, 1)",
            "circle-opacity": 0.2,
          },
        },
      ],
    },
  ],
  "paint_circle.circle-pitch-alignment": [],
  "paint_circle.circle-pitch-scale": [],
  "paint_circle.circle-radius": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          paint: {
            "circle-radius": 10,
          },
        },
      ],
    },
  ],
  "paint_circle.circle-stroke-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          paint: {
            "circle-color": "rgba(255, 0, 0, 1)",
            "circle-stroke-color": "rgba(0, 0, 255, 1)",
            "circle-stroke-width": 2,
          },
        },
      ],
    },
  ],
  "paint_circle.circle-stroke-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          paint: {
            "circle-color": "rgba(255, 0, 0, 1)",
            "circle-stroke-color": "rgba(0, 0, 255, 1)",
            "circle-stroke-width": 2,
            "circle-stroke-opacity": 0.5,
          },
        },
      ],
    },
  ],
  "paint_circle.circle-stroke-width": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "circle",
          source: "points",
          paint: {
            "circle-color": "rgba(255, 0, 0, 1)",
            "circle-stroke-width": 3,
          },
        },
      ],
    },
  ],
  "paint_circle.circle-translate-anchor": [],
  "paint_circle.circle-translate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points_base: {
          type: "geojson",
          data: PointsGeoJSON,
        },
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "circle",
          source: "points_base",
          paint: {},
        },
        {
          id: "test2",
          type: "circle",
          source: "points",
          paint: {
            "circle-translate": [10, 10],
          },
        },
      ],
    },
  ],
  "paint_fill-extrusion.fill-extrusion-base": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
            "fill-extrusion-base": 100000,
            "fill-extrusion-height": 200000,
          }
        },
      ],
    },
  ],
  "paint_fill-extrusion.fill-extrusion-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
            "fill-extrusion-color": "#0000ff"
          }
        },
      ],
    },
  ],
  "paint_fill-extrusion.fill-extrusion-height": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
            "fill-extrusion-base": 100000,
            "fill-extrusion-height": 200000,
          }
        },
      ],
    },
  ],
  "paint_fill-extrusion.fill-extrusion-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
            "fill-extrusion-opacity": 0.2
          }
        },
      ],
    },
  ],
  "paint_fill-extrusion.fill-extrusion-pattern": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion1",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
            "fill-extrusion-pattern": "wetland_bg_11"
          }
        },
      ],
    },
  ],
  "paint_fill-extrusion.fill-extrusion-translate-anchor": [],
  "paint_fill-extrusion.fill-extrusion-translate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          "id": "fill-extrusion1",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
          }
        },
        {
          "id": "fill-extrusion2",
          "type": "fill-extrusion",
          "source": "polygons",
          "paint": {
            "fill-extrusion-translate": [20, 20]
          }
        },
      ],
    },
  ],
  "paint_fill-extrusion.fill-extrusion-vertical-gradient": [],
  "paint_fill.fill-antialias": [],
  "paint_fill.fill-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "fill",
          source: "polygons",
          paint: {
            "fill-color": "rgba(255, 0, 0, 1)",
          },
        },
      ],
    },
  ],
  "paint_fill.fill-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "fill",
          source: "polygons",
          paint: {
            "fill-color": "rgba(255, 0, 0, 1)",
            "fill-opacity": 0.2,
          },
        },
      ],
    },
  ],
  "paint_fill.fill-outline-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "fill",
          source: "polygons",
          paint: {
            "fill-outline-color": "rgba(255, 0, 0, 1)",
          },
        },
      ],
    },
  ],
  "paint_fill.fill-pattern": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "fill",
          source: "polygons",
          paint: {
            "fill-pattern": "wetland_bg_11",
          },
        },
      ],
    },
  ],
  "paint_fill.fill-translate-anchor": [],
  "paint_fill.fill-translate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        polygons: {
          type: "geojson",
          data: PolygonGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "fill",
          source: "polygons",
          paint: {},
        },
        {
          id: "test2",
          type: "fill",
          source: "polygons",
          paint: {
            "fill-translate": [10, 10],
          },
        },
      ],
    },
  ],
  "paint_heatmap.heatmap-color": [
    // {
    //   version: 8,
    //   name: "test",
    //   sources: {
    //     points: {
    //       type: "geojson",
    //       data: PointsGeoJSON,
    //     },
    //   },
    //   sprite: "",
    //   glyphs:
    //     "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
    //   layers: [
    //     {
    //       id: "test",
    //       type: "heatmap",
    //       source: "points",
    //       paint: {
    //         "heatmap-color": ["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",0.5,"rgba(0, 0, 255, 1)",1,"rgba(255, 0, 0, 1)"]
    //       },
    //     },
    //   ],
    // },
  ],
  "paint_heatmap.heatmap-intensity": [],
  "paint_heatmap.heatmap-opacity": [],
  "paint_heatmap.heatmap-radius": [],
  "paint_heatmap.heatmap-weight": [],
  "paint_hillshade.hillshade-accent-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        terrarium: TerrariumSource,
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'hillshade',
          type: 'hillshade',
          source: 'terrarium',
          paint: {
            'hillshade-accent-color': '#ff0000',
          },
        },
      ],
    },
  ],
  "paint_hillshade.hillshade-exaggeration": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        terrarium: TerrariumSource,
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'hillshade',
          type: 'hillshade',
          source: 'terrarium',
          paint: {
            'hillshade-exaggeration': 1,
          },
        },
      ],
    },
  ],
  "paint_hillshade.hillshade-highlight-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        terrarium: TerrariumSource,
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'hillshade',
          type: 'hillshade',
          source: 'terrarium',
          paint: {
            'hillshade-highlight-color': '#ff0000',
          },
        },
      ],
    },
  ],
  "paint_hillshade.hillshade-illumination-anchor": [],
  "paint_hillshade.hillshade-illumination-direction": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        terrarium: TerrariumSource,
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'hillshade',
          type: 'hillshade',
          source: 'terrarium',
          paint: {
            'hillshade-illumination-direction': 180,
          },
        },
      ],
    },
  ],
  "paint_hillshade.hillshade-shadow-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        terrarium: TerrariumSource,
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: 'hillshade',
          type: 'hillshade',
          source: 'terrarium',
          paint: {
            'hillshade-shadow-color': '#ff0000',
          },
        },
      ],
    },
  ],
  "paint_line.line-blur": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "points",
          layout: {},
          paint: {  
            "line-width": 4,
            "line-blur": 2
          }
        },
      ],
    },
  ],
  "paint_line.line-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "points",
          layout: {},
          paint: {
            "line-color": "rgba(255, 0, 0, 1)"
          }
        },
      ],
    },
  ],
  "paint_line.line-dasharray": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        lines: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "lines",
          layout: {},
          paint: {
            "line-dasharray": [4, 5, 4],
          }
        },
      ],
    },
  ],
  "paint_line.line-gap-width": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        lines: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "lines",
          layout: {},
          paint: {
            "line-gap-width": 3,
          }
        },
      ],
    },
  ],
  "paint_line.line-gradient": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        lines: {
          type: "geojson",
          data: LineGeoJSON,
          lineMetrics: true,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "lines",
          layout: {},
          paint: {
            "line-gradient": [
              "interpolate",
              [
                "linear"
              ],
              [
                "line-progress"
              ],
              0,
              "blue",
              0.1,
              "royalblue",
              0.3,
              "cyan",
              0.5,
              "lime",
              0.7,
              "yellow",
              1,
              "red"
            ],
          }
        },
      ],
    },
  ],
  "paint_line.line-offset": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "line",
          source: "points",
          layout: {},
          paint: {}
        },
        {
          id: "test2",
          type: "line",
          source: "points",
          layout: {},
          paint: {
            "line-offset": 10,
          }
        },
      ],
    },
  ],
  "paint_line.line-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "points",
          layout: {},
          paint: {  
            "line-opacity": 0.2,
          }
        },
      ],
    },
  ],
  "paint_line.line-pattern": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "points",
          layout: {},
          paint: {  
            "line-width": 20,
            "line-pattern": "wetland_bg_11",
          }
        },
      ],
    },
  ],
  "paint_line.line-translate-anchor": [],
  "paint_line.line-translate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "line",
          source: "points",
          layout: {},
          paint: {  }
        },
        {
          id: "test2",
          type: "line",
          source: "points",
          layout: {},
          paint: {  
            "line-translate": [10, 10],
          }
        },
      ],
    },
  ],
  "paint_line.line-width": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: LineGeoJSON,
        },
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "line",
          source: "points",
          layout: {},
          paint: {
            "line-width": 20,
          }
        },
      ],
    },
  ],
  "paint_raster.raster-brightness-max": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
          paint: {
            "raster-brightness-max": 0.4,
          }
        },
      ],
    },
  ],
  "paint_raster.raster-brightness-min": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
          paint: {
            "raster-brightness-min": 0.4,
          }
        },
      ],
    },
  ],
  "paint_raster.raster-contrast": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
          paint: {
            "raster-contrast": -0.6,
          }
        },
      ],
    },
  ],
  "paint_raster.raster-fade-duration": [],
  "paint_raster.raster-hue-rotate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
          paint: {
            "raster-hue-rotate": 90,
          }
        },
      ],
    },
  ],
  "paint_raster.raster-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
          paint: {
            "raster-opacity": 0.4,
          }
        },
      ],
    },
  ],
  "paint_raster.raster-resampling": [],
  "paint_raster.raster-saturation": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        'test': {
          'type': 'raster',
          'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          'tileSize': 256,
          'attribution':
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
      },
      sprite: "",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "raster",
          source: "test",
          paint: {
            "raster-saturation": -0.8,
          }
        },
      ],
    },
  ],
  "paint_symbol.icon-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic",
        getImageOpenLayers: () => {
          return generateSdfOpenLayers();
        },
        setupMapLibre: (map) => {
          map.addImage(
            "foo",
            generateSdfMapLibre(),
            {sdf: true}
          )
        }
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "foo",
          },
          paint: {
              "icon-color": "#ff0000",
          }
        },
      ],
    },
  ],
  "paint_symbol.icon-halo-blur": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic",
        getImageOpenLayers: () => {
          return generateSdfOpenLayers();
        },
        setupMapLibre: (map) => {
          map.addImage(
            "foo",
            generateSdfMapLibre(),
            {sdf: true}
          )
        }
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "foo",
          },
          paint: {
              "icon-color": "#ff0000",
              "icon-halo-blur": 10,
              "icon-halo-color": "#0000ff",
              "icon-halo-width": 10,
          }
        },
      ],
    },
  ],
  "paint_symbol.icon-halo-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic",
        getImageOpenLayers: () => {
          return generateSdfOpenLayers();
        },
        setupMapLibre: (map) => {
          map.addImage(
            "foo",
            generateSdfMapLibre(),
            {sdf: true}
          )
        }
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "foo",
          },
          paint: {
              "icon-color": "#ff0000",
              "icon-halo-width": 9,
              "icon-halo-color": "#0000ff",
          }
        },
      ],
    },
  ],
  "paint_symbol.icon-halo-width": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic",
        getImageOpenLayers: () => {
          return generateSdfOpenLayers();
        },
        setupMapLibre: (map) => {
          map.addImage(
            "foo",
            generateSdfMapLibre(),
            {sdf: true}
          )
        }
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "foo",
          },
          paint: {
              "icon-color": "#ff0000",
              "icon-halo-width": 10,
              "icon-halo-color": "#0000ff",
          }
        },
      ],
    },
  ],
  "paint_symbol.icon-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
              "icon-image": "wetland_bg_11",
          },
          paint: {
              "icon-opacity": 0.8,
          }
        },
      ],
    },
  ],
  "paint_symbol.icon-translate-anchor": [],
  "paint_symbol.icon-translate": [],
  "paint_symbol.text-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}" 
          },
          paint: {
            "text-color": "hotpink",
          }
        },
      ],
    },
  ],
  "paint_symbol.text-halo-blur": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}" 
          },
          paint: {
            "text-halo-width": 1,
            "text-halo-color": "red",
            "text-halo-blur": 0.8,
          }
        },
      ],
    },
  ],
  "paint_symbol.text-halo-color": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}" 
          },
          paint: {
            "text-halo-width": 2,
            "text-halo-color": "red",
          }
        },
      ],
    },
  ],
  "paint_symbol.text-halo-width": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}" 
          },
          paint: {
            "text-halo-width": 10,
            "text-halo-color": "red",
          }
        },
      ],
    },
  ],
  "paint_symbol.text-opacity": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}" 
          },
          paint: {
            "text-opacity": 0.3,
          }
        },
      ],
    },
  ],
  "paint_symbol.text-translate-anchor": [],
  "paint_symbol.text-translate": [
    {
      version: 8,
      name: "test",
      metadata: {
        description: "basic"
      },
      sources: {
        points: {
          type: "geojson",
          data: PointsGeoJSON,
        },
      },
      sprite: "https://maputnik.github.io/osm-liberty/sprites/osm-liberty",
      glyphs:
        "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
      layers: [
        {
          id: "test1",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}" 
          },
          paint: {}
        },
        {
          id: "test2",
          type: "symbol",
          source: "points",
          layout: {
            "text-font": ["Roboto Regular"],
            "text-field": "{name}" 
          },
          paint: {
            "text-translate": [20, 20],
          }
        },
      ],
    },
  ],
  "source_raster_dem.baseShift": [],
  "source_raster_dem.blueFactor": [],
  "source_raster_dem.greenFactor": [],
  "source_raster_dem.redFactor": [],
  "terrain.exaggeration": [],
  "terrain.source": [],
};

export default testStyles;