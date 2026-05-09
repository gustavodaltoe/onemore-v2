import { StyleSheet, Text, View } from 'react-native';

import { AppIcon, AppIconName } from '@/components/ui/app-icon';
import { uiTokens } from '@/components/ui/design-tokens';

type TabItem = {
  icon: AppIconName;
  key: string;
  label: string;
};

type TabBarPreviewProps = {
  activeKey: string;
  items: TabItem[];
};

export function TabBarPreview({ activeKey, items }: TabBarPreviewProps) {
  return (
    <View style={styles.shell}>
      {items.map((item) => {
        const active = item.key === activeKey;

        return (
          <View key={item.key} style={[styles.item, active ? styles.activeItem : undefined]}>
            <AppIcon
              color={active ? uiTokens.colors.text : uiTokens.colors.textMuted}
              name={item.icon}
            />
            <Text style={[styles.label, active ? styles.activeLabel : undefined]}>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  activeItem: {
    backgroundColor: uiTokens.colors.primary,
  },
  activeLabel: {
    color: uiTokens.colors.text,
  },
  item: {
    alignItems: 'center',
    borderRadius: 26,
    flex: 1,
    gap: uiTokens.spacing.xs,
    justifyContent: 'center',
    minHeight: 54,
  },
  label: {
    color: uiTokens.colors.textMuted,
    fontFamily: uiTokens.fonts.body,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  shell: {
    backgroundColor: uiTokens.colors.surface,
    borderColor: uiTokens.colors.border,
    borderRadius: 36,
    borderWidth: 1,
    flexDirection: 'row',
    gap: uiTokens.spacing.xs,
    padding: uiTokens.spacing.xs,
  },
});
