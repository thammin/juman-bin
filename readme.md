# juman-bin

> [juman](http://nlp.ist.i.kyoto-u.ac.jp/index.php?JUMAN) is a User-Extensible Morphological Analyzer for Japanese.


## Install

```
$ npm install --save juman-bin
```


## Usage

```js
const { exec } = require('child_process');
const juman = require('juman-bin');

exec(`echo ラーメン大好き | ${juman}`, (err, stdout) => {
  console.log(stdout);
  // =>
  // ラーメン らーめん ラーメン 名詞 6 普通名詞 1 * 0 * 0 "代表表記:ラーメン/らーめん カテゴリ:人工物-食べ物 ドメイン:料理・食事"
  // 大好き だいすき 大好きだ 形容詞 3 * 0 ナノ形容詞 22 語幹 1 "代表表記:大好きだ/だいすきだ"
  // EOS
});
```

## License

MIT