import React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userService from '../../../services/userService';

//asset
import Nicknameerror from '../../../assets/nicknameerror.svg';
import Passworderror from '../../../assets/passworderror.svg';

const { width, height } = Dimensions.get('window');

const MyPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pw, setPW] = useState<string>('**********');

  const initializeInfo = async () => {
    const saveEmail = await AsyncStorage.getItem('email');
    const saveNickname = await AsyncStorage.getItem('nickname');
    setName(saveNickname);
    setEmail(saveEmail);
  };

  useEffect(() => {
    initializeInfo();
  }, []);

  const [newName, setNewName] = useState<string>('');
  const [newPW, setNewPW] = useState<string>('');
  const [newNameError, setNewNameError] = useState(false);
  const [newPWError, setNewPWError] = useState(false);

  const changePW = async () => {
    const response = await userService.changePassWord(newPW);
    if (response == 200) {
      console.log('비밀번호변경');
    } else {
      setNewPWError(true);
      setTimeout(() => {
        setNewPWError(false);
      }, 2000);
    }
  };

  const changeNickName = async () => {
    const response = await userService.changeNickName(newName);
    if (response == 200) {
      setName(newName);
    } else {
      setNewNameError(true);
      setTimeout(() => {
        setNewNameError(false);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>{name} 님</Text>
      </View>
      <View style={styles.infoArea}>
        <View style={styles.inputInfoBox}>
          <View style={styles.inputExplainTextBox}>
            <Text style={styles.inputExplainText}>가입한 이메일</Text>
          </View>
          <Text style={styles.inputExplainText}>{email}</Text>
        </View>
        <View style={styles.inputInfoBox}>
          <View style={styles.inputExplainTextBox}>
            <Text style={styles.inputExplainText}>비밀번호</Text>
          </View>
          <Text style={styles.inputExplainText}>{pw}</Text>
        </View>
        <View style={styles.inputInfoBox}>
          <View style={styles.inputExplainTextBox}>
            <Text style={styles.inputExplainText}>변경할 비밀번호</Text>
          </View>
          <TextInput
            onChangeText={pw => setNewPW(pw)}
            value={newPW}
            style={styles.changePWBox}
            placeholder="변경할 비밀번호를 입력"></TextInput>
          <TouchableOpacity style={styles.checkIcon} onPress={changePW}>
            <Icon
              name="checkmark-circle-outline"
              size={30}
              color={'#BAEDE1'}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.inputInfoBox}>
          <View style={styles.inputExplainTextBox}>
            <Text style={styles.inputExplainText}>변경할 닉네임</Text>
          </View>
          <TextInput
            onChangeText={name => setNewName(name)}
            value={newName}
            style={styles.changePWBox}
            placeholder="변경할 닉네임을 입력"></TextInput>
          <TouchableOpacity style={styles.checkIcon} onPress={changeNickName}>
            <Icon
              name="checkmark-circle-outline"
              size={30}
              color={'#BAEDE1'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.errorBox}>
        {newNameError ? (
          <View style={styles.errorPannel}>
            <Nicknameerror width="350" />
          </View>
        ) : null}
        {newPWError ? (
          <View style={styles.errorPannel}>
            <Passworderror width="350" />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  nameBox: {
    //backgroundColor: 'pink',
    flex: 20,
    justifyContent: 'center',
  },
  nameText: {
    marginLeft: width * 0.1,
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
  },
  infoArea: {
    //backgroundColor: 'blue',
    flex: 40,
  },
  inputExplainTextBox: {
    paddingRight: width * 0.04,
    height: height * 0.05,
    width: width * 0.3,
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },

  inputExplainText: {
    color: 'black',
    fontSize: 13,
  },

  inputInfoBox: {
    height: height * 0.05,
    flexDirection: 'row',
    //backgroundColor: 'orange',
    marginBottom: 30,
    paddingLeft: width * 0.08,
    alignItems: 'center',
  },
  errorBox: {
    //backgroundColor: 'green',
    paddingTop: 20,
    flex: 30,
  },

  changePWBox: {
    height: height * 0.05,
    width: width * 0.4,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 12,
  },
  checkIcon: {
    marginLeft: 12,
  },
  errorPannel: {
    marginTop: 5,
    alignItems: 'center',
  },
});
