module.exports = () =>
    $.gulp.task('svg', () =>
        $.gulp.src($.path.src.svg)
            .pipe(
                $.GP.svgSprite({
                    mode: { stack: { sprite: "../sprite.svg" } }
                })
            )
            .pipe($.gulp.dest($.path.prod.svg))
            .on('end', $.bs.reload)
    )