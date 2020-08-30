const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function sync(done) {
  browserSync.init({
    server: {
      baseDir: './public/'
    },
    reloadOnRestart: true
  });
  done();
}
function browserReload(done) {
  browserSync.reload();
  done();
}

function watchFiles(done) {
  gulp.watch('./public/assets/scss/*.scss', function () {
    return (
      gulp
        .src('./public/assets/scss/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .on('error', sass.logError)
        .pipe(autoprefixer({ cascade: false }))
        .pipe(gulp.dest('./public/assets/css/'))
    );
  });

  // scssがコンパイルされ、cssに変化があったときにリロード。html,jsファイルも同様。
  gulp.watch('./public/assets/css/*.css').on('change', gulp.series(browserReload));
  gulp.watch('./public/*.html').on('change', gulp.series(browserReload));
  gulp.watch('./public/assets/js/*.js').on('change', gulp.series(browserReload));
  done();
}
gulp.task('default', gulp.series(sync, watchFiles));