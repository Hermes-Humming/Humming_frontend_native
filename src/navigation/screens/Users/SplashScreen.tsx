import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TopMenuBar from "../../../component/TopMenuBar";

//사진
import LogoIllust from "../../../assets/The Band Speaker 2.svg";

//User Stack
import { StackScreenProps } from "@react-navigation/stack";
import { UserStackParamList } from "../../../types/stacks/UserStackTypes";

//Export type
export type SplashScreenProps = StackScreenProps<UserStackParamList, "Splash">;

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.topMenuBar}>
          <TopMenuBar />
        </View>
        <Text style={styles.titleText}>Humming 만의{"\n"}세심한 보컬 코칭</Text>
        <View style={styles.logo}>
          <LogoIllust />
        </View>
      </View>
      <View style={styles.btmArea}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>이미 회원이신가요?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpBtnBox}
        >
          <Text style={styles.signUpText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topArea: {
    flex: 0.7,
  },
  btmArea: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  topMenuBar: {
    marginTop: 100,
    marginLeft: 20,
  },
  titleText: {
    fontWeight: "bold",
    color: "#393939",
    fontSize: 36,
    marginLeft: 50,
    marginTop: -20,
  },
  logo: {
    paddingLeft: 50,
    marginTop: 70,
  },
  signUpBtnBox: {
    backgroundColor: "#393939",
    width: 248,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: -15,
    marginTop: 20,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#393939",
    textDecorationLine: "underline",
  },
  signUpText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
