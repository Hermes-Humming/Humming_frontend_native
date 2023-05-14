//목소리 학습을 진행하는 화면입니다
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

//우리가 만든 모듈들
import TopMenuBar from '../../../../component/TopMenuBar';
import {Lyrics} from '../../../../data/lyrics';

const {width, height} = Dimensions.get('window');

const TrainingVoice = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topMenuBar}>
        <TopMenuBar />
      </View>
      <View style={{flex: 80}}>
        <Text style={styles.titleText}>AI 목소리 학습</Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.countdownCircle}>
            <CountdownCircleTimer
              isPlaying
              duration={30}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[30, 20, 10, 0]}>
              {({remainingTime}) => (
                <Text style={{fontSize: 30, color: 'black'}}>
                  {Math.floor((remainingTime / 30) * 100)}%
                </Text>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Text style={styles.noticeText}>
              AI 목소리 학습을 진행합니다.{'\n'}
            </Text>
            <Text style={styles.noticeText}>
              아래의 가사를 편안하게 읽어주세요.
            </Text>
          </View>
          <ScrollView style={styles.lyricScrollView}>
            <Lyrics />
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResultSynthesis')}>
            <Text style={styles.nextText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TrainingVoice;

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

  countdownCircle: {
    marginBottom: 30,
    width: width * 0.8,
    height: height * 0.25,
    alignItems: 'center',
  },
  noticeText: {
    color: 'black',
    fontSize: 17,
  },

  lyricScrollView: {
    width: width * 0.8,
    height: height * 0.2,
    marginBottom: 20,
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
});
