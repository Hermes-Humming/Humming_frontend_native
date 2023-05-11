import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import TopMenuBar from "../../../../component/TopMenuBar";

//screens
import SelectMusic from "./SelectMusic";
import TrainingVoice from "./TrainingVoice";
import ResultSynthesis from "./ResultSynthesis";

function AITraining({ navigation }) {
  //입력값 관리
  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<boolean>(true);
  const [singer, setSinger] = useState<string>("");
  const [singerError, setSingerError] = useState<boolean>(true);
  const [btnDisableState, setbtnDisableState] = useState<boolean>(true);

  useEffect(() => {
    if (title.length == 0) setTitleError(true);
    else setTitleError(false);
  }, [title]);

  useEffect(() => {
    if (singer.length == 0) setSingerError(true);
    else setSingerError(false);
  }, [singer]);

  useEffect(() => {
    if (titleError === false && singerError === false)
      setbtnDisableState(false);
    else setbtnDisableState(true);
  });

  const onChangeTitle = (event) => {
    setTitle(event);
  };

  const onChangeSinger = (event) => {
    setSinger(event);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topMenuBar}>
        <TopMenuBar />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginLeft: 30, fontSize: 36, marginBottom: 20 }}>
          어떤 노래를 합성해볼까요?
        </Text>

        <View style={{ height: 120 }}>
          <Text style={styles.boxesText}>노래 제목</Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.inputBox}
              value={title}
              onChangeText={(text) => onChangeTitle(text)}
            ></TextInput>
          </View>
          {titleError ? (
            <Text style={styles.errorMsg}>제목은 꼭 필요한 정보에요.</Text>
          ) : null}
        </View>
        <View style={{ marginBottom: 20, height: 120 }}>
          <Text style={styles.boxesText}>가수명</Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.inputBox}
              onChangeText={(text) => onChangeSinger(text)}
              value={singer}
            ></TextInput>
          </View>
          {singerError ? (
            <Text style={styles.errorMsg}>가수명은 꼭 필요한 정보에요.</Text>
          ) : null}
        </View>
        <View style={{ alignItems: "flex-end", marginRight: 35 }}>
          <TouchableOpacity
            disabled={btnDisableState}
            onPress={() => navigation.navigate("SelectMusic")}
          >
            <Text
              style={btnDisableState ? styles.disableNextText : styles.nextText}
            >
              다음
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Analysis({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="InputMusicInfo">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={AITraining} />
        <Stack.Screen name="SelectMusic" component={SelectMusic} />
        <Stack.Screen name="TrainingVoice" component={TrainingVoice} />
        <Stack.Screen name="ResultSynthesis" component={ResultSynthesis} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Analysis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topMenuBar: {
    marginTop: 50,
  },
  boxesText: {
    marginLeft: 30,
    marginBottom: 10,
    color: "#4B4B4B",
    fontSize: 18,
  },
  inputBox: {
    width: 345,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#BBA5FF",
    paddingLeft: 15,
  },
  errorMsg: {
    marginLeft: 35,
    marginTop: 5,
    color: "#787878",
    fontSize: 10,
  },
  nextText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#BBA5FF",
  },
  disableNextText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EFF4F4",
  },
});
