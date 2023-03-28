import React, {useState} from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import MindView, {Mind} from './src/components/Mind';
import MindInput from './src/components/MindInput';

const mind1: Mind = {
  id: '123',
  text: '비난하지 않기',
  checked: false,
};

function App(): JSX.Element {
  const [mindList, setMindList] = useState<Mind[]>([mind1]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <View style={styles.innerContainer}>
        <View style={styles.mindList}>
          {mindList.map(mind => (
            <MindView
              key={mind.id}
              {...mind}
              setChecked={() => {
                setMindList(s =>
                  s.map(v => {
                    if (v.id === mind.id) {
                      return {
                        ...v,
                        checked: !v.checked,
                      };
                    }
                    return v;
                  }),
                );
              }}
            />
          ))}
        </View>
        <View style={styles.mindInput}>
          <MindInput
            onAdd={text => {
              if (mindList.some(s => s.text === text)) {
                return Alert.alert('이미 있는 Mind입니다.');
              }
              setMindList(s => [...s, {id: '1' + text, text, checked: false}]);
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
  mindList: {
    gap: 18,
  },
  mindInput: {
    marginTop: 'auto',
  },
});

export default App;
