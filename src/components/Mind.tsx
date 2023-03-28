import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Mind} from '../../types/mind.interface';
import CheckIcon from '../Icons/check.svg';
import CrossIcon from '../Icons/cross.svg';
import TrashIcon from '../Icons/trash.svg';

interface MindProps extends Mind {
  onPress?: () => void;
  onDelete?: () => void;
  setChecked?: () => void;
  styleProps?: ViewStyle;
}

export default function MindView({
  text,
  completed,
  onPress,
  onDelete,
  setChecked,
  styleProps,
}: MindProps) {
  return (
    <Pressable
      style={{...styleProps, ...styles.mindContainer}}
      onPress={onPress}>
      <View style={styles.mindView}>
        <TouchableOpacity activeOpacity={0.3} onPress={setChecked}>
          {completed ? (
            <CheckIcon width={18} height={18} />
          ) : (
            <CrossIcon width={18} height={18} />
          )}
        </TouchableOpacity>
        <Text style={styles.mindText}>{text}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.3} onPress={onDelete}>
        <TrashIcon width={20} height={20} />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mindContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    height: 56,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  mindView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mindText: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
  },
  mindIcon: {
    fontSize: 20,
  },
});
