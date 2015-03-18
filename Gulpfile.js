var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	autoprefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

gulp.task('default', ['browserSync', 'styles', 'jshint', 'watch']);

gulp.task('styles', function(){
	gulp.src('style/*.scss')
		.pipe(sass({
			"sourcemap=none": true
		}))
		.pipe(autoprefix('last 2 version'))
		.pipe(gulp.dest('style/'))
		.pipe(reload({ stream: true }))
});

gulp.task('jshint', function(){
	return gulp.src('scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(reload({ stream: true }))
});

gulp.task('browserSync', function(){
	browserSync({
		server: { baseDir: "./" }
	});
});

gulp.task('watch', function(){
	// gulp.watch('scripts/**/*.js', ['jshint']);
	gulp.watch('style/**/*.scss', ['styles']);
	gulp.watch('**/*.html', reload);
});