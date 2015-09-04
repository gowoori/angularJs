var gulp = require("gulp");
var nodemon = require("nodemon");
var browserSync = require("browser-sync");

gulp.task("browser-sync", function() {
    browserSync({
        proxy: "localhost:3000",
        port: 3000,
    })
});

gulp.task("nodemon", function(cb) {
    var called = false;
    
    return nodemon({
            script: 'app.js',
    }).on('start', function() {
            if ( !called ) {
                    called = true;
                    cb();
            }
    });
});

gulp.task("default", ['browser-sync', 'nodemon'], function() {
    gulp.watch('./public_html/index.html', browserSync.reload);
});
