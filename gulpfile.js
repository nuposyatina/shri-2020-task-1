const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const postcssNested = require('postcss-nested');

const Path = {
  BUILD: path.join((__dirname, './build/')),
  CSS: [
    path.join(__dirname, './common.blocks/**/*.css'),
    path.join(__dirname, './content.blocks/**/*.css')
  ]
}

function concatCSS(fromPath, toPath) {
  return gulp.src(fromPath).
  pipe(postcss([postcssNested()])).
  pipe(concat('style.css')).
  pipe(gulp.dest(toPath));
}

function buildCSS() {
  return concatCSS(Path.CSS, Path.BUILD);
}

module.exports = {
  default: buildCSS
}