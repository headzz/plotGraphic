module.exports = {
  setupFilesAfterEnv: ["./rtl.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/cypress/"],
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "@testing-library$": "<rootDir>/node_modules/@testing-library/$1/$1",
    "^@components(.*)$": "<rootDir>/components$1",
    "^@configuration(.*)$": "<rootDir>/configuration$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@services(.*)$": "<rootDir>/services$1",
  },
};
