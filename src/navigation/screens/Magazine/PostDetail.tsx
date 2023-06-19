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
      title: '고음의 비밀: 모두가 올라갈 수 있는 가창력의 끝판왕',
      subtitle: '안정적인 고음 발성의 과학적 기술',
      content:
        "고음을 내는 기본적인 원리는, 성대의 긴장도를 조절하는 것입니다. 성대의 긴장이 증가하면 주파수가 높아져, 결과적으로 음높이가 올라갑니다. 이를 통해 우리는 높은 음역대의 고음을 발성할 수 있게 됩니다. 하지만, 단순히 성대를 긴장하는 것만으로는 충분하지 않습니다. 바른 자세와 호흡은 고음 발성에 매우 중요합니다. 바른 자세는 호흡 용량을 높이며, 깊고 안정적인 호흡은 풍부한 음색과 음정의 안정성을 제공합니다. 또한, 고음 발성에는 목과 입의 형태 또한 중요한 역할을 합니다. '머리 음'을 만드는 과정에서 입과 목의 형태를 바꾸면서, 고음을 자연스럽게 내는 방법을 찾을 수 있습니다. 마지막으로, 충분한 연습이 필요합니다. 이는 단순히 음역대를 높이는 것이 아니라, 여러분의 목소리에 가장 적합한 방식으로 고음을 만드는 능력을 향상시키는 것을 의미합니다.",
    },

    {
      id: 2,
      title: '고음 발성의 힘: 저마다의 음악적 표현',
      subtitle: '고음을 장악하며 자신만의 음악적 아이덴티티 찾기',
      content:
        "음악적 표현의 한 가지 방법으로 고음을 사용하는 것은 완전히 새로운 차원의 경험을 제공합니다. 하지만, 고음 발성은 특정한 기법과 연습이 필요하며, 그 과정은 각자 다릅니다. 첫 번째로, 자신의 '음역대'를 알아야 합니다. 이는 단순히 최고 음을 알아내는 것이 아니라, 자신이 편안하게 부를 수 있는 음역대를 파악하는 것입니다. 이 음역대를 이해하고 그 안에서 자신의 목소리를 개발하면, 고음을 자연스럽게 발성할 수 있게 됩니다. 두 번째로, 발성 기법의 연습이 필요합니다. '혼성' 기법은 가슴음과 머리음을 혼합하여 넓은 음역대를 커버하는 데 도움이 됩니다. 또한 '벨팅'은 강력한 고음을 만드는 데 유용한 기법입니다. 세 번째로, 꾸준한 보컬 트레이닝이 중요합니다. 보컬 코치와 함께하면, 자신이 발견하지 못했던 목소리의 가능성을 찾을 수 있습니다. 마지막으로, 건강한 목 관리도 잊지 마세요. 고음을 내는 것은 많은 에너지를 요구하므로, 건강한 상태에서만 가능합니다. 따라서 충분한 휴식과 수분 섭취가 필요합니다. 이러한 요소들을 염두에 두고 연습한다면, 높은 고음을 내는 것은 더 이상 어렵지 않을 것입니다. 그리고 그 결과로, 여러분만의 독특한 음악적 표현을 찾을 수 있을 것입니다.",
    },

    {
      id: 3,
      title: '천상의 고음을 내는 방법: 마스터 클래스',
      subtitle: '고음의 세계로 누구나 참여할 수 있도록 안내하는 방법',
      content:
        "가수가 높은 음역대의 노래를 불러내면, 그것은 무슨 마법 같은 일로 보일 때가 있습니다. 하지만, 이러한 '고음' 발성은 실제로는 명확한 기법과 연습이 필요한 것입니다. 첫째, 발성 연습은 가슴 음과 머리 음을 이해하면서 시작합니다. 가슴 음은 우리가 평소에 말할 때 사용하는 음역대입니다. 반면, 머리 음은 목구멍의 상단 부분, 즉 '머리'에서 생성됩니다. 이 두 영역 사이의 전환은 '패소지오'라고 합니다. 고음을 내기 위해서는 이 패소지오를 원활하게 넘어갈 수 있어야 합니다. 다음으로, 적절한 호흡 기법이 중요합니다. '다이어프램 호흡'을 연습해보세요. 이는 가슴이 아닌 복부에서 호흡하는 기법으로, 더 큰 호흡 용량과 안정적인 고음을 얻을 수 있게 해줍니다. 마지막으로, 편안한 목 상태를 유지하는 것이 필요합니다. 무리한 고음은 목에 손상을 줄 수 있으므로, 적절한 음정과 음량에서 자신의 목소리를 유지하는 것이 중요합니다. 또한 목을 충분히 편안하게 유지하면, 더 높은 음역대로 손쉽게 전환할 수 있습니다. 이러한 기법들은 연습과 꾸준함이 필요합니다. 하지만 노력의 결실로, 높은 음역대의 아름다운 고음을 자유롭게 내는 방법을 배울 수 있습니다. 음악의 세계는 깊고 넓습니다. 여러분의 목소리가 어디까지 도달할 수 있는지 도전해보세요!",
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
