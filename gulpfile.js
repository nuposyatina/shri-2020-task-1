const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const postcssNested = require('postcss-nested');

const Path = {
  BUILD: path.join((__dirname, './build/')),
  COMMON_CSS: path.join(__dirname, './common.blocks/**/*.css')
}

function concatCSS(fromPath, toPath) {
  return gulp.src(fromPath).
  pipe(postcss([postcssNested()])).
  pipe(concat('style.css')).
  pipe(gulp.dest(toPath));
}

function buildCSS() {
  return concatCSS(Path.COMMON_CSS, Path.BUILD);
}

module.exports = {
  default: buildCSS
}