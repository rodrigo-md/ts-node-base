module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(message) => /(^(WIP|wip):?|\[skip-lint\]$)/.test(message)],
};
