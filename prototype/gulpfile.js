const gulp = require('gulp');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const mustache = require('gulp-mustache');
const server = require('gulp-server-livereload');
const sourcemaps = require('gulp-sourcemaps');

const srcPath = './src';
const distPath = './dist';

const paths = {
  sass: {
    input: `${srcPath}/scss/style.scss`,
    allfiles: `${srcPath}/scss/**/*.+(scss|sass)`,
    output: `${distPath}/css`,
  },
  mustache: {
    input: `${srcPath}/*.html`,
    allfiles: `${srcPath}/**/*.+(html|mustache)`,
    output: distPath,
  },
  fonts: {
    input: `${srcPath}/fonts/**/*`,
    allfiles: `${srcPath}/fonts/**/*`,
    output: `${distPath}/fonts`,
  },
  images: {
    input: `${srcPath}/images/**/*`,
    allfiles: `${srcPath}/images/**/*`,
    output: `${distPath}/images`,
  },
  js: {
    input: `${srcPath}/js/**/*`,
    allfiles: `${srcPath}/js/**/*`,
    output: `${distPath}/js`,
  },
};

gulp.task('sass', () => {
  gulp
    .src(paths.sass.input)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(
      autoprefixer({
        browsers: ['Last 2 versions', 'iOS > 7', '> 1%'],
        cascade: false,
      }),
    )
    .pipe(gulp.dest(paths.sass.output));
});

gulp.task('sass-dev', () => {
  gulp
    .src(paths.sass.input)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: '' }).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(
      autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false,
      }),
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.sass.output));
});

gulp.task('mustache', () =>
  gulp
    .src(paths.mustache.input)
    .pipe(mustache())
    .pipe(gulp.dest(paths.mustache.output)),
);

gulp.task('fonts', () =>
  gulp.src(paths.fonts.input).pipe(gulp.dest(paths.fonts.output)),
);

gulp.task('images', () =>
  gulp.src(paths.images.input).pipe(gulp.dest(paths.images.output)),
);

gulp.task('js', () =>
  gulp.src(paths.js.input).pipe(gulp.dest(paths.js.output)),
);

gulp.task('webserver', () => {
  gulp.src(distPath).pipe(
    server({
      livereload: true,
    }),
  );
});

const commonTasks = ['mustache', 'images', 'fonts', 'js'];

gulp.task('build', ['sass', ...commonTasks]);

gulp.task('watch', ['sass-dev', ...commonTasks, 'webserver'], () => {
  gulp.watch(
    [
      paths.sass.allfiles,
      paths.mustache.allfiles,
      paths.images.allfiles,
      paths.fonts.allfiles,
      paths.js.allfiles,
    ],
    ['sass-dev', ...commonTasks],
  );
});

gulp.task('default', ['build']);
