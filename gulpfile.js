const GAME_NAME = 'game-01'

const gulp = require('gulp')
const browserify = require('browserify')
const sourcemaps = require('gulp-sourcemaps')
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

gulp.task('bundle', () => {
  return browserify({
    basedir: '.',
    debug: true,
    entries: [GAME_NAME + '/index.js'],
    cache: {},
    packageCache: {}
  })
  .transform('babelify', {
    presets: ['es2015']
  })
  .bundle()
  .pipe(source(GAME_NAME + '.min.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('public/bundles'))
  .pipe(livereload())
})

function watchServer() {
  nodemon({
    script: 'server.js',
    watch: ['server.js']
  })
}

gulp.task('watch', ['bundle'], () => {
  watchServer()
  livereload.listen()
  gulp.watch(GAME_NAME + '/index.js', ['bundle'])
})

// CREATE TASKS:
//  Test game
//  Test sc-/ut-modules
