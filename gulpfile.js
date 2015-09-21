var gulp = require('gulp');
var connect = require('gulp-connect');

// configure connect task
gulp.task('connect', function() {
  connect.server({
    // root: './server/bin/www', // update path!!
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(['./client/public/views/*.html'], ['html']);
});

// default task!
gulp.task('default', ['watch', 'connect']);
