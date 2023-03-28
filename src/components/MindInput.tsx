import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import AddIcon from '../Icons/add.svg';
import typography from '../styles/typography';

interface MindInputProps {
  onAdd: (text: string) => void;
}

export default function MindInput({onAdd}: MindInputProps) {
  const textRef = useRef<TextInput>(null);
  const [text, setText] = useState('wetwet');
  const onSubmit = () => {
    text !== '' && onAdd(text);
    setText('');
    textRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={textRef}
        value={text}
        onChange={v => {
          setText(v.nativeEvent.text);
        }}
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity activeOpacity={0.3} onPress={onSubmit}>
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
