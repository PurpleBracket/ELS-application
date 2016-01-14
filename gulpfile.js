var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

gulp.task('js', function () {
    return gulp.src(['public/js/components/touch/jquery.mobile.custom.js', 'public/js/components/foundation/foundation.js','public/js/components/foundation/foundation.tab.js','public/js/components/foundation/foundation.accordion.js', 'public/js/components/foundation/foundation.equalizer.js','public/js/components/bootstrap/*.js','public/js/components/jalendar/*.js','public/js/components/modern-ticker/*.js','public/js/components/pdfobject/*.js','public/js/components/viewportUnitsPolly/*.js', 'public/js/ui.js']) //select all javascript files under js/ and any subdirectory
        .pipe(concat('app.min.js')) //the name of the resulting file
        // .pipe(uglify())
        .pipe(gulp.dest('public/dist/js')) //the destination folder
        .pipe(notify({ message: 'Finished minifying JavaScript OLD'}));
});

gulp.task('dependencies', function () {
    return gulp.src(['public/js/components/touch/jquery.mobile.custom.js', 'public/js/components/foundation/foundation.js','public/js/components/foundation/foundation.tab.js','public/js/components/foundation/foundation.interchange.js','public/js/components/foundation/foundation.accordion.js', 'public/js/components/foundation/foundation.equalizer.js','public/js/components/bootstrap/*.js','public/js/components/jalendar/*.js','public/js/components/modern-ticker/*.js','public/js/components/pdfobject/*.js', 'public/js/components/scrollSpeed/jQuery.scrollSpeed.js']) //   ,'public/js/components/viewportUnitsPolly/*.js'   select all javascript files under js/ and any subdirectory
        .pipe(concat('dependencies.min.js')) //the name of the resulting file
        // .pipe(uglify())
        .pipe(gulp.dest('public/dist/js')) //the destination folder
        .pipe(notify({ message: 'Finished minifying JavaScript DEP'}));
});
gulp.task('ui', function () {
    return gulp.src(['public/js/els-vars-init.js','public/js/els-nav.js','public/js/els-accordion.js','public/js/els-carousel.js','public/js/els-comments.js','public/js/els-calendar.js','public/js/els-init.js']) //select all javascript files under js/ and any subdirectory
        .pipe(concat('els-ui.min.js')) //the name of the resulting file
        // .pipe(uglify())
        .pipe(gulp.dest('public/dist/js')) //the destination folder
        .pipe(notify({ message: 'Finished minifying JavaScript UI'}));
});

gulp.task('els-app', ['dependencies', 'ui'], function () {
    return gulp.src(['public/dist/js/dependencies.min.js', 'public/dist/js/els-ui.min.js']) //select all javascript files under js/ and any subdirectory
        .pipe(concat('els-app.min.js')) //the name of the resulting file
        .pipe(gulp.dest('public/dist/js')) //the destination folder
        .pipe(notify({ message: 'Finished minifying JavaScript APP'}));
});

gulp.task('default', ['dependencies', 'ui', 'els-app']);
