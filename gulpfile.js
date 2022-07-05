

function test ()
{
  return Promise.resolve()
}
 exports.tese=test //=> gulp tese
// //exports.default=test //=> gulp --tasks OR gulp




const { src, dest,series } = require("gulp")
const htmlmin = require('gulp-htmlmin')

let globs=
{
html:"project/*.html",
css:"project/css/**/*.css",
js: "project/js/*.js",
img:"project/pics/*"
}


function taskOne()
{
 return src(globs.html) // اقرالى الHTML اللى فى ملف البروجيكت
 .pipe(htmlmin({collapseWhitespace:true ,removeComments:true}))
 .pipe(dest("NewFolder"))
}
// //exports.folder=taskOne //=> gulp folder


const cleanCSS = require('gulp-clean-css')
var concat = require('gulp-concat')
function taskTwo()
{
 return src(globs.css) // اقرالى الHTML اللى فى ملف البروجيكت
 .pipe(concat("style.min.css"))
 .pipe(cleanCSS())
 .pipe(dest("NewFolder"))
}
// // exports.cssfile =taskTwo //=> gulp cssfile 


const contact = require('gulp-contact')
const terser = require('gulp-terser')
function taskThree()
{
 return src(globs.js) // اقرالى الHTML اللى فى ملف البروجيكت
 .pipe(concat("script.min")) // اجمعهم كلهم فى فايل واحد 
 .pipe(terser())
 .pipe(dest("NewFolder"))
}
// // exports.jsfile =taskThree // => gulp jsfile //=> npm install gulp-terser --save -dev 


const imagemin = require('gulp-imagemin')
function taskFour()
{
 return gulp.src(globs.img) // اقرالى الHTML اللى فى ملف البروجيكت
 .pipe(imagemin()) 
 .pipe(gulp.dest("NewFolder/images"))
}
// // exports.img =taskFour // => gulp img 

exports.default=series(taskOne,taskTwo,taskThree,taskFour) //=> gulp --tasks OR gulp