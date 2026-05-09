import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { ClientRow } from '@/components/ui/client-row';

describe('ClientRow', () => {
  it('renders client name and subtitle', () => {
    render(
      <ClientRow
        avatarColor="#4169E1"
        name="Maria Rodrigues"
        subtitle="Last session 2 hours ago"
      />
    );

    expect(screen.getByText('Maria Rodrigues')).toBeTruthy();
    expect(screen.getByText('Last session 2 hours ago')).toBeTruthy();
  });

  it('fires onPress when row is tapped', () => {
    const onPress = jest.fn();

    render(<ClientRow avatarColor="#4169E1" name="Maria Rodrigues" onPress={onPress} subtitle="Last session 2 hours ago" />);

    fireEvent.press(screen.getByRole('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
