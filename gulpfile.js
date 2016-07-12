var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default', function() {
  browserSync.init({
        //change proxy server to your localhost
        //proxy: "http://localhost:3000/melbournestar_frontend/new-home.html",
      proxy: "http://localhost:64306/",
    });

  gulp.start('sass');
  gulp.start('minify-js');
  
  watch('css/project/style.scss', batch(function (events, done) {
        gulp.start('sass', done);
  }));
    
  watch('js/final/sitewide/*.js', batch(function (events, done) {
      gulp.start('concat-js', done);
  }));

  watch(['js/project/sitewide/*.js', 'js/project/*.js'], batch(function (events, done) {
      gulp.start('minify-js', done);
  }));
    
  watch(['css/project/components/*.scss', 'css/project/components/**/*.scss'], batch(function (events, done) {
        gulp.start('sass', done);
    }));

  watch('css/cache/sassOutput/*.css', batch(function (events, done) {
        gulp.start('concat', done);
    }));
    
  watch('css/cache/conOutput/*.css', batch(function (events, done) {
        gulp.start('minify', done);
    }));
    
  watch('*.html', batch(function (events, done) {
        console.log('#=>html');
        return gulp.src('*.html')
              .pipe(browserSync.reload({stream:true}));
    }));
    
  watch('plugins/*/*', batch(function (events, done) {
          gulp.start('sass', done);
    }));

});

//Step 1: compile sass
gulp.task('sass', function () {
    gulp.src('css/project/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('../../final'))
    .pipe(gulp.dest('css/cache/sassOutput'));
    console.log('#=>sass');
});


//Step 2: concat CSS files
gulp.task('concat', function () {
  console.log('#=>concat');
  return gulp.src(['css/bootstrap/*.css',
                   'css/plugins/*.css',
                   'css/cache/sassOutput/*.css',
                   'plugins/*/*.css'])
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('css/cache/conOutput/'));
});

//Step 3: minify CSS file and reload browser
gulp.task('minify', function() {
  console.log('#=>minify');
  return gulp.src('css/cache/conOutput/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/final/'))
    .pipe(browserSync.reload({stream:true}));
});

//Step 4: minify JS file and reload browser
gulp.task('minify-js', function () {
    console.log('#=>minify js');
    return gulp.src(['js/project/**/*.js','js/project/*.js'])
      .pipe(uglify())
      .pipe(gulp.dest('js/final/'))
      .pipe(browserSync.reload({ stream: true }));
});

//Step 5: concat sitewide js
gulp.task('concat-js', function () {
    console.log('#=>concat-js');
    return gulp.src('js/final/sitewide/*.js')
      .pipe(concat("sitewide.js"))
      .pipe(gulp.dest('js/final/'));
});
