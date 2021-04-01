module.exports = () =>
    $.gulp.task('html', () =>
        $.gulp.src($.path.src.html)
            // .pipe($.GP.include()) // (// =include path/name.{pug/html})
            // .pipe($.GP.fileInclude()) // (@@include("path/name.{pug/html}"))
            .pipe($.GP.pug())
            .pipe($.gulp.dest($.path.prod.html))
            .on('end', $.bs.reload)
    )