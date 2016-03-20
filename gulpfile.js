var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var  browserify = require('browserify');
var  source     = require('vinyl-source-stream');

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./app"
    });
    gulp.watch(["app/js/*.js","app/index.html"],['browserify']).on('change', browserSync.reload);
});

gulp.task('browserify', function() {
    return browserify('./app/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('default', ['serve']);