import { render, screen } from '@testing-library/react-native';
import { describe, expect, it, jest } from '@jest/globals';

import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

jest.mock('@/hooks/use-theme-color', () => ({
  useThemeColor: jest.fn(() => '#123456'),
}));

const mockedUseThemeColor = jest.mocked(useThemeColor);

describe('ThemedText', () => {
  it('renders themed text with the requested typography preset', () => {
    render(
      <ThemedText accessibilityRole="header" style={{ textTransform: 'uppercase' }} type="subtitle">
        Hello world
      </ThemedText>
    );

    const text = screen.getByText('Hello world');

    expect(mockedUseThemeColor).toHaveBeenCalledWith({ light: undefined, dark: undefined }, 'text');
    expect(text.props.accessibilityRole).toBe('header');
    expect(text.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: '#123456' }),
        expect.objectContaining({ fontSize: 20, fontWeight: 'bold' }),
        expect.objectContaining({ textTransform: 'uppercase' }),
      ])
    );
  });

  it('applies the link preset styles', () => {
    render(<ThemedText type="link">Read more</ThemedText>);

    const text = screen.getByText('Read more');

    expect(text.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: '#123456' }),
        expect.objectContaining({ lineHeight: 30, fontSize: 16 }),
      ])
    );
  });
});
