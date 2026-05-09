import { StyleSheet, Text, View } from 'react-native';

import { AppIcon } from '@/components/ui/app-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { uiTokens } from '@/components/ui/design-tokens';

type RoutineCardProps = {
  dateRange: string;
  sessions: string;
  status?: string;
  subtitle: string;
  title: string;
};

export function RoutineCard({
  dateRange,
  sessions,
  status = 'Active',
  subtitle,
  title,
}: RoutineCardProps) {
  return (
    <Card>
      <View style={styles.topRow}>
        <CardHeader style={styles.header}>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <Badge>{status}</Badge>
      </View>
      <CardFooter>
        <View style={styles.metaItem}>
          <AppIcon color={uiTokens.colors.textMuted} name="calendar-blank-outline" size={14} />
          <Text style={styles.metaText}>{dateRange}</Text>
        </View>
        <View style={styles.metaItem}>
          <AppIcon color={uiTokens.colors.textMuted} name="pulse" size={14} />
          <Text style={styles.metaText}>{sessions}</Text>
        </View>
      </CardFooter>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  metaItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: uiTokens.spacing.xs,
  },
  metaText: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 12,
  },
  topRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: uiTokens.spacing.md,
    justifyContent: 'space-between',
  },
});
