<template>
  <div id="map" class="map"></div>
</template>

<script>
// openlayer
import 'ol/ol.css';
import Map from "ol/Map.js";
import {osmLayer,ggSatLayer,ggSateLayer,labelLayer} from "@/components/map/layer/TileLayer.js"
import { transform, get } from "ol/proj.js";
import { boundingExtent } from "ol/extent";
import { format } from "ol/coordinate.js"
import View from "ol/View.js";
import {
  defaults as defaultControls,
  FullScreen,
  Attribution,
  Zoom,
  ScaleLine,
  ZoomSlider,
  MousePosition
} from "ol/control.js";
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from "ol/interaction.js";

export default {
  name: "WebGIS",
  data() {
    return {
      msg: "Welcome to WebGIS App"
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //初始化
    init() {
      let defaultView = new View({
        projection: "EPSG:3857",
        extent: get("EPSG:3857").getExtent(),
        center: transform([116.35, 39.9], "EPSG:4326", "EPSG:3857"), //110.338041,25.12058 116.35,39.9
        zoom: 4,
        minZoom: 2
      });
      let map = new Map({
        controls: defaultControls().extend([
          new FullScreen(),
          new Attribution(),
          new ScaleLine(),
          new Zoom(),
          new ZoomSlider(),
          new MousePosition({
          undefinedHTML: 'outside',
          projection: 'EPSG:4326', 
          coordinateFormat: function(coordinate) {
              return format(coordinate, '{x}, {y}', 4); 
              }              
        })
        ]),
        interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
        target: "map",
        loadTilesWhileAnimating: true, //允许在动画中加载瓦片
        // pixelRatio: 1,
        layers: [ggSatLayer,labelLayer],
        view: defaultView
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* position the rotate control lower than usual */
.ol-rotate {
  top: 3em;
}
.ol-mouse-position{
  right: 40px;
  color: white;
}
</style>
