import * as React from 'react';
import {useState, useEffect} from 'react';
import MainContainer from './src/navigation/MainContainer';
import LoginContext from './src/navigation/LoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const checkLogin = async () => {
    try {
      //처음부터 보고 싶으면 이거 주석처리
      //await AsyncStorage.clear();
      let status = await AsyncStorage.getItem('loginStatus');
      if (status !== null) {
        setLoginStatus(JSON.parse(status));
        console.log(`App: 로그인 상태 ${status}`);
        return loginStatus;
      } else {
        console.log('App: 로그인 상태 정보가 없습니다.');
        setLoginStatus(false);
        return loginStatus;
      }
    } catch (e) {
      console.log('App: 로그인 정보 가져오기를 실패하였습니다.');
    }
  };
  const userLogin = {
    status: loginStatus,
    checkLogin,
  };
  useEffect(() => {
    checkLogin();
    console.log('app!!');
  }, [loginStatus]);

  return (
    <LoginContext.Provider value={userLogin}>
      <MainContainer />
    </LoginContext.Provider>
  );
}

export default App;
