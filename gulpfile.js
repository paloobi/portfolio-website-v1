var gulp = require('gulp');
var runSeq = require('run-sequence');
var concat = require('gulp-concat');

gulp.task('buildJS', function () {
    return gulp.src(['./browser/js/app.js', './browser/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./public'));
});

gulp.task('build', function () {
    runSeq(['buildJS']);
});