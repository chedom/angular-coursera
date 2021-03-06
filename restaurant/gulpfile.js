var gulp = require('gulp'),
    minifycss   = require('gulp-minify-css'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    uglify      = require('gulp-uglify'),
    usemin      = require('gulp-usemin'),
    imagemin    = require('gulp-imagemin'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    notify      = require('gulp-notify'),
    cache       = require('gulp-cache'),
    changed     = require('gulp-changed'),
    rev         = require('gulp-rev'),
    browserSync = require('browser-sync'),
    ngAnnotate  = require('gulp-ng-annotate'),
    del         = require('del');

//jsHint
gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

//Usemin
gulp.task('usemin',['jshint'], function () {
  return gulp.src('./app/**/*.html')
      .pipe(usemin({
        css:[minifycss(),rev()],
        js: [ngAnnotate(), uglify(),rev()]
      }))
      .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('imagemin', function() {
  return del(['dist/images']), gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copyfonts', ['clean'], function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
   gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copytemplates', function() {
    gulp.src('app/views/*').pipe(gulp.dest('./dist/views'));
});

//clean
gulp.task('clean', function() {
    return del(['dist']);
});

//Default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin', 'copyfonts', 'copytemplates');
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
      // Watch image files
  gulp.watch('app/images/**/*', ['imagemin']);

});

gulp.task('browser-sync', ['default'], function () {
   var files = [
      'app/**/*.html',
      'app/styles/**/*.css',
      'app/images/**/*.png',
      'app/scripts/**/*.js',
      'dist/**/*'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "dist",
         index: "index.html"
      }
   });
        // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', browserSync.reload);
    });
