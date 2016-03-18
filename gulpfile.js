var gulp = require('gulp');
var mocha = require('gulp-mocha');

//default:
gulp.task('default', ['test']);

// watchers:
gulp.task('watch', function() {
 
  gulp.watch(['app/*.js', 'test/*.js'], ['test']);

});

//tasks
gulp.task('test', function () {
	return gulp.src('test/*.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it 
		.pipe(mocha({reporter: 'nyan'}));
});