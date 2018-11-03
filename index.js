const packageJson = require('./package.json')
function getRules() {
    return packageJson['repo-baseline']
}

console.log(getRules())

module.exports = {
    getRules
}