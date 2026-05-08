import { afterEach, jest } from '@jest/globals';

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => {
  const React = require('react');
  const { Text } = require('react-native');

  function MockMaterialCommunityIcons({ name, ...props }: { name: string }) {
    return React.createElement(Text, props, name);
  }

  return {
    __esModule: true,
    default: MockMaterialCommunityIcons,
  };
});

afterEach(() => {
  jest.clearAllMocks();
});
