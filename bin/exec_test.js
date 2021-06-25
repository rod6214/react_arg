#!/usr/bin/env node
'use strict'
const jest = require('jest');

let argv = process.argv.slice(2);
jest.run(argv).then(()=>{}, ()=>{});
