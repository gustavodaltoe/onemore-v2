import { StyleSheet, Text, View } from 'react-native';

import { uiTokens } from '@/components/ui/design-tokens';

type DashboardHeaderProps = {
  greeting: string;
  initials: string;
  name: string;
};

export function DashboardHeader({ greeting, initials, name }: DashboardHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.copyWrap}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: uiTokens.colors.primary,
    borderRadius: uiTokens.radii.pill,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  avatarText: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.body,
    fontSize: 13,
    fontWeight: '700',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copyWrap: {
    gap: 2,
  },
  greeting: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 13,
  },
  name: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.heading,
    fontSize: 28,
    fontWeight: '700',
  },
});
