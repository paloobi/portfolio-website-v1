// All used modules.
var gulp = require('gulp');
var runSeq = require('run-sequence');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

// Production tasks
// --------------------------------------------------------------

gulp.task('buildJS', function () {
    return gulp.src(['/browser/js/**.js', './browser/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

// Composed tasks
// --------------------------------------------------------------

gulp.task('build', function () {
    runSeq(['buildJS']);
});

gulp.task('default', function () {
    gulp.start('build');
});
