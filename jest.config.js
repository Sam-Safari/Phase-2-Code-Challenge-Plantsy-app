module.exports = {
  setupFiles: [
    "<rootDir>/jest.setup.js"
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "/node_modules/"
  ]
};