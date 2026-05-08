import { ReactNode } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { AppIcon, AppIconName } from '@/components/ui/app-icon';
import { uiTokens } from '@/components/ui/design-tokens';

type ButtonVariant = 'default' | 'secondary' | 'ghost';
type ButtonSize = 'default' | 'sm';

type ButtonProps = Omit<PressableProps, 'style'> & {
  children: ReactNode;
  fullWidth?: boolean;
  icon?: AppIconName;
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, ViewStyle> = {
  default: {
    backgroundColor: uiTokens.colors.primary,
  },
  secondary: {
    backgroundColor: uiTokens.colors.surface,
    borderColor: uiTokens.colors.border,
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
};

const textVariants = {
  default: uiTokens.colors.text,
  secondary: uiTokens.colors.text,
  ghost: uiTokens.colors.primary,
} as const;

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  default: {
    minHeight: 52,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  sm: {
    minHeight: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
};

export function Button({
  children,
  disabled,
  fullWidth = true,
  icon,
  size = 'default',
  style,
  variant = 'default',
  ...props
}: ButtonProps) {
  const textColor = textVariants[variant];

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && styles.fullWidth,
        pressed && !disabled ? styles.pressed : undefined,
        disabled ? styles.disabled : undefined,
        style,
      ]}
      {...props}>
      <View style={styles.content}>
        {icon ? <AppIcon color={textColor} name={icon} /> : null}
        <Text style={[styles.text, { color: textColor }]}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: uiTokens.radii.pill,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: uiTokens.spacing.sm,
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    flex: 1,
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  text: {
    fontFamily: uiTokens.fonts.body,
    fontSize: 14,
    fontWeight: '600',
  },
});
