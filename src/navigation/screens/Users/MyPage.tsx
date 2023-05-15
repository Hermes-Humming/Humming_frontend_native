import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const MyPage = () => {
  const [name, setName] = useState<string>('이하연');
  const [email, setEmail] = useState<string>('papepopepe@naver.com');
  const [pw, setPW] = useState<string>('**********');

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
            style={styles.changePWBox}
            placeholder="변경할 비밀번호를 입력"></TextInput>
          <TouchableOpacity style={styles.checkIcon}>
            <Icon
              name="checkmark-circle-outline"
              size={30}
              color={'#BAEDE1'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.errorBox}>
        <Text>에러 처리 시 오류가 나오는 부분입니다.</Text>
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
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 12,
  },
  checkIcon: {
    marginLeft: 12,
  },
});
