import axios from 'axios';
import { SERVER_URL } from '../data/serverData';
import AsyncStorage from '@react-native-async-storage/async-storage';

class userPitch {
  async getKey() {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log(accessToken);
      const response = await axios.get(`${SERVER_URL}/user/key`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return -1;
    }
  }

  async patchKey(highKey: string, lowKey: string) {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log(accessToken);
      const response = await axios.patch(
        `${SERVER_URL}/user/edit-key`,
        { highKey: highKey, lowKey: lowKey },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      return response;
    } catch (e) {
      console.log(e);
      return -1;
    }
  }

  async saveKey(lowKey: string, highKey: string) {
    await AsyncStorage.setItem('lowKey', lowKey);
    await AsyncStorage.setItem('highKey', highKey);
  }
}

export default new userPitch();
