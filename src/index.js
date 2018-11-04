const packageJson = require('../package.json')
function getRules() {
    return packageJson['repo-baseline']
}

module.exports = {
    getRules
}