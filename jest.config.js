/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  transformIgnorePatterns: [
    '<rootDir>/bower_components/',
    '<rootDir>/node_modules/',
  ],
  // moduleNameMapper qui fait la diff pour pouvoir mocker le scss https://jestjs.io/docs/webpack#mocking-css-modules 
  // avec install de npm install --save-dev identity-obj-proxy
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.jest.json",
      },
    ],
  },
};

// config qui test mais qui ne vérifie pas le typage. 

// const nextJest = require("next/jest");

// const createJestConfig = nextJest({
//   dir: "./",
// });

// /** @type {import('jest').Config} */
// const customJestConfig = {
//   preset: "ts-jest",
//   moduleDirectories: ["node_modules", "<rootDir>/"],
//   testEnvironment: "jest-environment-jsdom",
//   setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
//   transform: {
//     "^.+\\.tsx?$": [
//       "ts-jest",
//       {
//         tsconfig: "./tsconfig.jest.json",
//       },
//     ],
//   },
// };
// module.exports = createJestConfig(customJestConfig);
