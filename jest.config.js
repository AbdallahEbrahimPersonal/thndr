module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/react-native/extend-expect',
    '<rootDir>/jest.setup.js',
  ],
  transform: {
    '^.+\\.(js)$': [
      'babel-jest',
      { plugins: ['babel-plugin-syntax-hermes-parser'] },
    ],
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library|@react-navigation|@tanstack|@tamagui|react-native-.*)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@env$': '<rootDir>/env.d.ts',
    '^test-utils$': '<rootDir>/test-utils.tsx',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.spec.json',
    },
  },
};
