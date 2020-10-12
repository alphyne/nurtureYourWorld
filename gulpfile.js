"use strict";

// Load plugins
//const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
//const cp = require("child_process");
//const del = require("del");
//const eslint = require("gulp-eslint");
const gulp = require("gulp");
//const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const nodemon = require('gulp-nodemon');


function start(done) {
    /*var started = false;
    return nodemon({
        script: 'server.js'
    }).on('start', function() {
        if (!started) {
            cb();
            started = true;
        }
    });*/
    return nodemon({
        script: 'server.js'
    }), done();
};

function browserSync(done) {
    browsersync.init({
        proxy: 'http://localhost:3000',
        files: ['public/**/*.*'],
        brower: 'google chrome',
        port: 5000,
    });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("./public/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./public/css/"))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./public/sass/**/*", css);
  gulp.watch(
    [
      "./data.json",
      "./views/*",
      "./routes/*",
    ],
    browserSyncReload
  );
}

const watch = gulp.parallel(watchFiles, browserSync);
const build = gulp.series(css, start, watch);

exports.css = css;
exports.start = start;
exports.watch = watch;
exports.build = build;

exports.default = build;

