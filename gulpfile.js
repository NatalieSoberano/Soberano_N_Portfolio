const gulp = require('gulp');
const sass = require('gulp-sass');

// set up some simple tasks for Gulp to run

function compile(done) {
    gulp.src("sass/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest("public/css"))
    done()
}

exports.compile = compile