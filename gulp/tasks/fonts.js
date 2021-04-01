module.exports = () => 
    $.gulp.task('fonts', () => 
        $.gulp.src($.path.src.fonts)
            .pipe($.GP.ttf2woff())
            // .pipe($.GP.ttf2woff2())
            .pipe($.gulp.dest($.path.prod.fonts))
            .on('end', $.bs.reload)
    )