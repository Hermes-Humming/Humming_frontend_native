import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import PlayList_Thumbnail_1 from '../../../assets/The_Band_1.svg';
import { ScrollView } from 'react-native-gesture-handler';
import PlayListRow from '../../../component/PlayListRow';
import { Button } from 'react-native-paper';
import Sound from 'react-native-sound';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const tempData = [
  {
    id: 0,
    title: 'Gradation',
    singer: '10CM',
    soundPath: 'gradation',
  },
  {
    id: 1,
    title: '부동의 첫사랑',
    singer: '10CM',
    soundPath: 'unchangingfirstlove',
  },
  {
    id: 2,
    title: '어제 너는 나를 버렸어',
    singer: '10CM',
    soundPath: 'yesterdayyouabandonedme',
  },
  {
    id: 3,
    title: '방에 모기가 있어',
    singer: '10CM',
    soundPath: 'theresamosquitointheroom',
  },
  {
    id: 4,
    title: 'Thats Hilarious',
    singer: 'Charlie Puth',
    soundPath: 'thatshilarious',
  },
  {
    id: 5,
    title: 'Love me or Leave me',
    singer: 'DAY6',
    soundPath: 'lovemeorleaveme.mp3',
  },
  {
    id: 6,
    title: '사랑 이게 맞나 봐',
    singer: 'DAY6',
    soundPath: 'iguessthisiswhatloveislove',
  },
  {
    id: 7,
    title: '예뻤어',
    singer: 'DAY6',
    soundPath: 'itwaspretty',
  },
  {
    id: 8,
    title: '좋아합니다',
    singer: 'DAY6',
    soundPath: 'iloveyou',
  },
  {
    id: 9,
    title: 'I’m not myself',
    singer: 'DINDIN',
    soundPath: 'imnotmyselfwhenimaroundyou',
  },
  {
    id: 10,
    title: '심',
    singer: 'DK디셈버',
    soundPath: '',
  },
  {
    id: 11,
    title: 'Off My Face',
    singer: 'Justin Bieber',
    soundPath: '',
  },
  {
    id: 12,
    title: 'Im Not The Only One',
    singer: 'Sam Smith',
    soundPath: '',
  },
  {
    id: 13,
    title: 'Unholy',
    singer: 'Sam Smith',
    soundPath: '',
  },
  {
    id: 14,
    title: '기다린 만큼 더',
    singer: '검정치마',
    soundPath: '',
  },
  {
    id: 15,
    title: '보고 싶다',
    singer: '김범수',
    soundPath: '',
  },
  {
    id: 16,
    title: '찬란한 하루',
    singer: '멜로망스',
    soundPath: '',
  },
  {
    id: 17,
    title: '헤어지자 말해요',
    singer: '박재정',
    soundPath: '',
  },
  {
    id: 18,
    title: '가시',
    singer: '버즈',
    soundPath: '',
  },
  {
    id: 19,
    title: '나에게로 떠나는 여행',
    singer: '버즈',
    soundPath: '',
  },
  {
    id: 20,
    title: '해요',
    singer: '안녕',
    soundPath: '',
  },
  {
    id: 21,
    title: '행운을 빌어 줘',
    singer: '원필',
    soundPath: '',
  },
  {
    id: 22,
    title: 'Smile Boy',
    singer: '이승기',
    soundPath: '',
  },
  {
    id: 23,
    title: '뜨거운 여름밤은 가고',
    singer: '잔나비',
    soundPath: '',
  },
  {
    id: 24,
    title: '스쳐가는 인연',
    singer: '잔나비',
    soundPath: '',
  },
  {
    id: 25,
    title: '주저하는 연인들을 위해',
    singer: '잔나비',
    soundPath: '',
  },
  {
    id: 26,
    title: '너였다면',
    singer: '정승환',
    soundPath: '',
  },
  {
    id: 27,
    title: '눈사람',
    singer: '정승환',
    soundPath: '',
  },
  {
    id: 28,
    title: '그녀를 사랑해줘요',
    singer: '하동균',
    soundPath: '',
  },
  {
    id: 29,
    title: '기다릴게',
    singer: '하동균',
    soundPath: '',
  },
];

function PlayListDetail() {
  const route = useRoute();
  const { playListId } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imgCoverSection}>
          <PlayList_Thumbnail_1
            width={SCREEN_WIDTH}
            height={SCREEN_WIDTH * 0.9}
          />
        </View>
        <View style={styles.coverSection}>
          <Text style={styles.sectionTitle}>중저음의 당신을 위한 플리</Text>
          <Text style={styles.sectionContent}>
            저음에 익숙한 당신에게 추천해요
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <ScrollView
          //pagingEnabled
          showsVerticalScrollIndicator={false}
          indicatorStyle="white"
          contentContainerStyle={{ gap: 10 }}>
          <View style={styles.musicListSection}>
            {tempData.map(song => (
              <PlayListRow key={song.id} song={song} />
            ))}
          </View>
        </ScrollView>
      </View>
      {/* <Button onPress={() => MusicPlay('spicy.mp3')}>Click</Button> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    borderBottomEndRadius: 45,
    borderBottomLeftRadius: 45,
    backgroundColor: '#A6B9FF', // 파란색 배경
  },
  bottomContainer: {
    flex: 1,
  },
  imgCoverSection: {
    flex: 2,
    padding: 20,
    backgroundColor: '#A6B9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverSection: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'black',
  },
  sectionContent: {
    fontSize: 16,
    fontWeight: '300',
    color: 'gray',
  },
  musicListSection: {
    margin: 20,
  },
});

export default PlayListDetail;
