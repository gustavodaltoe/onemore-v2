import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { uiTokens } from '@/components/ui/design-tokens';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'success';

type BadgeProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  variant?: BadgeVariant;
};

const containerVariants: Record<BadgeVariant, ViewStyle> = {
  default: {
    backgroundColor: uiTokens.colors.primaryMuted,
  },
  secondary: {
    backgroundColor: 'rgba(113, 113, 122, 0.18)',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: uiTokens.colors.border,
    borderWidth: StyleSheet.hairlineWidth,
  },
  success: {
    backgroundColor: 'rgba(34, 197, 94, 0.18)',
  },
};

const textVariants: Record<BadgeVariant, TextStyle> = {
  default: {
    color: uiTokens.colors.primary,
  },
  secondary: {
    color: uiTokens.colors.textSecondary,
  },
  outline: {
    color: uiTokens.colors.text,
  },
  success: {
    color: uiTokens.colors.success,
  },
};

export function Badge({ children, style, textStyle, variant = 'default' }: BadgeProps) {
  return (
    <View style={[styles.badge, containerVariants[variant], style]}>
      <Text style={[styles.text, textVariants[variant], textStyle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: uiTokens.radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.body,
    fontSize: 11,
    fontWeight: '600',
  },
});
