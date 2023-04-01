import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import color from '../../styles/color';
import typography from '../../styles/typography';

interface ButtonProps {
  children: React.ReactNode;
  styleProps?: ViewStyle;
  onPress?: () => void;
}
export default function Button({children, styleProps, onPress}: ButtonProps) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{...styleProps, ...styles.container}}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary[80],
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...typography.subtitle2,
  },
});
