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
  },
  fonts: {
    input: './src/fonts/**/*',
    allfiles: 'src/fonts/**/*',
    output: './dist/fonts'
  },
  images: {
    input: './src/images/**/*',
    allfiles: 'src/images/**/*',
    output: './dist/images'
  },
  js: {
    input: './src/js/**/*',
    allfiles: 'src/js/**/*',
    output: './dist/js'
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

gulp.task('fonts', function() {
  return gulp.src(paths.fonts.input)
    .pipe(gulp.dest(paths.fonts.output));
});

gulp.task('images', function() {
  return gulp.src(paths.images.input)
    .pipe(gulp.dest(paths.images.output));
});

gulp.task('js', function() {
  return gulp.src(paths.js.input)
    .pipe(gulp.dest(paths.js.output));
});

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
    'images',
    'fonts',
    'js',
    'webserver'
  ], function() {
  gulp.watch([paths.sass.allfiles, paths.mustache.allfiles, paths.images.allfiles, paths.fonts.allfiles, paths.js.allfiles], [
    'sass',
    'mustache',
    'images',
    'fonts',
    'js'
  ]);
});
