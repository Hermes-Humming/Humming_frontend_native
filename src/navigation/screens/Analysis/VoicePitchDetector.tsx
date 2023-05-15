import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {PitchDetector} from 'react-native-pitch-detector';

import {AnalysisStackParamList} from '../../../types/stacks/AnalysisStackTypes';
import {StackScreenProps} from '@react-navigation/stack';
export type VoicePitchDetectorProps = StackScreenProps<
  AnalysisStackParamList,
  'PitchDetect'
>;

export default function VoicePitchDetector() {
  const [recording, setRecording] = React.useState<boolean>();
  const subscription = PitchDetector.addListener(console.log);
  async function startRecording() {
    console.log('Start recording');
    setRecording(true);
    PitchDetector.start();
  }

  function stopRecording() {
    console.log('Stop recording');
    setRecording(false);
    PitchDetector.stop();
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? '녹음 중지' : '녹음하기'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

// 스타일 시트
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 10,
  },
});
