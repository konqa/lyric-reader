const gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css');
	uglify = require('gulp-uglify');

const paths = {
	js: ['src/js/app.js',
	 'src/js/modules/lyrics.js',
 		'src/js/modules/reader.js'],
	css: ['src/css/**/*.css']
};

const dist = 'dist';

gulp.task('default', ['babelit', 'css', 'watch']);

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

gulp.task('css', () => {
	console.log('css task');
});

gulp.task('watch', () => {
    gulp.watch(paths.js, ['babelit']);
    gulp.watch(paths.css, ['css']);
});
