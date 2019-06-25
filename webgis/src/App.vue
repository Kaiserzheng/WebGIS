<template>
  <div id="app" style=" height:100%;">
    <!-- <img src="./assets/logo.png"> -->
    <el-container style="height:100%;">
      <el-aside width="auto" height="100%">
        <!-- 左侧导航栏 -->
        <el-menu
          background-color="#1d3146"
          text-color="white"
          active-text-color="#efffff"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          default-active="1"
          style="height:100%;width:55px;border-color:#1d3146"
          id="sideMenu"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="material-icons" style="margin-left:-4px">map</i>
              <span slot="title">基础地图</span>
            </template>
            <el-menu-item-group>
              <span slot="title">基础地图</span>
              <el-menu-item @click="toMap" index="1-1">openlayer</el-menu-item>
              <el-menu-item @click="toMapbox" index="1-2">mapbox</el-menu-item>
              <el-menu-item @click="toLeaflet" index="1-3">leaflet</el-menu-item>
              <el-menu-item @click="toCesium" index="1-3">cesium</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item @click="toMap" index="1"> -->
            <!-- <v-icon style="margin-left:-6px" title="地图">map</v-icon> -->
            <!-- <Icon style="margin-left:-4px" type="md-map" size="25"/> -->
            <!-- <i class="material-icons" style="margin-left:-4px">map</i>
            <span slot="title">地图</span>
          </el-menu-item> -->
          <el-menu-item index="2">
            <i class="material-icons" style="margin-left:-4px">event</i>
            <span slot="title">计划</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="material-icons" style="margin-left:-4px">cloud</i>
            <span slot="title">气象</span>
          </el-menu-item>
          <el-menu-item @click="toTest" index="4">
            <i class="material-icons" style="margin-left:-4px">apps</i>
            <span slot="title">Test</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="padding: 0px;">
        <keep-alive>
          <router-view style="height:100%"></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      isCollapse: true
    };
  },
  methods: {
    toMap() {
      this.$router.push("/");
    },
    toMapbox() {
      this.$router.push("/mapbox");
    },
    toLeaflet() {
      this.$router.push("/leaflet");
    },
    toCesium() {
      this.$router.push("/cesium");
    },    
    toTest() {
      this.$router.push("/test");
    }
  }
};
</script>

<style>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 120px;
  min-height: 400px;
} */
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
