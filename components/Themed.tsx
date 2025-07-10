/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  FlatList as DefaultFlatList,
  Button as DefaultButton,
  Pressable as DefaultPressable,
  PressableProps,
  StyleSheet,
} from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type FlatListProps = ThemeProps & DefaultFlatList['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];
export type CustomButtonProps = ThemeProps & PressableProps;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SecondaryView(props: ViewProps) {
  const { style, lightColor, darkColor, ...rest } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor ?? '#fafafa', dark: darkColor ?? '#000' },
    'background'
  );
  const setBordorColor = '#daf5ff99';
  const borderColor = useThemeColor(
    { light: setBordorColor, dark: setBordorColor },
    'background'
  );

  return (
    <DefaultView
      style={[
        {
          backgroundColor,
          borderColor,
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 2,
          paddingVertical: 1,
        },
        style,
      ]}
      {...rest}
    />
  );
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const placeholderColor = useThemeColor(
    { light: '#999999', dark: '#aaa' }, // 필요에 따라 색상 조정
    'text'
  );

  return (
    <DefaultTextInput
      style={[{ color }, style]}
      placeholderTextColor={placeholderColor}
      {...otherProps}
    />
  );
}

export function FlatList(props: FlatListProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <DefaultFlatList style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function Button(props: ButtonProps) {
  const { style, lightColor, darkColor, ...rest } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultButton style={[{ backgroundColor }, style]} {...rest} />;
}

export function CustomButton(props: CustomButtonProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );
  const pressedStyle = (pressed: boolean) => ({
    backgroundColor: pressed ? '#daf5ff99' : '#daf5ff44',
    borderColor: pressed ? '#daf5ff99' : '#daf5ff99',
    borderWidth: 1,
  });

  const flattStyle = StyleSheet.flatten([style]);
  return (
    <DefaultPressable
      style={({ pressed }) => ({
        ...flattStyle,
        ...pressedStyle(pressed),
      })}
      {...otherProps}
    />
  );
}
