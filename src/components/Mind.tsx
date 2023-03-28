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
  onDelete?: () => void;
  setChecked?: () => void;
  styleProps?: ViewStyle;
}

export default function MindView({
  text,
  completed,
  onDelete,
  setChecked,
  styleProps,
}: MindProps) {
  return (
    <Pressable
      style={{...styleProps, ...styles.mindContainer}}
      onPress={setChecked}>
      <View style={styles.mindView}>
        {completed ? (
          <CheckIcon width={18} height={18} />
        ) : (
          <CrossIcon width={18} height={18} />
        )}
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
