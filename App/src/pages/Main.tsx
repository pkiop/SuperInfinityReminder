import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import MindView from '../components/Mind';
import MindInput from '../components/MindInput';
import {Mind} from '../../types/mind.interface';
import {HomeScreenProps} from '../routes';
import minds from '../models/minds';

function MainPage({navigation}: HomeScreenProps) {
  const [mindList, setMindList] = useState<Mind[]>([]);
  const fetchData = () => {
    minds.getMinds().then(setMindList);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    minds.setMinds(mindList);
  }, [mindList]);

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
              onPress={() => {
                navigation.navigate('Mind', mind);
              }}
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
                minds.deleteMind(mind.id).then(() => fetchData());
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
              minds.addMind({text, completed: false}).then(() => fetchData());
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

export default MainPage;
