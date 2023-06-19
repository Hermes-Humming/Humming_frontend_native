//플레이리스트에서 음악을 선곡하는 화면입니다
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import TopMenuBar from '../../../../component/TopMenuBar';

//get window size
const { width, height } = Dimensions.get('window');

import { AITrainingStackParamList } from '../../../../types/stacks/AITrainingStackTypes';
import { StackScreenProps } from '@react-navigation/stack';

export type SelectMusicProps = StackScreenProps<
  AITrainingStackParamList,
  'SelectMusic'
>;

const SelectMusic = ({ navigation }: SelectMusicProps) => {
  const [clicked, setClicked] = useState<Boolean>(false);

  const propClicked = () => {
    setClicked(!clicked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topMenuBar}>
        <TopMenuBar />
      </View>
      <View style={{ flex: 80 }}>
        <Text style={styles.titleText}>아래 리스트에서 선곡해주세요</Text>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <View style={styles.playListBox}>
            <TouchableOpacity onPress={propClicked}>
              <View
                style={clicked ? styles.selectedMusicProp : styles.musicProp}>
                <Text style={styles.musicTitle}>신호등</Text>
                <Text style={styles.artistName}>이무진</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrainingVoice')}>
            <Text style={styles.nextText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topMenuBar: {
    marginTop: height * 0.01,
  },
  titleText: {
    marginLeft: 30,
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  nextText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BBA5FF',
    marginRight: width * 0.05,
  },
  disableNextText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EFF4F4',
    marginRight: width * 0.05,
  },
  playListBox: {
    width: width * 0.9,
    height: height * 0.4,
    alignItems: 'center',
    borderWidth: 0.2,
    borderRadius: 3,
    borderColor: '#A6B9FF',
  },
  musicProp: {
    alignItems: 'baseline',
    width: width * 0.9,
    borderWidth: 0.2,
    borderRadius: 3,
    borderColor: '#A6B9FF',
  },
  selectedMusicProp: {
    alignItems: 'baseline',
    width: width * 0.9,
    borderWidth: 0.2,
    borderRadius: 3,
    borderColor: '#A6B9FF',
    backgroundColor: '#A6B9FF',
  },
  musicTitle: {
    fontSize: 20,
    color: '#262626',
    marginTop: 3,
    marginBottom: 5,
    marginLeft: 10,
  },
  artistName: {
    fontSize: 15,
    color: '#262626',
    marginTop: 3,
    marginBottom: 5,
    marginLeft: 10,
  },
});
