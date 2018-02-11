/**
 * Created by MBENBEN on 2017/7/11.
 */
var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['page/**/*.html','!page/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // 将整合编辑好的html文件放置在这里
        .pipe(gulp.dest('dist'));
});