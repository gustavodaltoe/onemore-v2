import { renderHook } from '@testing-library/react-native';
import { afterEach, describe, expect, it, jest } from '@jest/globals';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

jest.mock('@/hooks/use-color-scheme', () => ({
  useColorScheme: jest.fn(),
}));

const mockedUseColorScheme = jest.mocked(useColorScheme);

afterEach(() => {
  mockedUseColorScheme.mockReset();
});

describe('useThemeColor', () => {
  it('returns the current theme color when no override is provided', () => {
    mockedUseColorScheme.mockReturnValue('dark');

    const { result } = renderHook(() => useThemeColor({}, 'text'));

    expect(result.current).toBe(Colors.dark.text);
  });

  it('uses the light theme when the platform color scheme is unavailable', () => {
    mockedUseColorScheme.mockReturnValue(null);

    const { result } = renderHook(() => useThemeColor({}, 'background'));

    expect(result.current).toBe(Colors.light.background);
  });

  it('prefers explicit theme overrides over the default palette', () => {
    mockedUseColorScheme.mockReturnValue('light');

    const { result } = renderHook(() =>
      useThemeColor({ light: '#fef08a', dark: '#1f2937' }, 'text')
    );

    expect(result.current).toBe('#fef08a');
  });
});
