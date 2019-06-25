<template>
  <div id="lmap" class="lmap"></div>
</template>

<script>
// leaflet
// import * as L from "leaflet";
// import { Icon }  from 'leaflet'
// import "leaflet/dist/leaflet.css";
// // this part resolve an issue where the markers would not appear
// delete Icon.Default.prototype._getIconUrl;
// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

export default {
  name: "LeafletMap",
  data() {
    return {
      // text: 'this is a text'
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let BJ = L.marker([39.830660058696104, 116.92866163503169]).bindPopup("北京市"),
          HZ = L.marker([30.28, 120.15]).bindPopup("杭州市"),
          CD = L.marker([30.4, 104.04]).bindPopup("成都市");
      let cities = L.layerGroup([BJ, HZ]);
      let mblayer = L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          maxZoom: 18,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: "mapbox.streets-satellite"
        }
      );
      let osmlayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      });
      let baseMaps = {
        "mapbox": mblayer,
        "osm": osmlayer
      };
      let overlayMaps = {
        Cities: cities
      };
      let lmap = L.map("lmap", {
        center: [39.9, 116.35],
        maxZoom: 18,
        zoom: 4,
        zoomControl: true,
        attributionControl: true,
        layers: [mblayer, cities]
      });
      L.control.layers(baseMaps, overlayMaps).addTo(lmap);
      // L.control.minimap(mblayer, {mapOptions: {logoControl: false}, toggleDisplay: true}).addTo(lmap);
      // L.control.attribution({ position: 'bottomright', prefix: '你想要的内容' }).addTo(lmap  );
      L.control.scale({maxWidth:100,metric:true,imperial:false}).addTo(lmap);
    },

  }
};
</script>

<style scoped>
</style>