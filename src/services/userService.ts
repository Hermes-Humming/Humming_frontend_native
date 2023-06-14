import axios from 'axios';
import { SERVER_URL } from '../data/serverData';

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
  async signIn(email: string, password: string) {}
}

export default new userService();