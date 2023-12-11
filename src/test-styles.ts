import { StyleSpecification } from "maplibre-gl";
import { FeatureCollection } from "geojson";

const PointsGeoJSON: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-1, 0],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, -1],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0, 0.5],
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

const testStyles: Record<string, StyleSpecification[]> = {
  "expression_name.values.-": [],
  "expression_name.values.!": [],
  "expression_name.values.!=": [],
  "expression_name.values.*": [],
  "expression_name.values./": [],
  "expression_name.values.%": [],
  "expression_name.values.^": [],
  "expression_name.values.+": [],
  "expression_name.values.<": [],
  "expression_name.values.<=": [],
  "expression_name.values.==": [],
  "expression_name.values.>": [],
  "expression_name.values.>=": [],
  "expression_name.values.abs": [],
  "expression_name.values.accumulated": [],
  "expression_name.values.acos": [],
  "expression_name.values.all": [],
  "expression_name.values.any": [],
  "expression_name.values.array": [],
  "expression_name.values.asin": [],
  "expression_name.values.at": [],
  "expression_name.values.atan": [],
  "expression_name.values.boolean": [],
  "expression_name.values.case": [],
  "expression_name.values.ceil": [],
  "expression_name.values.coalesce": [],
  "expression_name.values.collator": [],
  "expression_name.values.concat": [],
  "expression_name.values.cos": [],
  "expression_name.values.downcase": [],
  "expression_name.values.e": [],
  "expression_name.values.feature-state": [],
  "expression_name.values.floor": [],
  "expression_name.values.format": [],
  "expression_name.values.geometry-type": [],
  "expression_name.values.get": [],
  "expression_name.values.has": [],
  "expression_name.values.heatmap-density": [],
  "expression_name.values.id": [],
  "expression_name.values.image": [],
  "expression_name.values.in": [],
  "expression_name.values.index-of": [],
  "expression_name.values.interpolate-hcl": [],
  "expression_name.values.interpolate-lab": [],
  "expression_name.values.interpolate": [],
  "expression_name.values.is-supported-script": [],
  "expression_name.values.length": [],
  "expression_name.values.let": [],
  "expression_name.values.line-progress": [],
  "expression_name.values.literal": [],
  "expression_name.values.ln": [],
  "expression_name.values.ln2": [],
  "expression_name.values.log10": [],
  "expression_name.values.log2": [],
  "expression_name.values.match": [],
  "expression_name.values.max": [],
  "expression_name.values.min": [],
  "expression_name.values.number-format": [],
  "expression_name.values.number": [],
  "expression_name.values.object": [],
  "expression_name.values.pi": [],
  "expression_name.values.properties": [],
  "expression_name.values.resolved-locale": [],
  "expression_name.values.rgb": [],
  "expression_name.values.rgba": [],
  "expression_name.values.round": [],
  "expression_name.values.sin": [],
  "expression_name.values.slice": [],
  "expression_name.values.sqrt": [],
  "expression_name.values.step": [],
  "expression_name.values.string": [],
  "expression_name.values.tan": [],
  "expression_name.values.to-boolean": [],
  "expression_name.values.to-color": [],
  "expression_name.values.to-number": [],
  "expression_name.values.to-rgba": [],
  "expression_name.values.to-string": [],
  "expression_name.values.typeof": [],
  "expression_name.values.upcase": [],
  "expression_name.values.var": [],
  "expression_name.values.within": [],
  "expression_name.values.zoom": [],
  "layer.type.values.background": [],
  "layer.type.values.circle": [],
  "layer.type.values.fill-extrusion": [],
  "layer.type.values.fill": [],
  "layer.type.values.heatmap": [],
  "layer.type.values.hillshade": [],
  "layer.type.values.line": [],
  "layer.type.values.raster": [],
  "layer.type.values.symbol": [],
  "layout_background.visibility": [],
  "layout_circle.circle-sort-key": [],
  "layout_circle.visibility": [
    {
        version: 8,
        name: "test",
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
  "layout_fill-extrusion.visibility": [],
  "layout_fill.fill-sort-key": [],
  "layout_fill.visibility": [],
  "layout_heatmap.visibility": [],
  "layout_hillshade.visibility": [],
  "layout_line.line-cap": [],
  "layout_line.line-join": [],
  "layout_line.line-miter-limit": [],
  "layout_line.line-round-limit": [],
  "layout_line.line-sort-key": [],
  "layout_line.visibility": [],
  "layout_raster.visibility": [],
  "layout_symbol.icon-allow-overlap": [],
  "layout_symbol.icon-anchor": [],
  "layout_symbol.icon-ignore-placement": [],
  "layout_symbol.icon-image": [],
  "layout_symbol.icon-keep-upright": [],
  "layout_symbol.icon-offset": [],
  "layout_symbol.icon-optional": [],
  "layout_symbol.icon-overlap": [],
  "layout_symbol.icon-padding": [],
  "layout_symbol.icon-pitch-alignment": [],
  "layout_symbol.icon-rotate": [],
  "layout_symbol.icon-rotation-alignment": [],
  "layout_symbol.icon-size": [],
  "layout_symbol.icon-text-fit-padding": [],
  "layout_symbol.icon-text-fit": [],
  "layout_symbol.symbol-avoid-edges": [],
  "layout_symbol.symbol-placement": [],
  "layout_symbol.symbol-sort-key": [],
  "layout_symbol.symbol-spacing": [],
  "layout_symbol.symbol-z-order": [],
  "layout_symbol.text-allow-overlap": [],
  "layout_symbol.text-anchor": [],
  "layout_symbol.text-field": [],
  "layout_symbol.text-font": [],
  "layout_symbol.text-ignore-placement": [],
  "layout_symbol.text-justify": [],
  "layout_symbol.text-keep-upright": [],
  "layout_symbol.text-letter-spacing": [],
  "layout_symbol.text-line-height": [],
  "layout_symbol.text-max-angle": [],
  "layout_symbol.text-max-width": [],
  "layout_symbol.text-offset": [],
  "layout_symbol.text-optional": [],
  "layout_symbol.text-overlap": [],
  "layout_symbol.text-padding": [],
  "layout_symbol.text-pitch-alignment": [],
  "layout_symbol.text-radial-offset": [],
  "layout_symbol.text-rotate": [],
  "layout_symbol.text-rotation-alignment": [],
  "layout_symbol.text-size": [],
  "layout_symbol.text-transform": [],
  "layout_symbol.text-variable-anchor-offset": [],
  "layout_symbol.text-variable-anchor": [],
  "layout_symbol.text-writing-mode": [],
  "layout_symbol.visibility": [],
  "light.anchor": [],
  "light.color": [],
  "light.intensity": [],
  "light.position": [],
  "paint_background.background-color": [
    {
      version: 8,
      name: "test",
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
  "paint_fill-extrusion.fill-extrusion-base": [],
  "paint_fill-extrusion.fill-extrusion-color": [],
  "paint_fill-extrusion.fill-extrusion-height": [],
  "paint_fill-extrusion.fill-extrusion-opacity": [],
  "paint_fill-extrusion.fill-extrusion-pattern": [],
  "paint_fill-extrusion.fill-extrusion-translate-anchor": [],
  "paint_fill-extrusion.fill-extrusion-translate": [],
  "paint_fill-extrusion.fill-extrusion-vertical-gradient": [],
  "paint_fill.fill-antialias": [],
  "paint_fill.fill-color": [
    {
      version: 8,
      name: "test",
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
            "fill-outline-color": "rgba(0, 0, 255, 1)",
          },
        },
      ],
    },
  ],
  "paint_fill.fill-pattern": [
    {
      version: 8,
      name: "test",
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
  "paint_heatmap.heatmap-color": [],
  "paint_heatmap.heatmap-intensity": [],
  "paint_heatmap.heatmap-opacity": [],
  "paint_heatmap.heatmap-radius": [],
  "paint_heatmap.heatmap-weight": [],
  "paint_hillshade.hillshade-accent-color": [],
  "paint_hillshade.hillshade-exaggeration": [],
  "paint_hillshade.hillshade-highlight-color": [],
  "paint_hillshade.hillshade-illumination-anchor": [],
  "paint_hillshade.hillshade-illumination-direction": [],
  "paint_hillshade.hillshade-shadow-color": [],
  "paint_line.line-blur": [],
  "paint_line.line-color": [],
  "paint_line.line-dasharray": [],
  "paint_line.line-gap-width": [],
  "paint_line.line-gradient": [],
  "paint_line.line-offset": [],
  "paint_line.line-opacity": [],
  "paint_line.line-pattern": [],
  "paint_line.line-translate-anchor": [],
  "paint_line.line-translate": [],
  "paint_line.line-width": [],
  "paint_raster.raster-brightness-max": [],
  "paint_raster.raster-brightness-min": [],
  "paint_raster.raster-contrast": [],
  "paint_raster.raster-fade-duration": [],
  "paint_raster.raster-hue-rotate": [],
  "paint_raster.raster-opacity": [],
  "paint_raster.raster-resampling": [],
  "paint_raster.raster-saturation": [],
  "paint_symbol.icon-color": [],
  "paint_symbol.icon-halo-blur": [],
  "paint_symbol.icon-halo-color": [],
  "paint_symbol.icon-halo-width": [],
  "paint_symbol.icon-opacity": [],
  "paint_symbol.icon-translate-anchor": [],
  "paint_symbol.icon-translate": [],
  "paint_symbol.text-color": [],
  "paint_symbol.text-halo-blur": [],
  "paint_symbol.text-halo-color": [],
  "paint_symbol.text-halo-width": [],
  "paint_symbol.text-opacity": [],
  "paint_symbol.text-translate-anchor": [],
  "paint_symbol.text-translate": [],
  "source_raster_dem.baseShift": [],
  "source_raster_dem.blueFactor": [],
  "source_raster_dem.greenFactor": [],
  "source_raster_dem.redFactor": [],
  "terrain.exaggeration": [],
  "terrain.source": [],
};

export default testStyles;