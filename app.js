// ライブラリの読み込み
var express = require('express');
var app = express();
var bodypaser = require('body-parser');

// body-parserの設定
app.use(bodypaser.urlencoded({ extended: true }));
app.use(bodypaser.json());

// ルーティング
var route = require('./js/');
app.use('/v1', route);

app.listen(process.env.PORT || 3000);
console.log('listen on port 3000');