import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import AddIcon from '../Icons/add.svg';
import typography from '../styles/typography';

interface MindInputProps {
  onAdd: (text: string) => void;
}

export default function MindInput({onAdd}: MindInputProps) {
  const [text, setText] = useState('wetwet');
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChange={v => {
          setText(v.nativeEvent.text);
        }}
      />
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => {
          text !== '' && onAdd(text);
          setText('');
        }}>
        <AddIcon width={28} height={28} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  input: {
    ...typography.subtitle2,
  },
});
