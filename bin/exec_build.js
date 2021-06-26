#!/usr/bin/env node
'use strict'
var webpackConfig = require('../webpack.config');
const webpack = require('webpack');
const path = require('path');
const util = require('../utils/paths');

webpackConfig.output.path = path.resolve(util.getRootDirectory(), 'dist');

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {});
