'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');

//Listening all types of files: $ gulp
gulp.task('default', ['sass'],function(){
	livereload.listen();
	gulp.watch('../public/sass/*.sass', ['sass']);
	gulp.watch('../public/html/*.html', ['html']);
	gulp.watch('../public/css/*.css', ['css']);
	gulp.watch('../public/js/*.js', ['js']);

});

gulp.task('sass', function(){
	return gulp.src('../public/sass/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('../public/css'));
});

gulp.task('html', function() {
	gulp.src('../public/html/*.html')
		.pipe(livereload());
});

gulp.task('css', function() {
	gulp.src('../public/css/*.css')
		.pipe(livereload());
});

gulp.task('js', function(){
	gulp.src('../public/js/*.js')
		.pipe(livereload());
});
