#!/usr/bin/env node
'use strict'
var webpackConfig = require('../webpack.config');
const webpack = require('webpack');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {});
