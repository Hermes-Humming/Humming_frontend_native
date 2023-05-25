import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {PitchDetector} from 'react-native-pitch-detector';

import {AnalysisStackParamList} from '../../../types/stacks/AnalysisStackTypes';
import {StackScreenProps} from '@react-navigation/stack';
export type VoicePitchDetectorProps = StackScreenProps<
  AnalysisStackParamList,
  'PitchDetect'
>;

type Note = {
  name: string;
  frequency: number[];
};

type PitchDetect = {
  frequency: number;
  tone: string;
};

const NOTES: Note[] = [
  {name: 'C', frequency: [16, 33, 65, 131, 262, 523, 1047, 2093, 4186]},
  {name: 'C#', frequency: [17, 35, 69, 139, 278, 554, 1109, 2218, 4435]},
  {name: 'D', frequency: [18, 37, 73, 147, 294, 587, 1175, 2349, 4699]},
  {name: 'D#', frequency: [20, 39, 78, 156, 311, 622, 1245, 2489, 4978]},
  {name: 'E', frequency: [21, 41, 82, 165, 330, 659, 1319, 2637, 5274]},
  {name: 'F', frequency: [22, 44, 87, 175, 349, 699, 1397, 2794, 5588]},
  {name: 'F#', frequency: [23, 46, 93, 185, 370, 740, 1475, 2960, 5920]},
  {name: 'G', frequency: [25, 49, 98, 196, 392, 784, 1568, 3136, 6272]},
  {name: 'G#', frequency: [26, 52, 104, 208, 415, 831, 1661, 3322, 6645]},
  {name: 'A', frequency: [28, 55, 110, 220, 440, 880, 1760, 3520, 7040]},
  {name: 'A#', frequency: [29, 58, 117, 233, 466, 932, 1865, 3729, 7459]},
  {name: 'B', frequency: [31, 62, 124, 247, 494, 988, 1976, 3951, 7902]},
];

function getTone(hertz: number): string {
  let closestDiff = Infinity;
  let closestNote = '';
  let octave = -1;

  NOTES.forEach(note => {
    note.frequency.forEach((freq, index) => {
      let diff = Math.abs(hertz - freq);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestNote = note.name;
        octave = index;
      }
    });
  });

  return `${closestNote}${octave + 1}`;
}

export default function VoicePitchDetector() {
  const [recording, setRecording] = React.useState<boolean>();
  const [pitch, setPitch] = React.useState<string | null>(null);

  React.useEffect(() => {
    const subscription = PitchDetector.addListener((data: PitchDetect) => {
      const result = getTone(data.frequency);
      console.log('음역:', result);
      setPitch(result);
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
