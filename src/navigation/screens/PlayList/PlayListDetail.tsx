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
    title: '추억속의 그대',
    singer: '이승기',
    soundPath: 'queencard',
  },
  {
    id: 1,
    title: '다시 사랑한다 말할까',
    singer: '김동률',
    soundPath: 'idol',
  },
  {
    id: 2,
    title: '정거장',
    singer: '이석훈',
    soundPath: 'iam',
  },
  {
    id: 3,
    title: '출발',
    singer: '김동률',
    soundPath: 'nightdancer',
  },
  {
    id: 4,
    title: '아는사람 얘기',
    singer: '산이',
    soundPath: 'spicy',
  },
  {
    id: 5,
    title: '먹지',
    singer: '예성',
    soundPath: 'cupid',
  },
  {
    id: 6,
    title: 'UNFORGIVEN',
    singer: 'LE SSERAFIM',
    soundPath: 'unforgiven',
  },
  {
    id: 7,
    title: 'Kitsch',
    singer: 'IVE',
    soundPath: 'kitsch',
  },
  {
    id: 8,
    title: 'Eve Psyche The Bluebeards wife',
    singer: 'LE SSERAFIM',
    soundPath: 'evepsychethebluebeardswife',
  },
  {
    id: 9,
    title: '손오공',
    singer: 'SEVENTEEN',
    soundPath: 'sonogong',
  },
  {
    id: 10,
    title: 'FLOWER',
    singer: 'JISOO',
    soundPath: 'flower',
  },
  {
    id: 11,
    title: 'Hype Boy',
    singer: 'NewJeans',
    soundPath: 'hypeboy',
  },
  {
    id: 12,
    title: 'OMG',
    singer: 'NewJeans',
    soundPath: 'omg',
  },
  {
    id: 13,
    title: 'Ditto',
    singer: 'NewJeans',
    soundPath: 'ditto',
  },
  {
    id: 14,
    title: 'KNOCK',
    singer: '이채연',
    soundPath: 'knock',
  },
  {
    id: 15,
    title: '심',
    singer: 'DK디셈버',
    soundPath: 'sim',
  },
  {
    id: 16,
    title: 'Dangerously',
    singer: 'Charlie Puth',
    soundPath: 'dangerously',
  },
  {
    id: 17,
    title: 'Part of Your World',
    singer: 'Halle',
    soundPath: 'partofyourworld',
  },
  {
    id: 18,
    title: 'Teddy Bear',
    singer: 'STAYC',
    soundPath: 'teddybear',
  },
  {
    id: 19,
    title: 'Fighting',
    singer: 'BSS SEVENTEEN',
    soundPath: 'fighting',
  },
  {
    id: 20,
    title: 'I Dont Think That I Like Her',
    singer: 'Charlie Puth',
    soundPath: 'idontthinkthatilikeher',
  },
  {
    id: 21,
    title: 'After LIKE',
    singer: 'IVE',
    soundPath: 'afterlike',
  },
  {
    id: 22,
    title: '를伝えたいだとか 사랑을 전하고 싶다든가',
    singer: 'あいみょん 아이묭',
    soundPath: 'aiostaetaitoka',
  },
  {
    id: 23,
    title: 'Allergy',
    singer: 'GIDLE',
    soundPath: 'allergy',
  },
  {
    id: 24,
    title: 'Attention',
    singer: 'NewJeans',
    soundPath: 'attention',
  },
  {
    id: 25,
    title: 'ANTIFRAGILE',
    singer: 'LE SSERAFIM',
    soundPath: 'antifragile',
  },
  {
    id: 26,
    title: 'Thirsty',
    singer: 'aespa',
    soundPath: 'thirsty',
  },
  {
    id: 27,
    title: 'Love Me Like This',
    singer: 'NMIXX',
    soundPath: 'lovemelikethis',
  },
  {
    id: 28,
    title: '오르트구름',
    singer: '윤하YOUNHA',
    soundPath: 'oortcloud',
  },
  {
    id: 29,
    title: 'KICKBACK',
    singer: 'Kenshi Yonezu',
    soundPath: 'kickback',
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
