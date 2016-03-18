var gulp = require('gulp');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');

//default:
gulp.task('default', ['scripts', 'test']);

// watchers:
gulp.task('watch', function() {
 
  gulp.watch(['app/*.js', 'test/*.js'], ['scripts', 'test']);

});

//tasks
gulp.task('scripts', function() {
  return gulp.src(['./app/*.js' ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build/'));
});


gulp.task('test', function () {
	return gulp.src('test/*.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it 
		.pipe(mocha({reporter: 'nyan'}));
});