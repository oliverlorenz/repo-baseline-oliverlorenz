const packageJson = require('../package.json');
const fileAvailable = require('repo-baseline-file-available');

function getRules() {
    return packageJson['repo-baseline']
}

function run(repoPath, options, callback) {
    return fileAvailable(repoPath, fileAvailable, options)
}

module.exports = {
    getRules,
    run
}