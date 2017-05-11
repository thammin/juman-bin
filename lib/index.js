'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://github.com/thammin/juman-bin/raw/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
  .src(`${url}darwin/juman`, 'darwin')
  .dest(path.resolve(__dirname, '../vendor', process.platform))
  .use('juman');
