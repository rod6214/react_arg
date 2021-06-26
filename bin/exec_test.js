#!/usr/bin/env node
'use strict'
const jest = require('jest');
const config = require('../package.json').jest;
const path = require('path');

let argv = process.argv.slice(2);

const createJestConfig = (resolve) => {
    config.transform['^.+\\.(js|jsx|mjs|cjs|ts|tsx)$'] = resolve("config/babelTransform.js");
    config.moduleNameMapper = {
        "\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": resolve("__mocks__/fileMock.js"),
        "\\\\.(css|less|scss)$": resolve("__mocks__/styleMock.js")
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

jest.run(argv).then(()=>{}, ()=>{});
