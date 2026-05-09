import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import LaunchpadScreen from '@/app/(tabs)/explore';

describe('LaunchpadScreen', () => {
  it('renders product framing content', () => {
    render(<LaunchpadScreen />);

    expect(screen.getByText('Launchpad')).toBeTruthy();
    expect(screen.getByText('Product Pillars')).toBeTruthy();
    expect(screen.getByText('Routine builder')).toBeTruthy();
    expect(screen.getByText('Shared account')).toBeTruthy();
  });
});
