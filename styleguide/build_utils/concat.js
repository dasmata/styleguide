const through = require('through');
const path = require('path');
const gutil = require('gulp-util');

const { PluginError, File } = gutil;

module.exports = function (fileName, opt) {
  if (!fileName) throw new PluginError('concat build utils', 'Missing fileName option for gulp-concat');
  if (!opt) opt = {};
  if (!opt.newLine) opt.newLine = gutil.linefeed;
  if (!opt.before) opt.before = '';
  if (!opt.after) opt.after = '';
  if (!opt.trim) opt.trim = false;

  const buffer = [];
  let firstFile = null;

  function bufferContents(file) {
    if (file.isNull()) return; // ignore
    if (file.isStream()) return this.emit('error', new PluginError('concat build utils', 'Streaming not supported'));

    if (!firstFile) firstFile = file;

    let content = null;
    if (opt.trim) {
      content = file.contents.toString('utf8').trim();
    } else {
      content = file.contents.toString('utf8');
    }

    buffer.push(content);
  }

  function endStream() {
    if (buffer.length === 0) return this.emit('end');

    const joinedContents = opt.before + buffer.join(opt.newLine) + opt.after;

    const joinedPath = path.join(firstFile.base, fileName);

    const joinedFile = new File({
      cwd: firstFile.cwd,
      base: firstFile.base,
      path: joinedPath,
      contents: Buffer.from(joinedContents)
    });

    this.emit('data', joinedFile);
    this.emit('end');
  }

  return through(bufferContents, endStream);
};
