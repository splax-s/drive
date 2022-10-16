import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect, useRef} from 'react'
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const CallScreen = ({navigation}) => {
  const [speaker, setSpeaker] = useState(false)
  const [mute, setMute] = useState(false)

  const change = () => {
    setSpeaker(!speaker)
  }

  const muted = () => {
    setMute(!mute)
  }
  return (
    <View style={styles.container}>
      <StatusBar style= "light"/>
      <View style={styles.names}>
        <Text style={styles.name}>Samuel</Text>
        <Text style={styles.name1}>calling...</Text>
      </View>
      <View style={styles.rounds}>
      <View style={styles.cont}>
        <TouchableOpacity style={[styles.round, {backgroundColor: mute ? 'white' : 'black'}]} onPress={muted}>
          {mute ? (
            <MaterialCommunityIcons name="microphone-off" size={37} color="black" />
          ) : (
            <MaterialCommunityIcons name="microphone-outline" size={37} color="white" />
          )}

        </TouchableOpacity>
        <TouchableOpacity style={[styles.round, {backgroundColor: speaker ? 'white' : 'black'}]} onPress={change}>
          {speaker ? (
            <FontAwesome name="volume-up" size={37} color="black" />
          ) : (
            <FontAwesome5 name="volume-off" size={37} color="white" />
          )}

        </TouchableOpacity>
        <TouchableOpacity style={[styles.round, {backgroundColor: 'red', borderColor: 'red'}]} onPress={()=> {navigation.goBack()}}>
        <MaterialCommunityIcons name="phone-hangup" size={37} color="white" />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default CallScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 30,
    paddingTop: '20%'
},
name:{
  color: "white",
  fontFamily: 'lexend-medium',
  fontSize: 24
},
name1:{
  color: "white",
  fontFamily: 'lexend-regular',
  fontSize: 14
},
round:{
  height: 60,
  width: 60,
  borderRadius: 60,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: 'white'
},
cont:{
  flexDirection: 'row',
  justifyContent: 'space-between',
},
names:{
  alignItems: "center",
  justifyContent: "center",
},
rounds:{
marginTop: '100%'
}
})
