import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ClientRow } from '@/components/ui/client-row';
import { DashboardHeader } from '@/components/ui/dashboard-header';
import { uiTokens } from '@/components/ui/design-tokens';
import { RoutineCard } from '@/components/ui/routine-card';
import { SectionHeader } from '@/components/ui/section-header';
import { StatCard } from '@/components/ui/stat-card';
import { TabBarPreview } from '@/components/ui/tab-bar-preview';

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <DashboardHeader greeting="Good morning," initials="CA" name="Coach Alex" />

        <View style={styles.heroCopy}>
          <Text style={styles.playgroundTitle}>Component Playground</Text>
          <Text style={styles.playgroundDescription}>
            Pencil template rebuilt into reusable React Native pieces with shadcn-style APIs.
          </Text>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Buttons" />
          <View style={styles.buttonRow}>
            <Button icon="plus">New Routine</Button>
            <Button icon="account-plus-outline" variant="secondary">
              Add Client
            </Button>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Badges" />
          <View style={styles.badgeRow}>
            <Badge>Active</Badge>
            <Badge variant="secondary">Draft</Badge>
            <Badge variant="outline">Archived</Badge>
            <Badge variant="success">Completed</Badge>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Card Primitive" />
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Dashboard Card</CardTitle>
              <CardDescription>Reusable shell for richer layouts.</CardDescription>
            </CardHeader>
            <CardContent>
              <Text style={styles.cardBody}>
                Used as base for stats, client rows, and routine summaries.
              </Text>
            </CardContent>
          </Card>
        </View>

        <View style={styles.section}>
          <SectionHeader actionLabel="See All" title="Stats Cards" />
          <View style={styles.statsRow}>
            <StatCard accentColor={uiTokens.colors.destructive} icon="account-group-outline" label="Active Clients" value="24" />
            <StatCard accentColor={uiTokens.colors.destructive} icon="clipboard-text-outline" label="Routines" value="18" />
            <StatCard icon="pulse" label="Sessions" value="142" />
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader actionLabel="See All" title="Client Rows" />
          <View style={styles.stack}>
            <ClientRow
              avatarColor={uiTokens.colors.primary}
              name="Maria Rodrigues"
              subtitle="Last session 2 hours ago"
            />
            <ClientRow
              avatarColor={uiTokens.colors.destructive}
              name="Joao Silva"
              subtitle="Last session yesterday"
            />
            <ClientRow
              avatarColor={uiTokens.colors.textMuted}
              name="Ana Lima"
              subtitle="New client · No sessions yet"
            />
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader actionLabel="See All" title="Routine Cards" />
          <View style={styles.stack}>
            <RoutineCard
              dateRange="Mar 15 - Apr 12"
              sessions="32 sessions"
              subtitle="Maria Rodrigues · 4 workouts"
              title="Hypertrophy Phase A"
            />
            <RoutineCard
              dateRange="Mar 20 - Apr 17"
              sessions="18 sessions"
              subtitle="Joao Silva · 3 workouts"
              title="Strength Foundation"
            />
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Tab Bar Preview" />
          <TabBarPreview
            activeKey="home"
            items={[
              { key: 'home', label: 'Home', icon: 'home-variant' },
              { key: 'clients', label: 'Clients', icon: 'account-group-outline' },
              { key: 'routines', label: 'Routines', icon: 'clipboard-text-outline' },
              { key: 'exercises', label: 'Exercises', icon: 'dumbbell' },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: uiTokens.spacing.sm,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: uiTokens.spacing.md,
  },
  cardBody: {
    color: uiTokens.colors.textSecondary,
    fontFamily: uiTokens.fonts.body,
    fontSize: 14,
    lineHeight: 20,
  },
  contentContainer: {
    gap: uiTokens.spacing.xxl,
    paddingBottom: 120,
    paddingHorizontal: uiTokens.spacing.xl,
    paddingTop: uiTokens.spacing.md,
  },
  heroCopy: {
    gap: uiTokens.spacing.sm,
  },
  playgroundDescription: {
    color: uiTokens.colors.textSecondary,
    fontFamily: uiTokens.fonts.body,
    fontSize: 14,
    lineHeight: 20,
  },
  playgroundTitle: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.heading,
    fontSize: 22,
    fontWeight: '700',
  },
  safeArea: {
    backgroundColor: uiTokens.colors.background,
    flex: 1,
  },
  section: {
    gap: uiTokens.spacing.md,
  },
  stack: {
    gap: 10,
  },
  statsRow: {
    flexDirection: 'row',
    gap: uiTokens.spacing.md,
  },
});
