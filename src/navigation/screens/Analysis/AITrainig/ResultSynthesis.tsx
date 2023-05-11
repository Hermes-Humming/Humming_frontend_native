//합성결과를 듣는 화면입니다
import * as React from 'react';
import {View, Text, Button} from 'react-native';

const ResultSynthesis = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, fontWeight: 'bold'}}>
        합성결과를 듣는 화면입니다.
        {'\n'}
        분석 홈으로 돌아가고 싶으시면 하단의 분석을 눌러주세요.
      </Text>
    </View>
  );
};

export default ResultSynthesis;
