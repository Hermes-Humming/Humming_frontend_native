import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import TopMenuBar from '../../../component/TopMenuBar';
// import { ScrollView } from 'react-native-gesture-handler';
// import CardView from '../../../component/CardView';

import PlayList_Thumbnail_1 from '../../../assets/The_Band_1.svg';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
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
            2옥D ~ 4옥G 음역대가 부를 수 있어요
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer} />
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
});

export default PlayListDetail;
