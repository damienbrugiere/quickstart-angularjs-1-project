var gulp = require('gulp-param')(require('gulp'), process.argv);
var browserSync = require('browser-sync').create();
var  browserify = require('browserify');
var  source     = require('vinyl-source-stream');
var replace = require('gulp-replace');
var rename = require("gulp-rename");

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./app"
    });
    gulp.watch(["app/js/**/**","app/index.html"],['browserify']).on('change', browserSync.reload);
});

gulp.task('browserify', function() {
    return browserify('./app/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/dist'));
});

gulp.task('default', ['browserify','serve']);

gulp.task('create-controller',function(name,params,root){
    if(params === undefined){
        params='';
    }
    if(root === undefined || name === undefined){
        console.log('oublie de la root ou du nom du controller');
    }else{
     root = root.replace(".","/");
     gulp.src('templates/controller.js')
     .pipe(replace('Controller', name))
     .pipe(replace('params', params))
     .pipe(rename({
         basename : name,
         extname : ".js"
     }))
     .pipe(gulp.dest('app/js/controllers/'));
     
     gulp.src('templates/view.html')
     .pipe(rename({
         basename : name,
         extname : ".html"
     }))
     .pipe(gulp.dest('app/js/controllers/'));
     
     gulp.src('app/js/app.js')
     .pipe(replace('// #import#', 'var '+name+' = require("./controllers/'+name+'"); \n // #import#'))
     .pipe(replace('// #addController#', 'module.controller("'+name+'",['+params+name+']);\n // #addController#'))
     .pipe(gulp.dest('app/js/'));
     
      
     gulp.src('app/js/router.js')
     .pipe(replace('// #addRoot#', '.when("'+root+'", {\n'+
            'templateUrl: "./js/controllers/'+name+'.html",\n'+
            'controller: "'+name+'",\n'+
            'controllerAs: "vm"\n'+
        '})'+
        '\n // #addRoot#'
        ))
     .pipe(gulp.dest('app/js/'));
    }

});