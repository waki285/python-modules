export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  roots: [
    "<rootDir>/test"
  ],
  
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};