const gulp = require('gulp'); // 引入gulp
const uglify = require('gulp-uglify'); // 引入js压缩
const fileinclude  = require('gulp-file-include'); // 引入文件合并
const htmlmin = require('gulp-htmlmin'); // 压缩html

gulp.task('fileinclude', function() {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['page/**/*.html', '!page/include/**.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // 将整合编辑好的html文件放置在这里
        .pipe(gulp.dest('dist'));
});

// JS代码压缩
gulp.task('jsmin', () =>
    gulp.src('javascript/*.js') // 需要压缩的js文件
        .pipe(uglify())
        .pipe(gulp.dest('js')) // 压缩的js文件输出位置
);

// 压缩html
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('dist/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('tryDist'));
});