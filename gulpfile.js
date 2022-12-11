const {  src, dest, series } = require("gulp");
var clean = require('gulp-clean');
var browserify = require('browserify');
var esmify = require('esmify');
var source = require("vinyl-source-stream");

function images( cb ) {
    src('./src/images/*.png')
            .pipe(dest('dist/img/'));
    cb();
 }

 function javascripts() {
    return browserify({
        entries: './src/index.js',
        debug: true,
        standalone: 'instruments',
        plugin: [ esmify ]
      })
      .bundle()
      .pipe(source("instruments.js"))
      .pipe(dest('dist/js'));
 }

 function cleanup(cb) {
    src('dist/**', {read: false})
        .pipe(clean());
    cb();
 }

 exports.clean = cleanup;

 exports.default = series( cleanup , images , javascripts )