import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import browser from "browser-sync";
import htmlmin from "gulp-htmlmin";
import csso from "postcss-csso";
import rename from "gulp-rename";
import terser from "gulp-terser";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import svgstore from "gulp-svgstore";
import clean from "gulp-clean";

// Styles

export const styles = () => {
    return gulp
        .src("source/sass/style.scss", { sourcemaps: true })
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([autoprefixer(), csso()]))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css", { sourcemaps: "." }))
        .pipe(browser.stream());
};

//HTML

export const htmlminify = () => {
    return gulp
        .src("source/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"));
};

// Scripts

export const script = () => {
    return gulp
        .src("source/js/app.js")
        .pipe(terser())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest("build/js"));
};

//Images

export const optimizeImages = () => {
    return gulp
        .src("source/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/img"));
};

export const copyImages = () => {
    return gulp.src("source/img/*").pipe(gulp.dest("build/img"));
};

//Webp

export const createWebp = () => {
    return gulp
        .src("source/img/*.{jpg,png}")
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest("build/img"));
};

//Sprite

export const sprite = () => {
    return gulp
        .src("source/img/*.svg")
        .pipe(
            svgstore({
                inlineSvg: true,
            })
        )
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img"));
};

//Copy

export const copy = (done) => {
    gulp.src(["source/fonts/*.{woff2,woff}", "source/favicon/*.{ico,png}"], {
        base: "source",
    }).pipe(gulp.dest("build"));
    done();
};

//Clean

export const cleanBuild = () => {
    console.log(gulp.src("build"));
};

// Server

export const server = (done) => {
    browser.init({
        server: {
            baseDir: "build",
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
};

// Watcher

export const watcher = () => {
    gulp.watch("source/sass/**/*.scss", gulp.series(styles));
    gulp.watch("source/*.html").on("change", browser.reload);
};

export default gulp.series(
    styles,
    htmlminify,
    script,
    copyImages,
    sprite,
    copy,
    server,
    watcher
);
