//합성결과를 듣는 화면입니다
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import TopMenuBar from '../../../../component/TopMenuBar';

import { AITrainingStackParamList } from '../../../../types/stacks/AITrainingStackTypes';
import { StackScreenProps } from '@react-navigation/stack';

export type ResultSynthesisProps = StackScreenProps<
  AITrainingStackParamList,
  'ResultSynthesis'
>;

const { width, height } = Dimensions.get('window');

const ResultSynthesis = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topMenuBar}>
        <TopMenuBar />
      </View>
      <View style={{ flex: 80 }}>
        <Text style={styles.titleText}>AI 목소리 학습 결과</Text>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.countdownCircle}>
            <CountdownCircleTimer
              isPlaying={false}
              duration={30}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[30, 20, 10, 0]}>
              {({ remainingTime }) => (
                <Text style={{ fontSize: 30, color: 'black' }}>
                  {Math.floor((remainingTime / 30) * 100)}%
                </Text>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <Text style={styles.noticeText}>목소리 합성 완료!{'\n'}</Text>
            <Text style={styles.noticeText}>한 번 들어볼까요?</Text>
          </View>
          <View
            style={{ alignItems: 'center', justifyContent: 'center' }}></View>
        </View>
      </View>
      <View style={{ flex: 20, alignItems: 'center' }}>
        <TouchableOpacity>
          <Text style={{ color: '#3F3F3F', textDecorationLine: 'underline' }}>
            결과물을 기기에 저장하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultSynthesis;

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
  noticeText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  countdownCircle: {
    marginBottom: 30,
    width: width * 0.8,
    height: height * 0.25,
    alignItems: 'center',
  },
});
