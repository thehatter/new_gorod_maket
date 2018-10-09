'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var slim = require("gulp-slim");
var cached = require('gulp-cached');

var injectSvg = require('gulp-inject-svg');
var injectSvgOptions = { base: '/' };

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('slim', function(){
  return gulp.src("./*.slim")
    .pipe(cached('slim'))
    .pipe(slim({
      pretty: true
    }))
    .pipe(injectSvg(injectSvgOptions))
    .pipe(gulp.dest("./"));
});



gulp.task('default', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./*.slim', ['slim']);
});
