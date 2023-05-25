import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import TopMenuBar from '../../../component/TopMenuBar';
import { ScrollView } from 'react-native-gesture-handler';
import CardView from '../../../component/CardView';

import Magazine_Featured_1 from '../../../assets/Magazine_Featured_1.svg';

const PostDetail = () => {
  const route = useRoute();
  const { postId } = route.params;

  // postId를 이용하여 게시물 정보를 가져온다.
  const tempData = [
    {
      id: 0,
      title: '일반인은 절대 모르는 보컬 연습법',
      subtitle: '보컬 트레이닝',
      content:
        '위에 오는 가슴속에 옥 패, 멀리 봅니다. 별빛이 딴은 이름자를 패, 오면 소학교 청춘이 이런 듯합니다. 가을로 까닭이요, 벌써 이런 없이 듯합니다. 언덕 벌레는 풀이 아직 별 있습니다. 부끄러운 나는 하나에 아이들의 이름자 딴은 된 써 까닭입니다. 비둘기, 이름과 청춘이 가을 사랑과 봅니다. 차 위에 청춘이 많은 걱정도 하나에 나의 오는 봅니다. 걱정도 옥 청춘이 까닭입니다. 불러 나는 토끼, 있습니다.프랑시스 이름을 지나가는 버리었습니다. 나는 이름을 마디씩 아스라히 위에 듯합니다. 청춘이 별을 강아지, 풀이 까닭입니다. 불러 내 그리워 이네들은 잠, 까닭입니다. 별 이름자를 것은 버리었습니다. 이름을 못 어머니, 계절이 불러 경, 된 위에 다하지 까닭입니다. 나의 지나고 위에 봅니다. 겨울이 가득 하늘에는 하나 책상을 까닭입니다. 가을 릴케 나의 봄이 헤는 소학교 위에도 있습니다. 추억과 파란 피어나듯이 까닭이요, 쓸쓸함과 거외다. 하나의 가슴속에 별을 때 그리워 된 언덕 추억과 지나고 까닭입니다.내 너무나 강아지, 흙으로 어머니 밤이 청춘이 봅니다. 이름과, 하나의 노새, 자랑처럼 가을로 묻힌 듯합니다. 이름자를 하나에 이름을 듯합니다. 슬퍼하는 사랑과 별을 이름자를 듯합니다. 것은 부끄러운 많은 까닭입니다. 위에도 하나에 무덤 있습니다. 밤을 없이 이웃 벌써 때 멀듯이, 마리아 듯합니다. 못 위에 한 어머니, 이국 오면 이런 나는 옥 버리었습니다. 이름자를 동경과 멀리 청춘이 봅니다. 가득 강아지, 별이 봅니다. 청춘이 봄이 써 위에 이름을 거외다.',
    },
    {
      id: 1,
      title: '목 쥐어짜지 않고 고음 내는 법',
      subtitle: '보컬 트레이닝',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <TopMenuBar />
      <View style={{ flex: 1, margin: 30 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          indicatorStyle="white"
          contentContainerStyle={{ gap: 10 }}>
          <CardView style={styles.card}>
            <View
              style={{
                flex: 2,
                backgroundColor: '#e8eef3',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Magazine_Featured_1 />
            </View>
            <View style={{ padding: 20 }}>
              {tempData[postId] === (null || undefined) ? (
                <Text>Error: No data</Text>
              ) : (
                <View>
                  <Text style={styles.sectionSubtitle}>
                    {tempData[postId].subtitle}
                  </Text>
                  <Text style={styles.sectionTitle}>
                    {tempData[postId].title}
                  </Text>
                  <Text style={styles.sectionContent}>
                    {tempData[postId].content}
                  </Text>
                </View>
              )}
            </View>
          </CardView>
        </ScrollView>
      </View>
    </View>
  );
};

// 스타일 시트
const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  sectionContent: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 20,
    color: 'black',
  },
  sectionSubtitle: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center', //Centered vertically
    padding: 0,
    overflow: 'hidden',
  },
});

export default PostDetail;
