<template>
  <div id="cesiumContainer" class="map"></div>
</template>

<script>
// // cesium
// import Cesium from 'cesium/Cesium'
// import widgets from 'cesium/Widgets/widgets.css'

export default {
  name: "CesiumMap",
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
      var googleSatLayer = new Cesium.UrlTemplateImageryProvider({
          url : 'http://mt1.google.cn/vt/lyrs=y&x={x}&y={y}&z={z}',
          format: "image/png",
          // ellipsoid: "ESPG:3857"
      });
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA';
      var viewer = new Cesium.Viewer('cesiumContainer',{
          imageryProvider :  googleSatLayer,
          // homeButton: false, //是否显示home控件
          animation: false,  //是否显示动画控件
          // baseLayerPicker : false,//是否显示图层选择控件
          // geocoder: true, //是否显示地名查找控件
          timeline: false, //是否显示时间线控件
          // sceneModePicker: false,//是否显示投影方式控件
          navigationHelpButton: false,//是否显示帮助信息控件
          infoBox: false,  //是否显示点击要素之后显示的信息
          // selectionIndicator: false,
      });
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(116.35, 39.9, 5000000), 
        orientation: {  
          heading : Cesium.Math.toRadians(0),  
          pitch : Cesium.Math.toRadians(-90),  
          roll : Cesium.Math.toRadians(0)                            
        }   
      })
      // viewer._cesiumWidget._creditContainer.style.display="none";
      // viewer.scene.skyBox.show = false;
      // viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
      // viewer._cesiumWidget._supportsImageRenderingPixelated = Cesium.FeatureDetection.supportsImageRenderingPixelated();
      // viewer._cesiumWidget._forceResize = true;
      // if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
      //   var vtxf_dpr = window.devicePixelRatio;
      //   // 适度降低分辨率
      //   while (vtxf_dpr >= 2.0) {
      //       vtxf_dpr /= 2.0;
      //   }
      //   //alert(dpr);
      //   viewer.resolutionScale = vtxf_dpr;
      // };
    },

  }
};
</script>

<style scoped>
</style>