import { Pressable, StyleSheet, Text, View } from 'react-native';

import { uiTokens } from '@/components/ui/design-tokens';

type SectionHeaderProps = {
  actionLabel?: string;
  onActionPress?: () => void;
  title: string;
};

export function SectionHeader({ actionLabel, onActionPress, title }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        <Pressable accessibilityRole="button" hitSlop={8} onPress={onActionPress}>
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    color: uiTokens.colors.primary,
    fontFamily: uiTokens.fonts.body,
    fontSize: 13,
    fontWeight: '500',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
