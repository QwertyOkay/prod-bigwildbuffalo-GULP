import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
console.log(rootFolder);

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}`,
    files: `${buildFolder}/files/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    svg: `${srcFolder}/img/**/*.svg`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
