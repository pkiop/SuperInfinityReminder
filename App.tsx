import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import MindView from './src/components/Mind';
import MindInput from './src/components/MindInput';
import {Mind} from './types/mind.interface';

const mind1: Mind = {
  id: '123',
  text: '비난하지 않기',
  completed: false,
};

function App(): JSX.Element {
  const [mindList, setMindList] = useState<Mind[]>([mind1]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <View style={styles.innerContainer}>
        <ScrollView style={styles.mindList}>
          {mindList.map(mind => (
            <MindView
              key={mind.id}
              {...mind}
              styleProps={styles.mindView}
              setChecked={() => {
                setMindList(s =>
                  s.map(v => {
                    if (v.id === mind.id) {
                      return {
                        ...v,
                        completed: !v.completed,
                      };
                    }
                    return v;
                  }),
                );
              }}
              onDelete={() => {
                setMindList(s => s.filter(v => v.id !== mind.id));
              }}
            />
          ))}
        </ScrollView>
        <View style={styles.mindInput}>
          <MindInput
            onAdd={text => {
              if (mindList.some(s => s.text === text)) {
                return Alert.alert('이미 있는 Mind입니다.');
              }
              setMindList(s => [
                ...s,
                {id: '1' + text, text, completed: false},
              ]);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: '100%',
  },
  innerContainer: {
    flex: 1,
    margin: 24,
    padding: 28,
    backgroundColor: '#D9D9D9',
  },
  mindList: {},
  mindView: {
    marginBottom: 18,
  },
  mindInput: {
    marginTop: 'auto',
  },
});

export default App;
