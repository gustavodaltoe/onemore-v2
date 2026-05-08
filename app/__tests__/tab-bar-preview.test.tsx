import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import { TabBarPreview } from '@/components/ui/tab-bar-preview';
import { uiTokens } from '@/components/ui/design-tokens';

const items = [
  { key: 'home', label: 'Home', icon: 'home-variant' as const },
  { key: 'clients', label: 'Clients', icon: 'account-group-outline' as const },
  { key: 'routines', label: 'Routines', icon: 'clipboard-text-outline' as const },
];

describe('TabBarPreview', () => {
  it('renders every tab label', () => {
    render(<TabBarPreview activeKey="home" items={items} />);

    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Clients')).toBeTruthy();
    expect(screen.getByText('Routines')).toBeTruthy();
  });

  it('applies active label styles to selected tab only', () => {
    render(<TabBarPreview activeKey="clients" items={items} />);

    expect(screen.getByText('Clients').props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: uiTokens.colors.text })])
    );
    expect(screen.getByText('Home').props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: uiTokens.colors.textMuted })])
    );
  });
});
