//플레이리스트에서 음악을 선곡하는 화면입니다
import * as React from 'react';
import {View, Text, Button} from 'react-native';

const SelectMusic = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 26, fontWeight: 'bold'}}>
        플레이리스트에서 음악을 선곡하는 화면입니다
      </Text>
      <Button
        title="합성하러 가기"
        onPress={() => navigation.navigate('TrainingVoice')}></Button>
    </View>
  );
};

export default SelectMusic;
