import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {PitchDetector} from 'react-native-pitch-detector';

import {AnalysisStackParamList} from '../../../types/stacks/AnalysisStackTypes';
import {StackScreenProps} from '@react-navigation/stack';
export type VoicePitchDetectorProps = StackScreenProps<
  AnalysisStackParamList,
  'PitchDetect'
>;

export default function VoicePitchDetector() {
  const [recording, setRecording] = React.useState<boolean>();
  const [pitch, setPitch] = React.useState<number | null>(null);

  React.useEffect(() => {
    const subscription = PitchDetector.addListener(data => {
      console.log('음역:', data.tone);
      setPitch(data.tone);
    });

    return () => {
      subscription.remove();
    };
  }, []);

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
      {pitch && <Text style={styles.pitchText}>Detected Pitch: {pitch}</Text>}
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
  pitchText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
