module.exports = {
  moduleNameMapper: {
    '\\.(css|scss|png|svg)$': require.resolve('./config/jestMock.js')
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ]
}