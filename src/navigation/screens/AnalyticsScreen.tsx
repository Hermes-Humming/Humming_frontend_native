import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {Audio} from 'expo-av';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import {shareAsync} from 'expo-sharing';
import sendRecordFile from '../../services/sendRecordFile';

// 녹음 시작 버튼을 렌더링
function AnalyticsScreen() {
  const [recording, setRecording] = React.useState<Audio.Recording>();

  // Expo Audio API를 사용하여 사용자의 음성 녹음
  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const {recording} = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI(); //녹음 파일이 저장된 캐시

    //캐시에 저장된 파일 이름
    let filename = uri.split('/') || '';
    filename = filename[filename.length - 1];

    //파일의 확장자를 wav로 지정
    const arr = filename.split('.');
    const name = arr[0];
    const newFilename = name + '.wav';

    //서버로부터 S3 URL 받아오기
    const urlresponse = await sendRecordFile.GetS3URL(`${newFilename}`);
    const s3url = urlresponse.data.url;

    //파일을 base64로 인코딩
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    //받아온 S3 URL에 파일 업로드하기
    await sendRecordFile.SendFileS3(s3url, base64);
    console.log('File is uploaded on S3.');

    //디바이스에 저장
    save(uri, 'myvoice.wav', recording['_options'].web['mimeType']);
  }

  //파일 디바이스에 저장
  const save = async (uri, filename, mimetype) => {
    if (Platform.OS == 'android') {
      console.log(filename, mimetype);
      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          filename,
          mimetype,
        ).then(async uri => {
          await FileSystem.writeAsStringAsync(uri, base64, {
            encoding: FileSystem.EncodingType.Base64,
          }).catch(e => console.log(e));
        });
      } else {
        shareAsync(uri);
      }
    } else {
      shareAsync(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
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

export default AnalyticsScreen;
