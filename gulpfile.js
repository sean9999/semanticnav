"use strict";

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    myth 		= require('gulp-myth'),
    domSrc      = require('gulp-dom-src'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    autoprefixer= require('gulp-autoprefixer');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('myth', function () {
    return gulp.src('./src/css4/*.css')
        .pipe(myth())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('vanilla-reload',function(){
	return gulp.src('*.html').pipe( browserSync.reload({stream:true}) );
});

gulp.task('harmony',function(){
    console.log('harmony!!');
    return gulp.src(["./src/es6/*"]).pipe( browserSync.reload({stream: true}) );
});

gulp.task('build-from-html', function () {
    domSrc({ file: 'index.html', selector: 'script', attribute: 'src' })
        .pipe(concat('app.full.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['myth', 'browser-sync'], function () {
	gulp.watch(["./src/css4/*.css","./src/css4/*.*.css"], ['myth']);
	gulp.watch(["./src/*.html"], ['vanilla-reload']);
    gulp.watch(["./src/es6/*"], ['harmony']);
});