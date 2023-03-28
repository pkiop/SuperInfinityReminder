import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import CheckIcon from '../Icons/check.svg';
import CrossIcon from '../Icons/cross.svg';

export type Mind = {
  id?: string;
  text: string;
  checked?: boolean;
  setChecked?: () => void;
};

export default function MindView({text, checked, setChecked}: Mind) {
  return (
    <Pressable style={styles.mind} onPress={setChecked}>
      <Text style={styles.mindText}>{text}</Text>
      {checked ? (
        <CheckIcon width={20} height={20} />
      ) : (
        <CrossIcon width={20} height={20} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mind: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    height: 56,
    paddingHorizontal: 16,
    paddingVertical: 14,
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
