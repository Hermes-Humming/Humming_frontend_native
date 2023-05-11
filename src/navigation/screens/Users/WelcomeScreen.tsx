import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TopMenuBar from "../../../component/TopMenuBar";

//asset
import Illust from "../../../assets/The Band Concert.svg";

//User Stack
import { StackScreenProps } from "@react-navigation/stack";
import { UserStackParamList } from "../../../types/stacks/UserStackTypes";

//Export type
export type WelcomeScreenProps = StackScreenProps<
  UserStackParamList,
  "Welcome"
>;

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.topMenuBar}>
          <TopMenuBar />
        </View>
        <Illust width="100%" height="400" />
      </View>
      <View style={styles.btmArea}>
        <Text style={{ fontSize: 32, fontWeight: "400" }}>
          Humming에 오신 것을 환영합니다!
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "400", marginTop: 10 }}>
          이제부터 Humming의 다양한 기능을 사용해보세요.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.nextBtnBox}
        >
          <Text style={styles.nextText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topArea: {
    flex: 0.7,
    //backgroundColor: "blue",
  },
  btmArea: {
    //backgroundColor: "pink",
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  topMenuBar: {
    marginTop: 100,
  },

  nextBtnBox: {
    backgroundColor: "#393939",
    width: 248,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 50,
    marginTop: 30,
  },

  nextText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
