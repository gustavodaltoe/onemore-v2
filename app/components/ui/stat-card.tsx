import { StyleSheet, Text } from 'react-native';

import { AppIcon, AppIconName } from '@/components/ui/app-icon';
import { Card } from '@/components/ui/card';
import { uiTokens } from '@/components/ui/design-tokens';

type StatCardProps = {
  accentColor?: string;
  icon: AppIconName;
  label: string;
  value: string;
};

export function StatCard({
  accentColor = uiTokens.colors.primary,
  icon,
  label,
  value,
}: StatCardProps) {
  return (
    <Card style={styles.card}>
      <AppIcon color={accentColor} name={icon} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: uiTokens.spacing.sm,
    minHeight: 112,
  },
  label: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 11,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  value: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.heading,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 34,
  },
});
