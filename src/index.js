const packageJson = require('../package.json');
const RuleSet = require('repo-baseline-ruleset');

module.exports = (pluginManager, repoPath) => {
    return RuleSet(pluginManager, repoPath, packageJson['repo-baseline']);
}