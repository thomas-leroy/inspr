/* jshint node: true */
'use strict';

var csso = require('gulp-csso'),
    del = require('del'),
    gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify-es').default,
    pipeline = require('readable-stream').pipeline,
    jsonminify = require('gulp-jsonminify'),
    webserver = require('gulp-webserver');

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return pipeline(
        gulp.src(['./styles/*.css']),
        csso(),
        gulp.dest('dist/styles')
    );
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function () {
    return pipeline(
        gulp.src('./*.js'),
        uglify({
            mangle: {
                toplevel: true
            }
        }),
        gulp.dest('dist')
    );
});
gulp.task('helpers/scripts', function () {
    return pipeline(
            gulp.src(['./helpers/*.js']),
            uglify(),
            gulp.dest('dist/helpers')
    );
});

// Gulp task to minify HTML files
gulp.task('pages', function () {
    return gulp.src('./index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
    gulp.src([
            '.htaccess',
            'favicon.ico',
            'site.webmanifest'
        ])
        .pipe(gulp.dest('./dist'));

        gulp.src([
            'resources/**',
        ])
        .pipe(jsonminify())
        .pipe(gulp.dest('./dist/resources'));

        gulp.src([
            'assets/**',
        ])
        .pipe(gulp.dest('./dist/assets'));
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Serve content to browser for dev purpose
gulp.task('dev-webserver', function() {
    gulp.src('./')
    .pipe(webserver({
        port: 1234,
        https: true,
        livereload: true,
        directoryListing: false,
        open: true,
        fallback: 'index.html'
    }));
});

// Serve content to browser for dev purpose
gulp.task('prod-check-webserver', function() {
    gulp.src('./dist')
    .pipe(webserver({
        port: 4567,
        https: true,
        livereload: true,
        directoryListing: false,
        open: true,
        fallback: 'index.html'
    }));
});

// Default dev task
gulp.task('dev', gulp.series('dev-webserver'));

// Gulp task to minify all files
gulp.task('build', gulp.series(
    'clean',
    'styles',
    'helpers/scripts',
    'scripts',
    'copy',
    'pages',
    'prod-check-webserver'
));