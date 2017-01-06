var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass')

gulp.task('sass', function(){
    return gulp.src('./src/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

// Fuck plurk's CSS security limit
gulp.task('fuckplurk', ['sass'], function(){
    return gulp.src('./dist/main.css')
        .pipe(replace(/display\:/g, 'display : '))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass', 'fuckplurk'])

gulp.task('watch', function(){
    gulp.watch(['./src/*.scss'], ['default']);
});
