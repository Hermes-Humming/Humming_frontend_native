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
      console.log(response);
      return response.status;
    } catch (e) {
      console.log(e);
      return -1;
    }
  }
}

export default new userService();
