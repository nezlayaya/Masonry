let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function() {
    return gulp.src(['src/js/*'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
    gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('buildCSS', function() {
    gulp.src('src/scss/*')
        .pipe(sass())
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
    gulp.watch('src/scss/main.scss');
});

gulp.task('default', [ 'watch', 'buildCSS', 'scripts']);