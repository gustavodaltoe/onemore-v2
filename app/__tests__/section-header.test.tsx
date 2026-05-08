import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { SectionHeader } from '@/components/ui/section-header';

describe('SectionHeader', () => {
  it('renders title and optional action', () => {
    render(<SectionHeader actionLabel="See All" title="Recent Clients" />);

    expect(screen.getByText('Recent Clients')).toBeTruthy();
    expect(screen.getByText('See All')).toBeTruthy();
  });

  it('omits action when actionLabel is absent', () => {
    render(<SectionHeader title="Recent Clients" />);

    expect(screen.queryByRole('button')).toBeNull();
  });

  it('fires action handler when pressed', () => {
    const onActionPress = jest.fn();

    render(
      <SectionHeader actionLabel="See All" onActionPress={onActionPress} title="Recent Clients" />
    );

    fireEvent.press(screen.getByRole('button'));

    expect(onActionPress).toHaveBeenCalledTimes(1);
  });
});
