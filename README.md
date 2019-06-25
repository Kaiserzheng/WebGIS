# Cordova+WebGIS
[Cordova](https://cordova.apache.org/#getstarted) [NodeJS](https://nodejs.org/en/) [VueJS](https://cn.vuejs.org/)
开发环境: Node NPM Yarn VSCode
## 1. Cordova
#### 1.1 安装
`npm install -g cordova`

``` shell
cordova create pack
cd pack
cordova platform add browser --save #增加browser平台
cordova build browser #编译/运行browser平台
cordova run browser #运行编译好的App
```

## 2. WebGIS
#### 2.1 安装
**安装Vue-cli**
`yarn global add @vue/cli-init`
**初始化webgis工程**
`vue init webpack webgis `

**调试运行**
```
cd webgis
cnpm i
npm run dev
```
**模块依赖(List)**
``` js
1. element-ui;
2. material-design-icons-iconfont;
3. iview;
4. ol;
5. vuetify;
6. leaflet;
7. mapbox;
8. cesium;

```


#### 2.2 配置打包路径
需要修改 Vue 项目的打包配置文件：
1. config - index.js
``` js
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../../pack/www/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../pack/www'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
```
2. build - utils.js
``` js
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        publicPath: '../',
        fallback: 'vue-style-loader'
      })
    } 
```

## 3. 添加编译打包脚本
``` shell
touch build.sh
vim build.sh
    cd webgis
    npm run build
    cd ../pack
    cordova build ios
    echo ios build ok!
    cordova build browser
    echo browser build ok!
    ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ cordova build electron --release
    echo electron build ok!
    cordova run ios
:wq
chmod +x build.sh 
```