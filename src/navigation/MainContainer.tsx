import * as React from 'react';
import {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Main Screens
import HomeScreen from './screens/Magazine/MagazineScreen';
import AnalysisScreen from './screens/Analysis/AnalysisHome';
import PlayListScreen from './screens/PlayList/PlayListHome';
import MyPageScreen from './screens/Users/MyPage';
//import VoiceRecordTestScreen from './screens/AnalyticsScreen';

// Login, SignUp Screens
import SplashScreen from './screens/Users/SplashScreen';
import LoginScreen from './screens/Users/LoginScreen';
import SignUpScreen from './screens/Users/SignUpScreen';
import WelcomeScreen from './screens/Users/WelcomeScreen';

//import types
import {UserStackParamList} from '../types/stacks/UserStackTypes';

//define users screen stacks
const usersStack = createNativeStackNavigator<UserStackParamList>();

// Screen Names
const magazineName = '매거진';
const analysisName = '분석';
const playlistName = '플레이리스트';
const mypageName = '마이페이지';

const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator();

/*function EmptyScreen() {
  return <View />;
}*/

//let isLoggedIn = false; //storage로 로그인 상태 관리 하는 것으로 바꿔야 함

export default function MainContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoginStatus = async () => {
    try {
      let checkLogin = await AsyncStorage.getItem('loginStatus');
      if (checkLogin !== null) setIsLoggedIn(JSON.parse(checkLogin));
    } catch (e) {
      console.log('MainContainer: 로그인 정보 가져오기 실패했습니다.');
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    setLoginStatus();
  }, []);

  return isLoggedIn ? (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={magazineName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === magazineName) {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (rn === analysisName) {
              iconName = focused ? 'analytics' : 'analytics-outline';
            } else if (rn === playlistName) {
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
            } else if (rn === mypageName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 70},
        })}>
        <Tab.Screen
          name={magazineName}
          component={HomeScreen}
          options={{tabBarActiveTintColor: '#7B61FF'}}
        />
        <Tab.Screen
          name={analysisName}
          component={AnalysisScreen}
          options={{tabBarActiveTintColor: '#7B61FF'}}
        />
        <Tab.Screen
          name={playlistName}
          component={PlayListScreen}
          options={{tabBarActiveTintColor: '#7B61FF'}}
        />
        <Tab.Screen
          name={mypageName}
          component={MyPageScreen}
          options={{tabBarActiveTintColor: '#7B61FF'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <usersStack.Navigator initialRouteName="Splash">
        <usersStack.Group screenOptions={{headerShadowVisible: false}}>
          <usersStack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <usersStack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{title: '회원가입', headerShown: true}}
          />
          <usersStack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: '로그인', headerShown: true}}
          />
          <usersStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </usersStack.Group>
      </usersStack.Navigator>
    </NavigationContainer>
  );
}
