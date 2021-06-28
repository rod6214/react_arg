'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.default.createTransformer({
    presets: [
        ["@babel/preset-env", {
            "corejs": "2",
            "useBuiltIns": "usage"
        }],   
        ["@babel/preset-react", {
            "runtime": "automatic"
        }]
    ],
    babelrc: false,
    configFile: false,
  });
