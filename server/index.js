var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
  stats: {
      colors: true
  }
}));

app.use(require("webpack-hot-middleware")(compiler));

var data = require('./wines.json');

var winesRouter = express.Router();

winesRouter.get('/wines', function (req, res) {
  res.send(data);
});

app.use('/api/v1', winesRouter);

app.listen(8080);
