module.exports = () => 
    $.gulp.task('library', () => 
        $.gulp.src($.path.src.library)
            .pipe($.gulp.dest($.path.prod.library))
            .on('end', $.bs.reload)
    )