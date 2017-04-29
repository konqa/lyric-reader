const gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass');
	uglify = require('gulp-uglify');

const paths = {
	js: ['client/src/js/app.js',
	 'client/src/js/modules/lyrics.js',
 		'client/src/js/modules/reader.js'],
	styles: ['client/src/styles/app.scss',
			'client/src/styles/pages/**/*.scss']
};

const dist = 'dist';

gulp.task('default', ['babelit', 'styles', 'watch']);

gulp.task('babelit', () => {
	browserify(paths.js)
	.transform('babelify', {
		presets: ['es2015']
	})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(gulp.dest(dist))
});

gulp.task('styles', () => {
	 return gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(dist));
});

gulp.task('watch', () => {
    gulp.watch(paths.js, ['babelit']);
    gulp.watch(paths.css, ['styles']);
});
