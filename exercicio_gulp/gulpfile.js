const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.sass = compilaSass;