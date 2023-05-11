import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Audio } from "expo-av";
import { PitchDetector } from "react-native-pitch-detector";

export default function VoicePitchDetector() {
  const [recording, setRecording] = React.useState<boolean>();

  async function startRecording() {
    console.log("Starting recording");
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
    } catch (err) {
      console.error("Failed to start recording", err);
    }

    setRecording(true);
    PitchDetector.start();
  }

  function stopRecording() {
    console.log("Stop recording");
    setRecording(false);
    PitchDetector.stop();
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? "녹음 중지" : "녹음하기"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

// 스타일 시트
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 10,
  },
});
