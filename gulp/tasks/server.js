export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// ...

function server() {
  browserSync.init({
    server: {
      baseDir: './dist', // Основная папка с компилированными файлами
    },
    routes: {
      '/': './dist', // Маршрут для корневой страницы
      '/about': './dist/about.html', // Маршрут для страницы about.html
      '/contact': './dist/contact.html', // Маршрут для страницы contact.html
      // Добавьте другие страницы и маршруты по необходимости
    },
  });

  // ...
}

// ...

exports.server = server;

gulp.task('default', gulp.series('sass', 'js', 'html', 'server'));

