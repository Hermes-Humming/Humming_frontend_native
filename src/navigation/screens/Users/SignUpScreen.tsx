import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TopMenuBar from '../../../component/TopMenuBar';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userService from '../../../services/userService';

//asset
import GotoLogin from '../../../assets/GoToLogin.svg';

//User Stack
import { StackScreenProps } from '@react-navigation/stack';
import { UserStackParamList } from '../../../types/stacks/UserStackTypes';

//Export type
export type SignUpScreenProps = StackScreenProps<UserStackParamList, 'SignUp'>;

const { width, height } = Dimensions.get('window');

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  //이메일 입력값 관리
  const [userEmail, setUserEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<Boolean>(true);
  useEffect(() => {
    if (userEmail.length == 0) setEmailError(true);
    else {
      if (userEmail.includes('@') == false) setEmailError(true);
      else setEmailError(false);
    }
  }, [userEmail]);

  //비밀번호 입력값 관리
  const [userPW, setUserPW] = useState<string>('');
  const [pwError, setPWError] = useState<Boolean>(true);
  useEffect(() => {
    if (userPW.length < 8 || userPW.length > 20) setPWError(true);
    else setPWError(false);
  }, [userPW]);

  //닉네임 입력값 관리
  const [userNickName, setUserNickName] = useState<string>('');
  const [nicknameError, setNickNameError] = useState<Boolean>(true);
  useEffect(() => {
    if (userNickName.length < 1 || userNickName.length > 20)
      setNickNameError(true);
    else setNickNameError(false);
  }, [userNickName]);

  const [pwVisible, setPWVisible] = useState<Boolean>(false); //비밀번호 보이고 안보이게 하기
  const [errorLogin, setErrorLogin] = useState<Boolean>(false); //로그인 상태 오류 체크

  //버튼 활성화, 비활성화
  const [btnDisableState, setbtnDisableState] = useState<boolean>(true);
  useEffect(() => {
    if (emailError == false && pwError == false && nicknameError == false)
      setbtnDisableState(false);
    else setbtnDisableState(true);
  }, [emailError, pwError, nicknameError]);

  const pressBtn = async () => {
    const response = await userService.signUp(userEmail, userNickName, userPW);
    if (response.status == 201) {
      setErrorLogin(false);
      try {
        await AsyncStorage.setItem('accessToken', response.data.accessToken);
        const v = await AsyncStorage.getItem('accessToken');
        console.log(v); //accessToken 확인가능
        navigation.navigate('Welcome');
      } catch (e) {
        console.log('회원가입 성공했으나 accesstoken 저장 안됨.');
      }
    } else {
      //이메일이 동일하거나, 닉네임이 동일할 때 발생
      setErrorLogin(true);
      setTimeout(() => {
        setErrorLogin(false);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <View>
          <TopMenuBar />
        </View>
        <Text style={styles.boxesText}>이메일</Text>
        <View style={styles.inputBoxesAlign}>
          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor="#ADADAD"
            mode="outlined"
            style={styles.textInputBox}
            onChangeText={email => setUserEmail(email)}
            selectionColor="black"
            outlineColor="#BBA5FF"
            activeOutlineColor="#BBA5FF"
          />
          {emailError ? (
            <Text style={styles.errorMsg}>올바른 이메일 형식이 아니에요.</Text>
          ) : null}
        </View>
        <Text style={styles.boxesText}>비밀번호</Text>
        <View style={styles.inputBoxesAlign}>
          <TextInput
            mode="outlined"
            style={styles.textInputBox}
            placeholder="password"
            placeholderTextColor="#ADADAD"
            onChangeText={pw => setUserPW(pw)}
            selectionColor="black"
            outlineColor="#BBA5FF"
            activeOutlineColor="#BBA5FF"
            secureTextEntry={!pwVisible}
            right={
              <TextInput.Icon
                icon={pwVisible ? 'eye' : 'eye-off'}
                onPress={() => setPWVisible(!pwVisible)}
                style={styles.eyeIcon}
              />
            }
          />
          {pwError ? (
            <Text style={styles.errorMsg}>
              비밀번호는 최소 8글자 이상, 20글자 이하여야 해요.
            </Text>
          ) : null}
        </View>
        <Text style={styles.boxesText}>닉네임</Text>
        <View style={styles.inputBoxesAlign}>
          <TextInput
            mode="outlined"
            placeholder="nickname"
            placeholderTextColor="#ADADAD"
            style={styles.textInputBox}
            outlineColor="#BBA5FF"
            activeOutlineColor="#BBA5FF"
            onChangeText={nickname => setUserNickName(nickname)}
            selectionColor="black"
          />
          {nicknameError ? (
            <Text style={styles.errorMsg}>
              닉네임은 최소 1글자 이상, 20글자 이하여야 해요.
            </Text>
          ) : null}
        </View>
        {errorLogin ? (
          <View style={styles.errorPannel}>
            <GotoLogin width="400" />
          </View>
        ) : null}
      </View>
      <View style={styles.btmArea}>
        <TouchableOpacity
          disabled={btnDisableState}
          onPress={pressBtn}
          style={
            btnDisableState ? styles.nextDisableBtnBox : styles.nextBtnBox
          }>
          <Text style={styles.nextText}>다음으로</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    justifyContent: 'center',
  },
  topMenuBar: {
    marginTop: 5,
  },

  nextBtnBox: {
    backgroundColor: '#393939',
    width: 248,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: -15,
    marginTop: 10,
  },

  nextDisableBtnBox: {
    backgroundColor: '#EFF4F4',
    width: 248,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: -15,
    marginTop: 10,
  },

  nextText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  boxesText: {
    marginLeft: 30,
    color: '#272727',
    fontSize: 15,
    fontWeight: 'bold',
  },

  inputBoxesAlign: {
    height: 80,
    paddingLeft: 30,
    marginBottom: 20,
  },

  textInputBox: {
    width: width * 0.85,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontSize: 17,
    fontWeight: '400',
  },

  eyeIcon: {
    paddingTop: 10,
  },

  errorMsg: {
    marginTop: 5,
    color: '#787878',
    fontSize: 10,
  },

  errorPannel: {
    marginTop: 5,
    alignItems: 'center',
  },
});
