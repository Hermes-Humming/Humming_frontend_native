import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Svg, Circle } from "react-native-svg";


export default function App() {
  const [recording, setRecording] = React.useState();


  return (
    <View style={styles.container}>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pitchText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
