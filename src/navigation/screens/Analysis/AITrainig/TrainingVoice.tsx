//목소리 학습을 진행하는 화면입니다
import * as React from "react";
import { View, Text, Button } from "react-native";

const TrainingVoice = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        목소리 학습을 진행하는 화면입니다
      </Text>
      <Button
        title="결과 들으러 가기"
        onPress={() => navigation.navigate("ResultSynthesis")}
      ></Button>
    </View>
  );
};

export default TrainingVoice;
