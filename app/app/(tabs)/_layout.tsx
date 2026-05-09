import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { AppIcon } from '@/components/ui/app-icon';
import { uiTokens } from '@/components/ui/design-tokens';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: uiTokens.colors.text,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: uiTokens.colors.textMuted,
        tabBarItemStyle: styles.item,
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBar,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AppIcon color={String(color)} name="home-variant" size={24} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Launchpad',
          tabBarIcon: ({ color }) => (
            <AppIcon color={String(color)} name="clipboard-text-outline" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 4,
  },
  label: {
    fontFamily: uiTokens.fonts.body,
    fontSize: 12,
    fontWeight: '600',
  },
  tabBar: {
    backgroundColor: uiTokens.colors.surface,
    borderTopColor: uiTokens.colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: 76,
    paddingBottom: 10,
    paddingTop: 8,
  },
});
