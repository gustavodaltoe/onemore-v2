import { Fonts } from '@/constants/theme';

export const uiTokens = {
  colors: {
    background: '#050505',
    surface: '#111111',
    surfaceElevated: '#161616',
    border: '#1A1A1A',
    text: '#FFFFFF',
    textMuted: '#71717A',
    textSecondary: '#A1A1AA',
    primary: '#4169E1',
    primaryMuted: 'rgba(65, 105, 225, 0.2)',
    destructive: '#EF4444',
    success: '#22C55E',
    warning: '#F59E0B',
  },
  radii: {
    sm: 8,
    md: 12,
    lg: 24,
    pill: 999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  fonts: {
    body: Fonts.sans,
    heading: Fonts.rounded,
    mono: Fonts.mono,
  },
} as const;
