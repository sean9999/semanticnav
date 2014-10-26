var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var myth 		= require('gulp-myth');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./",
            logLevel: "debug"
        }
    });
});

gulp.task('myth', function () {
    return gulp.src('./css4/*.css')
        .pipe(myth())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}));
});

gulp.task('vanilla-reload',function(){
	return gulp.src('*.html').pipe( reload({stream:true}) );
});

gulp.task('default', ['myth', 'browser-sync'], function () {
	gulp.watch("./css4/*.css", ['myth']);
	gulp.watch(["*.html","./scripts/*.js"], ['vanilla-reload']);
});