<template>
  <div>
    <div ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>
<script>
// Mapbox
// import mapboxgl from "mapbox-gl";
// import MapboxLanguage  from '@mapbox/mapbox-gl-language';
// import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  name: 'MapboxMap',
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYW56aGlodW4iLCJhIjoiY2lsdnhjdjN5MDFvMHVia3NpYTlnbmUzaSJ9.twlExCjpR7uwH2IiFC7aDA";
// 英文标注转换为中文   
//    mapboxgl.setRTLTextPlugin(
//         "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js"
//       );
      const map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: "mapbox://styles/mapbox/satellite-streets-v10",
        center: [116.35, 39.9],
        zoom: 3 
      });
      // 设置语言
      var language = new MapboxLanguage({ defaultLanguage: "zh" });
      map.addControl(language);

      // 地图导航
      var nav = new mapboxgl.NavigationControl();
      map.addControl(nav, "top-left");
      // 比例尺
      var scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: "imperial"
      });
      map.addControl(scale);
      scale.setUnit("metric");
      // 全图
      map.addControl(new mapboxgl.FullscreenControl());
      // 定位
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );
    }
  },
  computed: {
    mapSize() {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      };
      return styleObj;
    }
  }
};
</script>
<style>
/* @import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"); */
/* @import 'mapbox-gl/dist/mapbox-gl.css'; */
.mapboxgl-map {
  height: 100%;
  width: 100%;
}
.mapboxgl-ctrl-top-left{
    /* padding-left: 55px */
}
.mapboxgl-ctrl-bottom-left{
    /* padding-left: 55px; */
    bottom:-3em
}
a.mapboxgl-ctrl-logo {
    display: inline;
}
</style>
