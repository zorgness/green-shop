module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  globals: {
    transform: {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  transformIgnorePatterns: ["node_modules/(?!troublesome-dependency/.*)"],
};
