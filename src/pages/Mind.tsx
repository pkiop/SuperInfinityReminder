import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet} from 'react-native';
import {MindScreenProps} from '../routes';
import MindDetail from '../components/MindDetail';

export default function MindPage({route}: MindScreenProps) {
  const {id, text, completed} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <MindDetail id={id} text={text} completed={completed} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
  },
});
