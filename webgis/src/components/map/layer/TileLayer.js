// openlayer
import Overlay from "ol/Overlay.js";
import OSM from "ol/source/OSM.js";
import XYZ from "ol/source/XYZ.js";
import TileWMS from "ol/source/TileWMS.js";
import TileLayer from "ol/layer/Tile.js";

let osmLayer = new TileLayer({
  source: new OSM({
    attributions: 'Powered by <a href="http://www.google.com/">Google</a>'
  })
});
//google_sate
let ggSateLayer = new TileLayer({
  source: new XYZ({
    attributions: 'Powered by <a href="http://www.google.com/">Google</a>',
    // 影像图地址
    url: "http://mt1.google.cn/vt/lyrs=y&x={x}&y={y}&z={z}",
    tileSize: 256
  })
});
//  智图 行政区划 geoq.cn
let labelLayer = new TileLayer({
  source: new XYZ({
    attributions: 'Powered by <a href="http://www.google.com/">Google</a>',
    // 影像图地址
    url: "http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/administrative_division_boundaryandlabel/MapServer/tile/{z}/{y}/{x}",
    tileSize: 256
  })
});
//google_terrain
let ggTerLayer = new TileLayer({
  source: new XYZ({
    attributions: 'Powered by <a href="http://www.google.com/">Google</a>',
    // 影像图地址
    url: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
    tileSize: 256
  })
});
//google_sat
let ggSatLayer = new TileLayer({
  source: new XYZ({
    attributions: 'Powered by <a href="http://www.google.com/">Google</a>',
    // 影像图地址
    // url: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
    url: "http://mt1.google.cn/vt/lyrs=s&scale=2&x={x}&y={y}&z={z}",
    // url: "http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i380072576!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0",
    tileSize: 256
  })
});
//tdtLayer
let tdtLayer = new TileLayer({
  source: new XYZ({
    attributions: 'Powered by <a href="http://www.tianditu.gov.cn/">tianditu</a>',
    // 影像图地址
    url: "http://t3.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=9d5fe05c502de2b854c2a8210bc5bcd8",
    tileSize: 256
  })
});
//thinkGeo
let thinkgeoLayer = new TileLayer({
  source: new XYZ({
    attributions: 'Powered by <a href="http://www.tianditu.gov.cn/">tianditu</a>',
    // 影像图地址
    url: "https://cloud.thinkgeo.com/api/v1/maps/raster/transparent-background/x1/3857/512/{z}/{x}/{y}.png?apiKey=WPLmkj3P39OPectosnM1jRgDixwlti71l8KYxyfP2P0~",
    // url: "http://t3.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=9d5fe05c502de2b854c2a8210bc5bcd8",
    tileSize: 256
  })
});

//mapboxLayer
let mapboxLayer = new TileLayer({
  source: new XYZ({
    attributions: 'Powered by <a href="http://www.mapbox.com/">Mapbox</a>',
    // 影像图地址
    url: 'https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGV3aW54dSIsImEiOiJjamVwYjFuOGIwamlwMnhsdHViczZ6NHA2In0.QCXOBwb8aGG3E5s4vO-PnA',
    tileSize: 256
  })
});
export {
  osmLayer,
  ggSatLayer,
  ggSateLayer,
  tdtLayer,
  mapboxLayer,
  thinkgeoLayer,
  labelLayer
}
