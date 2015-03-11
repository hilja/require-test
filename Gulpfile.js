var gulp = require('gulp'),
    amdOptimize = require('amd-optimize'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
    gulp.src(['src/js/**/*.js'], { base: 'src/js' })
        // Traces all modules and outputs them in the correct order
        .pipe(amdOptimize('modules/app', {
            baseURL: 'src/js',
            configFile: 'src/js/config.js',
            findNestedDependencies: true
        }))
        .pipe(concat('global.js'))
        .pipe(gulp.dest('dist/js'))
});
