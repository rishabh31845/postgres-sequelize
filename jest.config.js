module.exports = {
  roots: [
    "./src"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["./jest.setup.js"],
  modulePathIgnorePatterns: ["./*.router.test.ts"],
  testResultsProcessor: "jest-sonar-reporter"
};