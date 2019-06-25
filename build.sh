cd webgis
cnpm i
npm run build
cd ../pack
cordova build browser
echo browser build ok!
# cordova build ios
# echo ios build ok!
# ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ cordova build electron --release
# echo electron build ok!
# cordova run ios