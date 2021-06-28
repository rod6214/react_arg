#!/usr/bin/env node
'use strict'
const jest = require('jest');
const config = require('../package.json').jest;
const path = require('path');

let argv = process.argv.slice(2);

function getJestAliases(options = {}) {
    const baseUrl = options.baseUrl;
  
    if (!baseUrl) {
      return {};
    }
  
    const baseUrlResolved = path.resolve(paths.appPath, baseUrl);
  
    if (path.relative(paths.appPath, baseUrlResolved) === '') {
      return {
        '^src/(.*)$': '<rootDir>/src/$1',
      };
    }
  }
  

const createJestConfig = (resolve) => {
    config.transform = {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': resolve(
          'transform/babelTransform.js'
        ),
        '^.+\\.css$': resolve('transform/cssTransform.js'),
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': resolve(
          'transform/fileTransform.js'
        ),
    },
    config.moduleNameMapper = {
        '^react-native$': 'react-native-web',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        ...(getJestAliases || {}),
    }
    return config;
}

argv.push(
    '--config',
    JSON.stringify(
        createJestConfig(
            relativePath => path.resolve(__dirname, '..', relativePath)
        )
    )
);
// console.log(argv)
jest.run(argv).then(()=>{}, ()=>{});
