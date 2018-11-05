const packageJson = require('../package.json');
const ruleset = require('repo-baseline-ruleset');
/*
const fileAvailable = require('repo-baseline-file-available');

function getRules() {
    return packageJson['repo-baseline'];
}

function getRulesOfSubmodules() {
    const rules = [];
    packageJson['repo-baseline'].forEach((ruleset) => {
        rules = rules.concat(require(ruleset.name).getRules())
    })
    return rules;
}

function run(repoPath, options, level, callback) {
    console.log(packageJson.name)
    return Promise.resolve(getRules())
        .each((ruleSet) => {
            const package = require(ruleSet.name);
            return package.run(repoPath, ruleSet.options, callback)
        });
}

module.exports = {
    getRules,
    run
}
*/

module.exports = ruleset(packageJson);