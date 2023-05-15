import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PitchDetect from './VoicePitchDetector';
import TopMenuBar from '../../../component/TopMenuBar';
import CardView from '../../../component/CardView';

import TrebleClef from '../../../assets/TrebleClef.svg';
import BandNotes from '../../../assets/BandNotes.svg';
import BandSpeaker from '../../../assets/BandSpeaker.svg';

import {AnalysisStackParamList} from '../../../types/stacks/AnalysisStackTypes';
const Stack = createNativeStackNavigator<AnalysisStackParamList>();

import AITraining from './AITrainig/AITrainig';

function AnalysisHome({navigation}: any) {
  return (
    <View style={{flex: 1}}>
      <TopMenuBar />
      <View style={{marginLeft: 30}}>
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>분석</Text>
      </View>
      <View style={{flex: 1, margin: 30}}>
        <View style={{flex: 15, gap: 10}}>
          <View style={{flex: 3}}>
            <CardView style={styles.card}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TrebleClef />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.sectionTitle}>중저음 테너</Text>
                <Text style={{fontSize: 13}}>최저음: E#2 / 최고음 G#4</Text>
              </View>
            </CardView>
          </View>
          <View
            style={{
              flex: 4,
              marginTop: 10,
              flexDirection: 'row',
              gap: 10,
            }}>
            <CardView
              style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'flex-start',
              }}
              onPress={() => navigation.navigate('PitchDetect')}>
              <Text style={styles.sectionTitle}>목소리{'\n'}음역 측정</Text>
              <Text style={{fontSize: 13}}>
                간단한 테스트로 내 음역대를 알아봐요
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <BandSpeaker />
              </View>
            </CardView>
            <CardView
              style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'flex-start',
              }}
              onPress={() => navigation.navigate('AITrainingCenter')}>
              <Text style={styles.sectionTitle}>AI{'\n'}음성 합성</Text>
              <Text style={{fontSize: 13}}>
                내 목소리를 학습한 AI로 노래를 미리 들어봐요
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <BandNotes />
              </View>
            </CardView>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
}

// 스타일 시트
const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 5,
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});

//TODO: 아래 컴포넌트는 새로운 화면이 될 것이기 때문에 새로운 파일로 분리하기, ex) PitchDetect.tsx

function Analysis() {
  return (
    <Stack.Navigator initialRouteName="AnalysisHome">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="AnalysisHome" component={AnalysisHome} />
        <Stack.Screen name="PitchDetect" component={PitchDetect} />
        <Stack.Screen name="AITrainingCenter" component={AITraining} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Analysis;
