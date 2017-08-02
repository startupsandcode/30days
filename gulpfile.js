// Sass configuration
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    src = './src/'
    dest = './public/';

gulp.task('sass', function () {
    return gulp.src(src + '**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src(src + '**/*.html')
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());
});

gulp.task('images', function () {
    return gulp.src(src + '**/images/*.*')
        .pipe(gulp.dest(dest));
});

gulp.task('scripts', function () {
    return gulp.src(src + '**/scripts/*.*')
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());
});

gulp.task('fonts', function(){
    return gulp.src(src + '**/fonts/*.*')
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('sandbox', function(){
    return gulp.src(src + 'sandbox/drumkit/**/*.*')
    .pipe(gulp.dest(dest + '/sandbox/drumkit'));
});

gulp.task('watch', function () {
    gulp.watch([src + '**/*.scss'], ['sass']);
    gulp.watch([src + '**/scripts/*.js'], ['scripts']);
    gulp.watch([src + '**/*.html'], ['html']);
});

gulp.task('default', ['sass', 'html', 'scripts', 'fonts', 'images', 'connect', 'watch']);