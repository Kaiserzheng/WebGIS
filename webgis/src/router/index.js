import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/test/HelloWorld'
import Mapbox from '@/components/map/mapbox/Mapbox'
import Leaflet from '@/components/map/leaflet/Leaflet'
import Cesium from '@/components/map/cesium/Cesium'
import Map from '@/components/Map'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/test',
      name: 'test',
      component: HelloWorld
    },
    {
      path: '/mapbox',
      name: 'mapbox',
      component: Mapbox
    },
    {
      path: '/leaflet',
      name: 'leaflet',
      component: Leaflet
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: Cesium
    }
  ]
})
