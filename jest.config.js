module.exports = {
  setupFiles: [
    "<rootDir>/jest.setup.js"
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "/test_suites"
  ]
};