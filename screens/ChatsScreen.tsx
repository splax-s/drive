import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Platform,
  FlatList,
  TextInput,
  Image
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import User from "../assets/svg/user2";
const { width, height } = Dimensions.get("window");
import extraStyle from "../json.json";
import Home from "../assets/svg/home";
import Back from "../assets/svg/back";
import Call from '../assets/svg/call';
import Send from '../assets/svg/sent'
import Calender from "../assets/svg/calender";
import SearchIcon from "../assets/svg/location";
import Draggable from "react-native-draggable";
import CustomTextInput from "../components/CustomTextInput";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Plus from '../assets/svg/plus'
import Real from '../assets/svg/real'
import { ActivityIndicator } from "react-native-paper";

const ChatsScreen = ({navigation}) => {
  const [currentUser] = useState({
    name: 'John Doe',
  });
  const [chatUser] = useState({
    name: 'Robert Henry',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
    {
      sender: 'Robert Henry',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: 'I am good, how about you?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: `😊😇`,
      time: '6:02 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Can't wait to meet you.`,
      time: '6:03 PM',
    },
    {
      sender: 'John Doe',
      message: `That's great, when are you coming?`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Around 4 to 6 PM.`,
      time: '6:04 PM',
    },
    {
      sender: 'John Doe',
      message: `Great, don't forget to bring me some mangoes.`,
      time: '6:05 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Sure!`,
      time: '6:05 PM',
    },
  ]);

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }
  return (
    <SafeAreaView style={styles.container} >
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.head}>Samuel</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Call')
        }}>
          <Call />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', borderWidth: 1, borderColor: '#F8F8F8', paddingHorizontal: 0}}/>
      <View style={{ paddingTop: 0, flex: 1 }}>
      <FlatList
          style={{marginBottom: 20}}
          inverted={true}
          showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={{ marginTop: 30, flexDirection: item.sender === currentUser.name
                        ? 'column'
                        : 'row', }}>
                { item.sender !== currentUser.name ? (
                  <View style={{borderRadius: 50, height:40, width: 40, backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../assets/icon/image.jpeg')} style={{height: 30, width: 30, borderRadius: 50}}/>
                  </View>
                ) :null}

                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor: '#F8F8F8',
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 0,
                    padding: 10,
                    borderRadius: 10,
                    borderTopLeftRadius:
                      item.sender === currentUser.name ? 10 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 10,
                    marginLeft: item.sender === currentUser.name
                      ? 0
                      : 12,
                  }}
                >

                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'lexend-regular',
                    }}
                  >
                    {item.message}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder='Type your message'
              selectionColor={Colors.primary}
              placeholderTextColor={'#757575'}
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}
            >
              {/* <Icon name='send' type='material' /> */}
              <Send/>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default ChatsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    paddingBottom: 10
  },
  head: {
    fontSize: 18,
    fontFamily: "lexend-regular",
  },
  dates:{
    flexDirection: "row",
  },
  date1: {
    color: '#4949FF',
    fontFamily: 'lexend-regular',
    fontSize: 14,
  },
  plus:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    backgroundColor: 'white',
    height: 40,
    width: 40,
    shadowOpacity: 0.20,
    shadowOffset: {width: 10,height: 10},
    top: 55,
    left: '90%',
    elevation: 1,
    shadowRadius: 4,
  },
  textInput: {
    marginTop: 5,
    color: "black",
    fontSize: 14,
    fontFamily: 'lexend-regular',
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "center",
    borderRadius: 50,
    height: 40
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 0,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    width: '100%',
  },
  messageInput: {
    flex: 1,
    paddingHorizontal: 10,
    width: '100%',
    fontFamily: 'lexend-regular',
    marginLeft: 10,
    fontSize: 14,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
})
