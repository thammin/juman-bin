'use strict';
const fs = require('fs');
const path = require('path');
const test = require('ava');
const execa = require('execa');
const tempy = require('tempy');
const binCheck = require('bin-check');
const BinBuild = require('bin-build');
const juman = require('..');

test.cb('rebuild the juman binaries', t => {
  const tmp = tempy.directory();

  new BinBuild()
    .src('http://nlp.ist.i.kyoto-u.ac.jp/DLcounter/lime.cgi?down=http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/juman/juman-7.01.tar.bz2&name=juman-7.01.tar.bz2')
    .cmd(`./configure --with-system-zlib --prefix="${tmp}" --bindir="${tmp}"`)
    .cmd('make install')
    .run(err => {
      t.ifError(err);
      t.true(fs.existsSync(path.join(tmp, 'juman')));
      t.end();
    });
});

test('return path to binary and verify that it is working', async t => {
  t.true(await binCheck(juman, ['--version']));
});
