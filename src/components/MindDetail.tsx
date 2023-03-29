import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Mind} from '../../types/mind.interface';
import {CheckIcon, CrossIcon} from '../Icons';
import minds from '../models/minds';
import color from '../styles/color';
import typography from '../styles/typography';
import Button from './common/Button';

interface MindDetailProps extends Mind {}

export default function MindDetail({id, text, completed}: MindDetailProps) {
  const navigation = useNavigation();
  const [mind, setMind] = useState<Mind>({id, text, completed});

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.mainText}
        value={mind.text}
        onChangeText={v => {
          setMind(s => ({
            ...s,
            text: v,
          }));
        }}
      />
      <TouchableOpacity
        style={styles.completedTouchable}
        activeOpacity={0.3}
        onPress={() => {
          setMind(s => ({
            ...s,
            completed: !s.completed,
          }));
        }}>
        {mind.completed ? (
          <CheckIcon width={18} height={18} />
        ) : (
          <CrossIcon width={18} height={18} />
        )}
      </TouchableOpacity>
      <Button
        styleProps={styles.saveButton}
        onPress={async () => {
          await minds.setMind(mind);
          navigation.goBack();
        }}>
        Save
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.contentBackground,
    marginHorizontal: 24,
    marginBottom: 24,
    marginTop: 4,
    padding: 24,
    gap: 18,
  },
  mainText: {
    ...typography.subtitle2,
    flex: 1,
  },
  completedTouchable: {
    width: 30,
    padding: 4,
  },
  completed: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  saveButton: {
    marginTop: 'auto',
  },
});
