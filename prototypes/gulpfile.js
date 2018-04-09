// Gather used gulp plugins
var gulp = require('gulp');
    rename = require('gulp-rename');
    watch = require('gulp-watch');
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    mustache = require('gulp-mustache');
    server = require('gulp-server-livereload'),
    sourcemaps = require('gulp-sourcemaps');

// Set paths
var paths = {
  sass: {
    input: 'src/scss/style.scss',
    allfiles: 'src/scss/**/*.+(scss|sass)',
    output: 'dist/css'
  },
  mustache: {
    input: './src/*.html',
    allfiles: 'src/**/*.+(html|mustache)',
    output: './dist'
  }
};

// Define SASS compiling task
gulp.task('sass', function () {
  gulp.src(paths.sass.input)
    .pipe(sourcemaps.init())
    .pipe(sass(
      {outputStyle: 'compressed'}
    ).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.sass.output))
});

// Define Mustache compiling task
gulp.task('mustache', function() {
  return gulp.src(paths.mustache.input)
    .pipe(mustache())
    .pipe(gulp.dest(paths.mustache.output));
});

// Define copying javascript for styleguide task
gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true
    }));
});


// Listen folders for changes and apply defined tasks
gulp.task('default', [
    'sass',
    'mustache',
    'webserver'
  ], function() {
  gulp.watch([paths.sass.allfiles, paths.mustache.allfiles], [
    'sass',
    'mustache'
  ]);
});
