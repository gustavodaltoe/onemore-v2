import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { uiTokens } from '@/components/ui/design-tokens';

type CardVariant = 'default' | 'elevated';

type CardProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
  variant?: CardVariant;
};

type CardSectionProps = ViewProps & {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

type CardTextProps = TextProps & {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
};

const cardVariants: Record<CardVariant, ViewStyle> = {
  default: {
    backgroundColor: uiTokens.colors.surface,
  },
  elevated: {
    backgroundColor: uiTokens.colors.surfaceElevated,
  },
};

export function Card({ style, variant = 'default', ...props }: CardProps) {
  return <View style={[styles.card, cardVariants[variant], style]} {...props} />;
}

export function CardHeader({ style, ...props }: CardSectionProps) {
  return <View style={[styles.header, style]} {...props} />;
}

export function CardContent({ style, ...props }: CardSectionProps) {
  return <View style={[styles.content, style]} {...props} />;
}

export function CardFooter({ style, ...props }: CardSectionProps) {
  return <View style={[styles.footer, style]} {...props} />;
}

export function CardTitle({ style, ...props }: CardTextProps) {
  return <Text style={[styles.title, style]} {...props} />;
}

export function CardDescription({ style, ...props }: CardTextProps) {
  return <Text style={[styles.description, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    borderColor: uiTokens.colors.border,
    borderRadius: uiTokens.radii.sm,
    borderWidth: 1,
    gap: uiTokens.spacing.md,
    padding: uiTokens.spacing.lg,
  },
  content: {
    gap: uiTokens.spacing.sm,
  },
  description: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 12,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: uiTokens.spacing.lg,
  },
  header: {
    gap: 2,
  },
  title: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.body,
    fontSize: 15,
    fontWeight: '600',
  },
});
