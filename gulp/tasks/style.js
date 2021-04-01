module.exports = () =>
    $.gulp.task('css', () =>
        $.gulp.src($.path.src.css)
            .pipe($.GP.sourcemaps.init())
            .pipe($.GP.plumber())
            .pipe($.GP.sass({outputStyle: "expanded"}))
            .pipe($.GP.autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            }))
            .pipe($.GP.groupCssMediaQueries())
            .pipe($.GP.sass({outputStyle: "compressed"}))
            .pipe($.GP.rename({extname: ".min.css"}))
            // .pipe($.GP.rename(".min.css"))
            .pipe($.GP.sourcemaps.write())
            .pipe($.gulp.dest($.path.prod.css))
            .on('end', $.bs.reload)
    )