import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DashboardHeader } from '@/components/ui/dashboard-header';
import { uiTokens } from '@/components/ui/design-tokens';
import { SectionHeader } from '@/components/ui/section-header';

const pillars = [
  {
    description: 'Fast routine authoring, client context, and billing-safe web flows.',
    tags: ['Web-first', 'Professional'],
    title: 'Coach workspace',
  },
  {
    description: 'Focused workout execution with clear session state and progress history.',
    tags: ['Mobile-first', 'Client'],
    title: 'Workout execution',
  },
  {
    description: 'Single ecosystem that supports coached clients and self-managed training.',
    tags: ['Shared account', 'B2C-ready'],
    title: 'Flexible identity model',
  },
] as const;

const priorities = [
  {
    body: 'Email auth, profile switching, and first-time setup for professionals.',
    eyebrow: '01',
    title: 'Onboarding',
  },
  {
    body: 'Templates, cloning rules, workout structure, and client assignment flows.',
    eyebrow: '02',
    title: 'Routine builder',
  },
  {
    body: 'Live session timer, exercise navigation, notes, and finish-session feedback.',
    eyebrow: '03',
    title: 'Workout flow',
  },
] as const;

const stack = [
  { label: 'Native app', value: 'Expo + React Native' },
  { label: 'Backend API', value: 'NestJS' },
  { label: 'Data layer', value: 'PostgreSQL + Drizzle' },
  { label: 'Authentication', value: 'better-auth' },
] as const;

const rules = [
  'Templates clone into independent routines.',
  'Professional billing stays on web only.',
  'Clients stay free across linked professionals.',
] as const;

export default function LaunchpadScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <DashboardHeader greeting="Build next," initials="OM" name="Launchpad" />

        <View style={styles.heroCopy}>
          <Text style={styles.heroTitle}>Product direction in app form.</Text>
          <Text style={styles.heroDescription}>
            Temporary workspace for core pillars, rollout order, and rules that shape One More V2.
          </Text>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Profiles" />
          <View style={styles.badgeRow}>
            <Badge>Professional</Badge>
            <Badge variant="secondary">Client</Badge>
            <Badge variant="outline">Self-managed</Badge>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Product Pillars" />
          <View style={styles.stack}>
            {pillars.map((pillar) => (
              <Card key={pillar.title} variant="elevated">
                <CardHeader style={styles.cardHeader}>
                  <View style={styles.badgeRow}>
                    {pillar.tags.map((tag, index) => (
                      <Badge key={tag} variant={index === 0 ? 'default' : 'secondary'}>
                        {tag}
                      </Badge>
                    ))}
                  </View>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Initial Scope" />
          <View style={styles.stack}>
            {priorities.map((priority) => (
              <Card key={priority.title}>
                <CardHeader>
                  <Text style={styles.eyebrow}>{priority.eyebrow}</Text>
                  <CardTitle>{priority.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text style={styles.bodyText}>{priority.body}</Text>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Launch Stack" />
          <Card variant="elevated">
            <CardContent>
              <View style={styles.stack}>
                {stack.map((item) => (
                  <View key={item.label} style={styles.row}>
                    <Text style={styles.rowLabel}>{item.label}</Text>
                    <Text style={styles.rowValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Non-negotiables" />
          <Card>
            <CardContent>
              <View style={styles.stack}>
                {rules.map((rule, index) => (
                  <Text key={rule} style={styles.ruleText}>
                    {index + 1}. {rule}
                  </Text>
                ))}
              </View>
            </CardContent>
            <CardFooter>
              <Badge variant="success">Release framing</Badge>
              <Badge variant="outline">docs/project.md</Badge>
            </CardFooter>
          </Card>
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
  bodyText: {
    color: uiTokens.colors.textSecondary,
    fontFamily: uiTokens.fonts.body,
    fontSize: 14,
    lineHeight: 20,
  },
  cardHeader: {
    gap: uiTokens.spacing.sm,
  },
  contentContainer: {
    gap: uiTokens.spacing.xxl,
    paddingBottom: 120,
    paddingHorizontal: uiTokens.spacing.xl,
    paddingTop: uiTokens.spacing.md,
  },
  eyebrow: {
    color: uiTokens.colors.primary,
    fontFamily: uiTokens.fonts.mono,
    fontSize: 12,
  },
  heroCopy: {
    gap: uiTokens.spacing.sm,
  },
  heroDescription: {
    color: uiTokens.colors.textSecondary,
    fontFamily: uiTokens.fonts.body,
    fontSize: 14,
    lineHeight: 20,
  },
  heroTitle: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.heading,
    fontSize: 22,
    fontWeight: '700',
  },
  row: {
    gap: uiTokens.spacing.xs,
  },
  rowLabel: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  rowValue: {
    color: uiTokens.colors.text,
    fontFamily: uiTokens.fonts.body,
    fontSize: 15,
    fontWeight: '600',
  },
  ruleText: {
    color: uiTokens.colors.textSecondary,
    fontFamily: uiTokens.fonts.body,
    fontSize: 14,
    lineHeight: 20,
  },
  safeArea: {
    backgroundColor: uiTokens.colors.background,
    flex: 1,
  },
  section: {
    gap: uiTokens.spacing.md,
  },
  stack: {
    gap: uiTokens.spacing.md,
  },
});
