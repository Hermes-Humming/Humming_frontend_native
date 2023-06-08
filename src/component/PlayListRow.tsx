import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayListRow = ({ song }) => {
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  const music = React.useRef();

  const MusicPlay = soundPath => {
    setMusicPlaying(true);
    music.current = new Sound(soundPath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound: ' + error);
        return;
      }
      console.log(
        'duration in seconds: ' +
          music.current.getDuration() +
          'number of channels: ' +
          music.current.getNumberOfChannels(),
      );
      music.current.play(success => {
        if (!success) {
          console.log('Sound did not play successfully');
          music.current.reset();
        }
      });
    });
  };

  const MusicStop = () => {
    setMusicPlaying(false);
    music.current.stop();
  };

  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
      {musicPlaying ? (
        <TouchableOpacity onPress={() => MusicStop()}>
          <Ionicons name="pause-outline" size={50} color="#000000" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => MusicPlay(song.soundPath)}>
          <Ionicons name="play-outline" size={50} color="#000000" />
        </TouchableOpacity>
      )}

      <View style={{ marginLeft: 15 }}>
        <Text style={styles.sectionTitle}>{song.title}</Text>
        <Text style={styles.sectionContent}>{song.singer}</Text>
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <EntypoIcon name="dots-three-horizontal" size={18} color="black" />
      </View>
    </View>
  );
};

// 스타일 시트
const styles = StyleSheet.create({
  topMenuBar: {
    margin: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  sectionContent: {
    fontSize: 16,
    fontWeight: '300',
    color: 'gray',
  },
});

export default PlayListRow;
