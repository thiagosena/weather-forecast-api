// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const { resolve } = require('path');
// eslint-disable-next-line no-undef
const root = resolve(__dirname, '..');
const rootConfig = resolve(`${root}/jest.config.ts`);

// eslint-disable-next-line no-undef
module.exports = {
   ...rootConfig, ...{
      rootDir: root,
      displayName: 'end2end-tests',
      setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
      testMatch: ['<rootDir>/test/**/*.test.ts']
   }
};
