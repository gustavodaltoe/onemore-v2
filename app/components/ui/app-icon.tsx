import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ComponentProps } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type AppIconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

type AppIconProps = {
  color: string;
  name: AppIconName;
  size?: number;
  style?: StyleProp<TextStyle>;
};

export function AppIcon({ color, name, size = 18, style }: AppIconProps) {
  return <MaterialCommunityIcons color={color} name={name} size={size} style={style} />;
}
