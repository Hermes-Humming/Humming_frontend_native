import * as React from "react";
import { Image, StyleSheet, SafeAreaView, Text } from "react-native";
import Logo_with_subtitle from "../assets/Logo_with_subtitle.svg";

const TopMenuBar = () => {
  return (
    <SafeAreaView style={styles.topMenuBar}>
      <Logo_with_subtitle />
    </SafeAreaView>
  );
};

// 스타일 시트
const styles = StyleSheet.create({
  topMenuBar: {
    margin: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default TopMenuBar;
