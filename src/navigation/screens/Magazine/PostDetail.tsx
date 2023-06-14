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
      id: 1,
      title: '목 쥐어짜지 않고 고음 내는법',
      subtitle: '안정적인 고음 발성의 과학적 기술',
      content:
        "고음을 내는 기본적인 원리는, 성대의 긴장도를 조절하는 것입니다. 성대의 긴장이 증가하면 주파수가 높아져, 결과적으로 음높이가 올라갑니다. 이를 통해 우리는 높은 음역대의 고음을 발성할 수 있게 됩니다. 하지만, 단순히 성대를 긴장하는 것만으로는 충분하지 않습니다. 바른 자세와 호흡은 고음 발성에 매우 중요합니다. 바른 자세는 호흡 용량을 높이며, 깊고 안정적인 호흡은 풍부한 음색과 음정의 안정성을 제공합니다. 또한, 고음 발성에는 목과 입의 형태 또한 중요한 역할을 합니다. '머리 음'을 만드는 과정에서 입과 목의 형태를 바꾸면서, 고음을 자연스럽게 내는 방법을 찾을 수 있습니다. 마지막으로, 충분한 연습이 필요합니다. 이는 단순히 음역대를 높이는 것이 아니라, 여러분의 목소리에 가장 적합한 방식으로 고음을 만드는 능력을 향상시키는 것을 의미합니다.",
    },

    {
      id: 1,
      title: '일반인은 절대 모르는 보컬 연습법',
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
