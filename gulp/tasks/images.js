module.exports = () => 
    $.gulp.task('img', () => 
        $.gulp.src($.path.src.img)
            .pipe($.GP.imagemin([
                $.GP.imagemin.mozjpeg({quality: 75, progressive: true}),
                $.GP.imagemin.optipng({optimizationLevel: 5})
            ]))
            .pipe($.GP.webp())
            .pipe($.gulp.dest($.path.prod.img))
            .on('end', $.bs.reload)
    )