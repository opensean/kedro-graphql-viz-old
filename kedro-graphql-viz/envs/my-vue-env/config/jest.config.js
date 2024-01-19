const vueJestConfig = require('@bitdev/vue.dev-services.tester.vue-jest-config');
const {
  generateNodeModulesPattern,
} = require('@teambit/dependencies.modules.packages-excluder');

// Override the Jest config to ignore transpiling from specific folders
const packagesToExclude = ['@teambit', '@apollo'];
//const packagesToExclude = ['@teambit'];

const transformIgnorePatterns = [
  generateNodeModulesPattern({
    packages: packagesToExclude,
    excludeComponents: true
  }),
]

module.exports = {
  ...vueJestConfig,
  transformIgnorePatterns,
  setupFiles: [__dirname + '/jest.polyfills.js'],
};
