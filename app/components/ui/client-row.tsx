import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { AppIcon } from '@/components/ui/app-icon';
import { uiTokens } from '@/components/ui/design-tokens';

type ClientRowProps = {
  avatarColor: string;
  name: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  subtitle: string;
};

export function ClientRow({ avatarColor, name, onPress, style, subtitle }: ClientRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed ? styles.pressed : undefined, style]}>
      <View style={[styles.avatar, { backgroundColor: avatarColor }]} />
      <View style={styles.copyWrap}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <AppIcon color={uiTokens.colors.textMuted} name="chevron-right" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: uiTokens.radii.pill,
    height: 40,
    width: 40,
  },
  copyWrap: {
    flex: 1,
    gap: 2,
  },
  name: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.body,
    fontSize: 15,
    fontWeight: '500',
  },
  pressed: {
    opacity: 0.88,
  },
  row: {
    alignItems: 'center',
    backgroundColor: uiTokens.colors.surface,
    borderColor: uiTokens.colors.border,
    borderRadius: uiTokens.radii.sm,
    borderWidth: 1,
    flexDirection: 'row',
    gap: uiTokens.spacing.md,
    padding: 14,
  },
  subtitle: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 12,
  },
});
