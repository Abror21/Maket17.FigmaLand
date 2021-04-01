module.exports = {
    gulp: require("gulp"),
    GP: require("gulp-load-plugins")(), 
    bs: require("browser-sync").create(),
    dev: process.argv.pop() === "dev",
    path: {
        serverDir: "./app/dist",
        tasks: require("./gulp/config"),
        src: {
            html: "./app/src/*.{html,pug,jade}",
            css: "./app/src/scss/*.{scss,css}",
            js: "./app/src/js/*.js",
            fonts: "./app/src/fonts/**/*.{ttf,woff2}",
            img: "./app/src/img/*.{png,jpg,gif,jpeg,webp}",
            svg: "./app/src/img/svg/*.svg",
            library: "./app/src/library/**/*.*",
        },
        prod: {
            html: "./app/dist/",
            css: "./app/dist/css/",
            js: "./app/dist/js/",
            fonts: "./app/dist/fonts/",
            img: "./app/dist/img/",
            svg: "./app/dist/img/svg/",
            library: "./app/dist/library/",
        },
        watch: {
            html: ["./app/src/*.{html,pug,jade}", "./app/src/components/*.{html,pug,jade}"],
            css: "./app/src/scss/*.{css,scss}",
            js: "./app/src/js/**/*.js",
            fonts: "./app/src/fonts/**/*.*",
            img: "./app/src/img/**/*.*",
            svg: "./app/src/img/svg/*.svg",
            library: "./app/src/library/**/*.*",
        }
    }
}