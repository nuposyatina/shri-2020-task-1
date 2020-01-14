const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const postcssNested = require('postcss-nested');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

const Path = {
  BUILD: path.join((__dirname, './build/')),
  CSS: [
    path.join(__dirname, './common.blocks/**/*.css'),
    path.join(__dirname, './content.blocks/**/*.css')
  ],
  JS: path.join(__dirname, './script.js')
}

function concatCSS(fromPath, toPath) {
  return gulp.src(fromPath).
  pipe(postcss([postcssNested()])).
  pipe(concat('style.css')).
  pipe(cleanCSS()).
  pipe(gulp.dest(toPath));
}

function buildCSS() {
  return concatCSS(Path.CSS, Path.BUILD);
}

function buildJS() {
  return gulp.src(Path.JS).
  pipe(minify(
    {
      ext:{
        src:'-debug.js',
        min:'.js'
      }
    }
  )).
  pipe(gulp.dest(Path.BUILD));
}

module.exports = {
  default: gulp.parallel([buildCSS, buildJS])
}
