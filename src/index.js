const packageJson = require('../package.json');
const fileAvailable = require('repo-baseline-file-available');

function getRules() {
    return packageJson['repo-baseline']
}

function validate(options, callback) {
    return fileAvailable(fileAvailable, options)
}

module.exports = {
    getRules,
    validate
}