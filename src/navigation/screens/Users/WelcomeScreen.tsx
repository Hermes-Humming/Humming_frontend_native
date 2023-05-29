import * as React from 'react';
import {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TopMenuBar from '../../../component/TopMenuBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

//asset
import Illust from '../../../assets/The Band Concert.svg';

//User Stack
import {StackScreenProps} from '@react-navigation/stack';
import {UserStackParamList} from '../../../types/stacks/UserStackTypes';
import LoginContext from '../../LoginContext';

//Export type
export type WelcomeScreenProps = StackScreenProps<
  UserStackParamList,
  'Welcome'
>;

const {width, height} = Dimensions.get('window');

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const myContext = useContext(LoginContext);

  const successLogin = async () => {
    try {
      await AsyncStorage.setItem('loginStatus', 'true');
      try {
        const value = await AsyncStorage.getItem('loginStatus');
        console.log(`Welcome Page에서 저장된 값: ${value}`);
        myContext.checkLogin();
      } catch (e) {
        console.log('Welcome Page: 저장된 정보가 없습니다.\n');
      }
    } catch (e) {
      console.log('Welcome Page: 로그인 상태를 저장하지 못했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View style={styles.topMenuBar}>
          <TopMenuBar />
        </View>
        <Illust width="100%" height="400" />
      </View>
      <View style={styles.btmArea}>
        <Text style={{fontSize: 20, fontWeight: '400', color: 'black'}}>
          Humming에 오신 것을 환영합니다!
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            marginTop: 10,
            color: 'black',
          }}>
          이제부터 Humming의 다양한 기능을 사용해보세요.
        </Text>
        <TouchableOpacity onPress={successLogin} style={styles.nextBtnBox}>
          <Text style={styles.nextText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topArea: {
    flex: 0.7,
  },
  btmArea: {
    flex: 0.3,
    alignItems: 'center',
  },

  topMenuBar: {
    marginTop: height * 0.01,
  },

  nextBtnBox: {
    backgroundColor: '#393939',
    width: 248,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 50,
    marginTop: 30,
  },

  nextText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
