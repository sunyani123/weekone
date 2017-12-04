var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
var url = require('url');
var mincss = require('gulp-clean-css');
var minjs = require('gulp-uglify');
var data = JSON.parse(fs.readFileSync('./data.json').toString());
gulp.task('mincss',function(){
    gulp.src('./App/common/css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('./mincss/'));
});
gulp.task('minjs',function(){
    gulp.src('./App/self/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('./minjs/'));
});
gulp.task('webserver',function(){
    gulp.src('.')
        .pipe(webserver({
            port:3000,
            open:true,
            host:'localhost',
            livereload:true,
            fallback:'./index.html'
        }))
});
gulp.task('mywebserver',function(){
    gulp.src('.')
        .pipe(webserver({
            port:8080,
            middleware:function(request,response,next){
                response.writeHead(200,{
                    'Content-type':'text/json;charset=utf-8',
                    'Access-Control-Allow-Origin':'*'
                })
                switch(request.url){
                    case '/datajson':
                    console.log(123);
                    response.end(JSON.stringify(data));
                    break;
                }
            }
        }))
});
gulp.task('default',['webserver','mywebserver','mincss','minjs']);