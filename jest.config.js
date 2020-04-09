module.exports = {
  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  // when see image types, load from directory
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/src/utils/fileMock.js',
  },
};
