const path = require('path');

function currentInstanceIsModule() {
    return __dirname.search(/(\\node_modules\\)/i) != -1;
}

function getRootDirectory() {
    if (currentInstanceIsModule()) {
        return __dirname.substring(0, __dirname.indexOf('node_modules') - 1);
    }

    return path.resolve(__dirname, '..');
}

module.exports = {
    getRootDirectory,
    currentInstanceIsModule
}
