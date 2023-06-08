import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { PitchDetector } from 'react-native-pitch-detector';

import { AnalysisStackParamList } from '../../../types/stacks/AnalysisStackTypes';
import { StackScreenProps } from '@react-navigation/stack';
import TopMenuBar from '../../../component/TopMenuBar';
import Minute from '../../../assets/Minute.svg';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import { ScrollView } from 'react-native-gesture-handler';
import CardView from '../../../component/CardView';

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
  { name: 'C', frequency: [16, 33, 65, 131, 262, 523, 1047, 2093, 4186] },
  { name: 'C#', frequency: [17, 35, 69, 139, 278, 554, 1109, 2218, 4435] },
  { name: 'D', frequency: [18, 37, 73, 147, 294, 587, 1175, 2349, 4699] },
  { name: 'D#', frequency: [20, 39, 78, 156, 311, 622, 1245, 2489, 4978] },
  { name: 'E', frequency: [21, 41, 82, 165, 330, 659, 1319, 2637, 5274] },
  { name: 'F', frequency: [22, 44, 87, 175, 349, 699, 1397, 2794, 5588] },
  { name: 'F#', frequency: [23, 46, 93, 185, 370, 740, 1475, 2960, 5920] },
  { name: 'G', frequency: [25, 49, 98, 196, 392, 784, 1568, 3136, 6272] },
  { name: 'G#', frequency: [26, 52, 104, 208, 415, 831, 1661, 3322, 6645] },
  { name: 'A', frequency: [28, 55, 110, 220, 440, 880, 1760, 3520, 7040] },
  { name: 'A#', frequency: [29, 58, 117, 233, 466, 932, 1865, 3729, 7459] },
  { name: 'B', frequency: [31, 62, 124, 247, 494, 988, 1976, 3951, 7902] },
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

  const [checkingLowest, setCheckingLowest] = React.useState<boolean>(true);
  const [instruction, setInstruction] = React.useState<string>(
    '낼 수 있는 가장 낮은 음을 지속하세요..',
  );
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [lowestPitch, setLowestPitch] = React.useState<string | null>(null);
  const [highestPitch, setHighestPitch] = React.useState<string | null>(null);

  // React.useEffect(() => {}, []);

  React.useEffect(() => {
    const subscription = PitchDetector.addListener((data: PitchDetect) => {
      const result = getTone(data.frequency);
      console.log('음역:', result);
      setPitch(result);
    });
  }, []);

  async function startRecording() {
    console.log('Start recording');
    setRecording(true);
    setButtonDisabled(true);
    PitchDetector.start();
    setTimeout(() => {
      setButtonDisabled(false);
    }, 5000);
  }

  function stopRecording() {
    console.log('Stop recording');
    setRecording(false);
    PitchDetector.stop();
    setCheckingLowest(false);
    if (checkingLowest) {
      setLowestPitch(pitch);
    }
    if (!checkingLowest) {
      setHighestPitch(pitch);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TopMenuBar />
      <View style={{ marginLeft: 30, marginRight: 30 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>
          목소리 음역 측정
        </Text>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Minute />
          <Text style={{ fontSize: 54, fontWeight: 'bold', color: 'black' }}>
            {pitch ? pitch : '?'}
          </Text>
          <Text style={{ fontSize: 18, color: 'black' }}>목소리 인식중..</Text>
          <Text style={{ fontSize: 18, color: 'black' }}>
            {checkingLowest
              ? '낼 수 있는 가장 낮은 음을 지속해주세요'
              : '낼 수 있는 가장 높은 음을 지속해주세요'}
          </Text>
          <View style={{ marginTop: 30 }}>
            <Button
              title={recording ? '중지' : '시작하기'}
              onPress={recording ? stopRecording : startRecording}
              disabled={buttonDisabled}
            />
          </View>
          <View style={{ marginTop: 20, flexDirection: 'row', gap: 10 }}>
            <CardView style={{ ...styles.card, flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.sectionContent}>최저음</Text>
                <Text style={styles.sectionTitle}>
                  {lowestPitch ? lowestPitch : ''}
                </Text>
              </View>
            </CardView>
            <CardView style={{ ...styles.card, flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.sectionContent}>최고음</Text>
                <Text style={styles.sectionTitle}>
                  {highestPitch ? highestPitch : ''}
                </Text>
              </View>
            </CardView>
          </View>
        </View>
      </View>
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
  card: {
    flex: 1,
    width: 300,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 0,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  sectionContent: {
    fontSize: 12,
    fontWeight: '300',
    color: 'gray',
  },
});
