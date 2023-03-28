import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Mind} from '../../types/mind.interface';
import typography from '../styles/typography';

interface MindDetailProps extends Mind {}

export default function MindDetail({id, text, completed}: MindDetailProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {id} {text} {completed ? 'O' : 'X'}의 상세 페이지
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    marginHorizontal: 24,
    marginBottom: 24,
    marginTop: 4,
  },
  mainText: {
    ...typography.subtitle2,
  },
});
