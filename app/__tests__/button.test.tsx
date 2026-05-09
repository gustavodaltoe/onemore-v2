import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { Button } from '@/components/ui/button';
import { uiTokens } from '@/components/ui/design-tokens';

describe('Button', () => {
  it('renders label and icon', () => {
    render(<Button icon="plus">New Routine</Button>);

    const label = screen.getByText('New Routine');
    const button = screen.getByRole('button');

    expect(label).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('fires onPress when tapped', () => {
    const onPress = jest.fn();

    render(<Button onPress={onPress}>Create</Button>);

    fireEvent.press(screen.getByRole('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('uses ghost variant text color', () => {
    render(<Button variant="ghost">Details</Button>);

    expect(screen.getByText('Details').props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: uiTokens.colors.primary })])
    );
  });

  it('does not fire onPress when disabled', () => {
    const onPress = jest.fn();

    render(
      <Button disabled onPress={onPress}>
        Disabled
      </Button>
    );

    fireEvent.press(screen.getByRole('button'));

    expect(onPress).not.toHaveBeenCalled();
  });
});
