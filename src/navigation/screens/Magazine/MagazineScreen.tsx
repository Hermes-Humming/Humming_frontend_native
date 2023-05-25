import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-gesture-handler';
import TopMenuBar from '../../../component/TopMenuBar';
import CardView from '../../../component/CardView';
import PostDetail from './PostDetail';
import Magazine_Thumbnail_1 from '../../../assets/Magazine_Thumbnail_1.svg';

const Stack = createNativeStackNavigator();

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

function MagazineHome({navigation}) {
  const [posts, setPosts] = React.useState([]);

  const handlePostClick = postId => {
    navigation.navigate('PostDetail', {postId});
  };

  const tempData = [
    {
      id: 0,
      title: '일반인은 절대 모르는 보컬 연습법',
      content:
        '노래를 잘 부르려면 안정적인 발성과 호흡이 중요합니다. 단기간에 실력을 향상시킬 수 있는 방법을 소개합니다. ',
    },
    {
      id: 1,
      title: '목 쥐어짜지 않고 고음 내는 법',
      content:
        '어떻게 하면 목에 힘을 주지 않고 편하게 고음을 낼 수 있을까요? 보컬 트레이너가 그 방법을 알려줍니다.',
    },
    {
      id: 2,
      title: '노래방에서 연습한다면 알아야 할 TIP3',
      content:
        '아직도 노래방에서 무작정 노래를 부르나요? 효과적인 노래방에서의 연습 방법을 알려드립니다.',
    },
  ];
  React.useEffect(() => {
    setPosts(tempData);
  }, []);

  return (
    <View style={{flex: 1}}>
      <TopMenuBar />
      <View style={{marginLeft: 30}}>
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>매거진</Text>
      </View>
      <View style={{flex: 1, margin: 30}}>
        <ScrollView
          //pagingEnabled
          showsVerticalScrollIndicator={false}
          indicatorStyle="white"
          contentContainerStyle={{gap: 10}}>
          {posts.length === 0 ? (
            <Text>There is no content..</Text>
          ) : (
            posts.map((content, index) => (
              <CardView
                style={styles.card}
                onPress={() => handlePostClick(content.id)}>
                <View
                  key={index}
                  style={{
                    flex: 2,
                    backgroundColor: '#e8eef3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Magazine_Thumbnail_1 />
                </View>
                <View style={{padding: 20}}>
                  <Text style={styles.sectionTitle}>{content.title}</Text>
                  <Text style={styles.sectionContent}>{content.content}</Text>
                </View>
              </CardView>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

// 스타일 시트
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    height: SCREEN_HEIGHT / 3,
    minHeight: 280,
    maxHeight: 400,
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

function Magazine({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MagazineHome} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Magazine;
