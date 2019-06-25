## 更新记录
### mapbox style
``` vue 
  mapbox://styles/mapbox/streets-v10
  mapbox://styles/mapbox/outdoors-v10
  mapbox://styles/mapbox/light-v9
  mapbox://styles/mapbox/dark-v9
  mapbox://styles/mapbox/satellite-v9
  mapbox://styles/mapbox/satellite-streets-v10
  mapbox://styles/mapbox/navigation-preview-day-v2
  mapbox://styles/mapbox/navigation-preview-night-v2
  mapbox://styles/mapbox/navigation-guidance-day-v2
  mapbox://styles/mapbox/navigation-guidance-night-v2
```

### 集成Cesium
webpack配置
1. build/webpack.base.conf.js
``` js
//定义cesium源代码位置
const cesiumSource = '../node_modules/cesium/Source'
...
module.exports = {
...
output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    // Needed to compile multiline strings in Cesium
    sourcePrefix: ''
  },
amd:{
    // Enable webpack-friendly use of require in Cesium
    toUrlUndefined: true
  },
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      //设置cesium的别名
      'cesium': path.resolve(__dirname, cesiumSource)
    }
  },
module: {
    rules: [
      ...
    ],
    //不让Webpack打印载入特定库时候的警告
    unknownContextCritical: false
  },
...
}
```
2. build/webpack.dev.conf.js
``` js
//定义 Cesium 源代码路径，前面没有../
const cesiumSource = 'node_modules/cesium/Source'
//定义 Cesium Workers 路径
const cesiumWorkers = '../Build/Cesium/Workers'
...
plugins: [
    ...
    new CopyWebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
    new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets' } ]),
    new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' } ]),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify('')
    })
    ...
  ]
```
3. build/webpack.prod.conf.js
``` js
//定义 Cesium 源代码路径，前面没有../
const cesiumSource = 'node_modules/cesium/Source'
//定义 Cesium Workers 路径
const cesiumWorkers = '../Build/Cesium/Workers'
...
plugins: [
    ...
    new CopyWebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
    new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets' } ]),
    new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' } ]),
    new webpack.DefinePlugin({
      //定义 Cesium 从哪里加载资源，如果使用默认的''，却变成了绝对路径了，所以这里使用'./',使用相对路径
      CESIUM_BASE_URL: JSON.stringify('./')
    })
    ...
  ]
```

###
#### cesium + leaflet + mapbox + ol
``` bash
Hash: 53e7d2b435b762581a87
Version: webpack 3.12.0
Time: 42745ms
                                           Asset       Size  Chunks                    Chunk Names
         fonts/MaterialIcons-Regular.da4ea5c.ttf     174 kB          [emitted]         
        fonts/MaterialIcons-Regular.29b882f.woff    79.6 kB          [emitted]         
       fonts/MaterialIcons-Regular.0509ab0.woff2    60.8 kB          [emitted]         
         fonts/MaterialIcons-Regular.96c4768.eot    69.2 kB          [emitted]         
                fonts/element-icons.535877f.woff    28.2 kB          [emitted]         
                 fonts/element-icons.732389d.ttf      56 kB          [emitted]         
               js/vendor.c3109e1668e3c4b95e1f.js    1.93 MB       0  [emitted]  [big]  vendor
                  js/app.2ad171a83e96d367d03a.js    17.4 kB       1  [emitted]         app
             js/manifest.5abe310ef2fafcf81b83.js  856 bytes       2  [emitted]         manifest
    css/app.a00db4dcd89916406704cb14368af761.css     305 kB       1  [emitted]  [big]  app
css/app.a00db4dcd89916406704cb14368af761.css.map     481 kB          [emitted]         
           js/vendor.c3109e1668e3c4b95e1f.js.map     7.1 MB       0  [emitted]         vendor
              js/app.2ad171a83e96d367d03a.js.map    59.3 kB       1  [emitted]         app
         js/manifest.5abe310ef2fafcf81b83.js.map    4.96 kB       2  [emitted]         manifest
                                      index.html  758 bytes          [emitted]         

Build complete.
```
#### leaflet + mapbox + ol
``` bash
Hash: 3770512532a1518605c7
Version: webpack 3.12.0
Time: 22474ms
                                      Asset       Size  Chunks                    Chunk Names
          fonts/element-icons.535877f.woff    28.2 kB          [emitted]         
            fonts/element-icons.732389d.ttf      56 kB          [emitted]         
    fonts/MaterialIcons-Regular.da4ea5c.ttf     174 kB          [emitted]         
  fonts/MaterialIcons-Regular.29b882f.woff    79.6 kB          [emitted]         
  fonts/MaterialIcons-Regular.0509ab0.woff2    60.8 kB          [emitted]         
    fonts/MaterialIcons-Regular.96c4768.eot    69.2 kB          [emitted]         
          js/vendor.29454ee63e8d74e3d765.js    1.79 MB       0  [emitted]  [big]  vendor
            js/app.53bbfe900a1a7cdf13a1.js    10.9 kB       1  [emitted]         app
        js/manifest.5abe310ef2fafcf81b83.js  798 bytes       2  [emitted]         manifest
css/app.01f3dfa51b7f32a94afdc5ae0c41350c.css     290 kB       1  [emitted]  [big]  app
                                index.html  758 bytes          [emitted]         

Build complete.
```
####  ol
``` bash
Hash: 6d5864048be1df7cd932
Version: webpack 3.12.0
Time: 17506ms
                                      Asset       Size  Chunks                    Chunk Names
          fonts/element-icons.535877f.woff    28.2 kB          [emitted]         
            fonts/element-icons.732389d.ttf      56 kB          [emitted]         
    fonts/MaterialIcons-Regular.da4ea5c.ttf     174 kB          [emitted]         
  fonts/MaterialIcons-Regular.29b882f.woff    79.6 kB          [emitted]         
  fonts/MaterialIcons-Regular.0509ab0.woff2    60.8 kB          [emitted]         
    fonts/MaterialIcons-Regular.96c4768.eot    69.2 kB          [emitted]         
          js/vendor.ec3668d48ced1193950b.js     1.1 MB       0  [emitted]  [big]  vendor
            js/app.df477275daea1b269da9.js    10.9 kB       1  [emitted]         app
        js/manifest.5abe310ef2fafcf81b83.js  798 bytes       2  [emitted]         manifest
css/app.e3020f21584a1fbdab67da92cad7891a.css     268 kB       1  [emitted]  [big]  app
                                index.html  758 bytes          [emitted]         

Build complete.
```
####  null
``` bash
Hash: 7259e1389699b35d9fc5
Version: webpack 3.12.0
Time: 13365ms
                                      Asset       Size  Chunks                    Chunk Names
          fonts/element-icons.535877f.woff    28.2 kB          [emitted]         
            fonts/element-icons.732389d.ttf      56 kB          [emitted]         
    fonts/MaterialIcons-Regular.da4ea5c.ttf     174 kB          [emitted]         
  fonts/MaterialIcons-Regular.29b882f.woff    79.6 kB          [emitted]         
  fonts/MaterialIcons-Regular.0509ab0.woff2    60.8 kB          [emitted]         
    fonts/MaterialIcons-Regular.96c4768.eot    69.2 kB          [emitted]         
          js/vendor.b95388f648a5e20e817a.js     751 kB       0  [emitted]  [big]  vendor
            js/app.7aaed2f75fc20778c6a6.js    9.08 kB       1  [emitted]         app
        js/manifest.5abe310ef2fafcf81b83.js  798 bytes       2  [emitted]         manifest
css/app.77fcaf178037b099f2b0446e7eac3b29.css     264 kB       1  [emitted]  [big]  app
                                index.html    1.34 kB          [emitted]         

Build complete.
```