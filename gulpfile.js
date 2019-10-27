const gulp = require('gulp');
const fs = require('fs');
const through = require('through2');
const path = require('path');
const cp = require('child_process');
const Vinyl = require('vinyl');
const util = require('gulp-util');

const concat = require('./styleguide/build_utils/concat');

const srcDir = './components';

const ensureDirExists = (dirPath, cb) => {
  fs.mkdir(dirPath, (err) => {
    if (err && err === 'EEXISTS') {
      cb();
    } else {
      cb(err);
    }
  });
};

const readSubfolders = () => through.obj(function (file, enc, cb) {
  gulp.src([`${file.path}/*`])
    .pipe(through.obj((subFile, sbEnc, subCb) => {
      this.push({
        category: file,
        component: subFile
      });
      subCb();
    }))
    .on('data', () => {})
    .on('end', () => {
      cb();
    });
});

const createModuleConfig = () => through.obj((entry, enc, cb) => {
  const destPath = path.join('.', 'styleguide', 'components', entry.category.basename);
  util.log('building module', `${util.colors.green(`${entry.category.basename}/${entry.component.basename}`)}`);
  ensureDirExists(destPath, () => {
    gulp.src([path.join(entry.component.path, 'data/*.json')])
      .pipe(concat(`${entry.component.basename}.json`, {
        before: '[',
        newLine: ',\n',
        after: ']',
        trim: true,
      }))
      .pipe(gulp.dest(destPath))
      .on('end', () => {
        cb(null, entry);
      });
  });
});

const reduceMenu = (categories) => through.obj((entry, enc, cb) => {
  categories[entry.category.basename] = categories[entry.category.basename] || [];
  categories[entry.category.basename].push({
    label: entry.component.basename,
    action: `/component?type=${entry.category.basename}&name=${entry.component.basename}`,
  });
  cb(null, entry);
});

const createMenu = () => {
  const categories = {};
  return gulp.src([`${srcDir}/*`])
    .pipe(readSubfolders())
    .pipe(reduceMenu(categories))
    .pipe(createModuleConfig())
    .on('end', () => {
      fs.writeFileSync('./styleguide/nav.json', JSON.stringify(categories, null, 2));
    });
};

const runStyleguide = () => {
  const n = cp.spawn('node', ['./node_modules/next/dist/bin/next', 'dev']);
  n.stderr
    .pipe(process.stdout);

  return n.stdout
    .pipe(process.stdout);
};

const rebuildModuleConfig = (file) => {
  util.log('Starting', `${util.colors.cyan('rebuildModuleConfig')}...`);
  const dir = path.dirname(path.dirname(file));
  const start = new Date();
  return gulp.src([`${dir}`])
    .pipe(through.obj(function (subFile, sbEnc, subCb) {
      const category = new Vinyl({
        cwd: __dirname,
        path: path.dirname(dir)
      });
      this.push({
        category,
        component: subFile
      });
      subCb();
    }))
    .pipe(createModuleConfig())
    .pipe(through.obj((subFile, sbEnc, cb) => {
      const end = new Date();
      util.log('Finished', `${util.colors.cyan('rebuildModuleConfig')} after ${util.colors.magenta(end - start)}`, util.colors.magenta('ms'));
      cb();
    }));
};

const dev = gulp.series(createMenu, runStyleguide);

gulp.task('dev', gulp.parallel(dev, () => {
  gulp.watch('./components/**/*.json')
    .on('change', rebuildModuleConfig);
}));
