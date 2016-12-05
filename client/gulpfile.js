var gulp = require('gulp');
var runSequence = require('run-sequence');

var less = require('gulp-less');
var minifyCSS = require('gulp-cssnano');
var minifyImage = require('gulp-imagemin');
var ninifyHTML = require('gulp-htmlmin');

var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var del = require('del');

var modulesPath = 'modules/',
	scriptsDestPath = 'public/assets/js',
	componentsPath = 'components/',
	componentsScriptPath = 'public/assets/components/js',
	htmlDestPath = 'public/modules';

gulp.task('default',function(){
	runSequence(['components','html','css','scripts','vendor','jsonDatas','fronts','watch','componentsScripts']);
});

/**
 * 将components组件打包
 * @param  {[type]} ){	gulp.src('images*')		.pipe(gulp.dest('public/assets/images'));} [description]
 * @return {[type]}                                                                      [description]
 */
gulp.task('components',function(){
	return gulp.src('components/**/*')
		.pipe(minifyImage())
		.pipe(gulp.dest('public/assets/components'));
});

/**
 * 将images下面的所有图片都放在public/assets/images下面
 * @param  {[type]} ){	gulp.src('images*')		.pipe(gulp.dest('public/assets/images'));} [description]
 * @return {[type]}                                                                      [description]
 */
gulp.task('images',function(){
	return gulp.src('images/**/*')
		.pipe(minifyImage())
		.pipe(gulp.dest('public/assets/images'));
});


/**
 * 对html进行处理
 * @param  {[type]} ){	var folders       [description]
 * @return {[type]}         [description]
 */
gulp.task('html',function(){
	var folders = getFolders(modulesPath);
	var tasks = folders.map(function(folder) {
		return gulp.src(path.join(modulesPath, folder, '/**/*.html'))
			.pipe(gulp.dest(htmlDestPath+'/'+folder));
	});
	return tasks;
});

/**
 * 对css进行处理
 * @param  {[type]} ){	gulp.src('less*')	.pipe(minifyCSS())	.pipe(gulp.dest('public/assets/css'));} [description]
 * @return {[type]}                                                                                   [description]
 */
gulp.task('css',function(){
	return gulp.src('less/main.less')
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(gulp.dest('public/assets/css'));
});


/**
 * 对所有的js文件进行打包处理
 * @param  {[type]} ) {	var        folders [description]
 * @return {[type]}   [description]
 */
gulp.task('scripts', function() {
	var folders = getFolders(modulesPath);

	var tasks = folders.map(function(folder) {
		// 拼接成 foldername.js
		// 写入输出
		// 压缩
		// 重命名为 folder.min.js
		// 再一次写入输出
		return gulp.src(path.join(modulesPath, folder, '/**/*.js'))
			.pipe(concat(folder + '.js'))
			// .pipe(gulp.dest(scriptsDestPath))
			.pipe(uglify())
			.pipe(rename(folder + '.js'))
			.pipe(gulp.dest(scriptsDestPath));
	});
	return merge(tasks);
});


/**
 * 对所有的components 下面的js文件进行打包处理
 * @param  {[type]} ) {	var        folders [description]
 * @return {[type]}   [description]
 */
gulp.task('componentsScripts', function() {
	var folders = getFolders(componentsPath);

	var tasks = folders.map(function(folder) {
		// 拼接成 foldername.js
		// 写入输出
		// 压缩
		// 重命名为 folder.min.js
		// 再一次写入输出
		return gulp.src(path.join(componentsPath, folder, '/**/*.js'))
			.pipe(concat(folder + '.js'))
			// .pipe(gulp.dest(scriptsDestPath))
			.pipe(uglify())
			.pipe(rename(folder + '.js'))
			.pipe(gulp.dest(componentsScriptPath));
	});
	return merge(tasks);
});



gulp.task('vendor',function(){
	return gulp.src('vendor/**/*')
	.pipe(gulp.dest('public/vendor'));
});


/**
 * 打包json_datas模拟数据
 * @param  {[type]} ){	return gulp.src('json_datas*')	.pipe(gulp.dest('public/json_datas'));} [description]
 * @return {[type]}            [description]
 */
gulp.task('jsonDatas',function(){
	return gulp.src('json_datas/**/*')
	.pipe(gulp.dest('public/json_datas'));
});

/**
 * 打包字体图标
 * @param  {[type]} ){	return gulp.src('json_datas*')	.pipe(gulp.dest('public/json_datas'));} [description]
 * @return {[type]}            [description]
 */
gulp.task('fronts',function(){
	return gulp.src('less/fonts/*')
	.pipe(gulp.dest('public/assets/css/fonts'));
});


/**
 * 删除public目录
 * @param  {[type]} cb){	del(['public'],cb);} [description]
 * @return {[type]}                             [description]
 */
gulp.task('clean',function(cb){
	del(['public'],cb);
});


/**
 * 对各个部分的内容进行监视
 * @param  {[type]} ){	gulp.watch([modulesPath+'*.html'],['html']);	gulp.watch(['less/main.less'],['css']);	gulp.watch([modulesPath+'*.js'],['scripts']);	gulp.watch(['vendor*.js'],['vendor']);} [description]
 * @return {[type]}                                                                                                                                                                                 [description]
 */
gulp.task('watch',function(){
	gulp.watch([modulesPath+'/**/*.html'],['html']);
	gulp.watch(['less/main.less'],['css']);
	gulp.watch(['less/**/*.less'],['css']);
	gulp.watch(['less/fonts/*'],['fronts']);
	gulp.watch([modulesPath+'/**/*.js'],['scripts']);
	gulp.watch([componentsPath+'/**/*.js'],['componentsScripts']);
	gulp.watch(['vendor/**/*.js'],['vendor']);
	gulp.watch(['json_datas/**/*.json'],['jsonDatas']);
	gulp.watch(['components/**/*'],['components']);
});


/**
 * 获取文件夹
 * @param  {[type]} dir [description]
 * @return {[type]}     [description]
 */
function getFolders(dir){
	return fs.readdirSync(dir)
	.filter(function(file){
		return fs.statSync(path.join(dir,file)).isDirectory();
	});
}