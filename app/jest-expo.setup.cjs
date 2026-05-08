'use strict';

const { createRequire } = require('module');

const appRequire = createRequire(__filename);
const expoRequire = createRequire(require.resolve('jest-expo/src/preset/setup.js'));

const appNativeModulesPath = appRequire.resolve(
  'react-native/Libraries/BatchedBridge/NativeModules'
);
const mockedNativeModules = appRequire(appNativeModulesPath);

jest.doMock('react-native/Libraries/BatchedBridge/NativeModules', () => mockedNativeModules);
jest.doMock(expoRequire.resolve('react-native/Libraries/BatchedBridge/NativeModules'), () => mockedNativeModules);

module.exports = require('jest-expo/src/preset/setup.js');
