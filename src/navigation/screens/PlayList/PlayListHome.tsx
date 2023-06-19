/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopMenuBar from '../../../component/TopMenuBar';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import CardView from '../../../component/CardView';
import userPitch from '../../../services/userPitch';

import PlayList_Thumbnail_1 from '../../../assets/The_Band_1.svg';
import PlayList_Thumbnail_2 from '../../../assets/The_Band_2.svg';
import PlayList_Thumbnail_3 from '../../../assets/The_Band_3.svg';
import PlayListDetail from './PlayListDetail';
import PlayListDetail2 from './PlayListDetail2';
import PlayListDetail3 from './PlayListDetail3';

const Stack = createNativeStackNavigator();

function PlayListHome({ navigation }) {
  const [lowestPitch, setLowestPitch] = React.useState<string | null>(null);
  const [highestPitch, setHighestPitch] = React.useState<string | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      getPitch();
    }, []),
  );

  const getPitch = async () => {
    const response = await userPitch.getKey();
    setLowestPitch(response.lowKey);
    setHighestPitch(response.highKey);
  };

  const handlePostClick = (playListId: number) => {
    console.log(playListId);
    if (playListId === 1) navigation.navigate('PlayListDetail', { playListId });
    if (playListId === 2)
      navigation.navigate('PlayListDetail2', { playListId });
    if (playListId === 3)
      navigation.navigate('PlayListDetail3', { playListId });
  };

  return (
    <View style={styles.mainContainer}>
      <TopMenuBar />
      <View style={styles.container}>
        <Text style={styles.title}>플레이리스트 추천</Text>
      </View>
      <View style={styles.viewport}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          indicatorStyle="white"
          horizontal={true}
          contentContainerStyle={{ gap: 10 }}>
          <CardView style={styles.card} onPress={() => handlePostClick(1)}>
            <View
              style={{
                flex: 2,
                backgroundColor: '#e8eef3',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <PlayList_Thumbnail_1 />
            </View>
            <View style={{ flex: 1, padding: 20 }}>
              <Text style={styles.sectionContent}>
                {lowestPitch}~{highestPitch} 음역대 추천
              </Text>
              <Text style={styles.sectionTitle}>중저음의 당신을 위한 플리</Text>
            </View>
          </CardView>

          <CardView style={styles.card} onPress={() => handlePostClick(2)}>
            <View
              style={{
                flex: 2,
                backgroundColor: '#FFC76E',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <PlayList_Thumbnail_2 />
            </View>
            <View style={{ flex: 1, padding: 20 }}>
              <Text style={styles.sectionContent}>인기 차트~</Text>
              <Text style={styles.sectionTitle}>노래방 인기차트 TOP 30</Text>
            </View>
          </CardView>

          <CardView style={styles.card} onPress={() => handlePostClick(3)}>
            <View
              style={{
                flex: 2,
                backgroundColor: '#BBA5FF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <PlayList_Thumbnail_3 />
            </View>
            <View style={{ flex: 1, padding: 20 }}>
              <Text style={styles.sectionContent}>
                너와 함께 부르고 싶은 날
              </Text>
              <Text style={styles.sectionTitle}>듀엣 플레이리스트</Text>
            </View>
          </CardView>
        </ScrollView>
      </View>
    </View>
  );
}

function PlayList({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={PlayListHome} />
        <Stack.Screen name="PlayListDetail" component={PlayListDetail} />
        <Stack.Screen name="PlayListDetail2" component={PlayListDetail2} />
        <Stack.Screen name="PlayListDetail3" component={PlayListDetail3} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    marginLeft: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  viewport: {
    flex: 1,
    margin: 30,
  },
  card: {
    flex: 1,
    width: 200,
    height: 300,

    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 0,
    overflow: 'hidden',
  },
  sectionTitle: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  sectionContent: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: '300',
    color: 'gray',
  },
});

export default PlayList;
