import axios from 'axios';
import { SERVER_URL } from '../data/serverData';
import AsyncStorage from '@react-native-async-storage/async-storage';

class userService {
  async signUp(email: string, nickname: string, password: string) {
    try {
      const response = await axios.post(`${SERVER_URL}/user/signup`, {
        email: email,
        nickname: nickname,
        password: password,
      });
      return response;
    } catch (e) {
      console.log(e);
      return -1;
    }
  }
  //async signIn(email: string, password: string) {}

  async checkEmailDuplicate(email: string) {
    try {
      const response = await axios.get(
        `${SERVER_URL}/user/check-duplicate-email?email=${email}`,
      );
      return response.status;
    } catch (e) {
      console.log('이메일 중복체크 실패.');
      return -1;
    }
  }

  async changeNickName(nickname: string) {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.patch(
        `${SERVER_URL}/user/edit-nickname`,
        { nickname: nickname },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
      return response.status;
    } catch (e) {
      console.log('닉네임변경 실패.');
      return -1;
    }
  }
}

export default new userService();
