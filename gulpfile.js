'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var list = ['manifest.json', 'index.js', 'button.png', 'icon.png'];
var xpi = 'webext-ffxmania.xpi';

gulp.task('default', function () {
  gulp.src(list)
    .pipe(zip(xpi))
    .pipe(gulp.dest('.'));
});