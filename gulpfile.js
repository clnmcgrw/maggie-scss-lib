const gulp = require('gulp'),
      sass = require('gulp-sass'),
      auto = require('gulp-autoprefixer'),
      brow = require('browser-sync').create(),
      plum = require('gulp-plumber')

const settings = { 
  server: './',
  siteFiles: '*.html',
  sassFiles: 'scss/**/*.scss',
  cssFiles: 'assets/css/'
}


gulp.task('serve', () => {
  brow.init({
    server: settings.server
  })
  gulp.watch(settings.siteFiles).on('change', brow.reload)
  gulp.watch(settings.sassFiles, ['sass']);
}) 

gulp.task('sass', () => {
  gulp.src(settings.sassFiles)
  .pipe(plum())
  .pipe(sass())
  .pipe(auto())
  .pipe(gulp.dest(settings.cssFiles))
  .pipe(brow.stream())
})

gulp.task('default', ['serve', 'sass']);