const gulp = require("gulp")
const ts = require('gulp-typescript');
const runSequence = require('run-sequence');
const bump = require('gulp-bump');
const child_process = require('child_process');
const spawn = child_process.spawn;
const fs = require("fs");
let project = ts.createProject('src/tsconfig.json');
let projectTypings = ts.createProject('src/tsconfig.json');

gulp.task("publish", function(done) {
    runSequence('dist', 'increment-version', "commit-release", 'npm-publish', done);
})

gulp.task('increment-version', function() {
    return gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});
gulp.task('commit-release', function(done) {
    let json = JSON.parse(fs.readFileSync(__dirname + "/package.json").toString());
    child_process.exec(`git add .; git commit -m "Release ${json.version}" -a; git tag v${json.version}; git push origin master --tags`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        done();
    });
});
gulp.task('npm-publish', function(done) {
    var publish = spawn('npm', ['publish'], {
        stdio: 'inherit'
    })
    publish.on('close', function(code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
        done()
    });
});


gulp.task("dist-typings", () => {
    let result = gulp.src('src/**/*.ts')
        .pipe(projectTypings());
    return result.dts.pipe(gulp.dest('dist/typings'));
});

gulp.task("dist-commonjs", () => {
    let result = gulp.src('src/**/*.ts')
        .pipe(project());
    return result.js.pipe(gulp.dest('dist/commonjs'));
});




gulp.task('build', function() {
    let result = gulp.src('src/**/*.ts')
        .pipe(project());
    return result.js.pipe(gulp.dest('build/commonjs'));
});


gulp.task('copy-to-fusebox', function() {
    gulp.src(['dist/**/**.**']).pipe(gulp.dest("../fuse-box/node_modules/fuse-tools/dist"))
    gulp.src(['package.json']).pipe(gulp.dest("../fuse-box/node_modules/fuse-tools"))
});

gulp.task('watch', ['dist-commonjs'], function() {
    runSequence("dist-typings", 'copy-to-fusebox');
    gulp.watch(['src/**/*.ts'], () => {
        runSequence('dist-commonjs', "dist-typings", 'copy-to-fusebox');
    });
});


gulp.task("dist", ["dist-commonjs", "dist-typings"])