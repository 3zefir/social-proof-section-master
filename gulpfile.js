const {src, dest, watch, parallel} = require('gulp');


const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create();

function styles() {
    return src('./src/app/style.scss')
        .pipe(concat('style.css'))
        .pipe(sass({ style: 'compressed' }))
        .pipe(dest('./src/build'))
}

function scripts() {
    return src('./src/app/App.jsx')
        .pipe(concat('App.jsx'))
        .pipe(dest('./src/build'))
}

function watching() {
    browserSync.init({
        server: {
            baseDir: 'src/',
        }
    })

    watch(['./src/app/App.jsx'], scripts)
    watch(['./src/app/style.scss'], styles)
    watch(['./*.html']).on('change', browserSync.reload);
}


exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.default = parallel(styles, scripts, watching);