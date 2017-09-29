var fs = require('fs');
var rimraf = require('rimraf');

function copy(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
rimraf('./build', fs, function cb() {
  console.log('build目录已清空');
  fs.mkdirSync('./build')
  fs.mkdirSync('./build/views')
  copy('./views/dll.js', './build/views/dll.js')
});



