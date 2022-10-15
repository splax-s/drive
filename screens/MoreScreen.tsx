import { StyleSheet, Text, View, Dimensions, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, ActivityIndicator, Platform } from 'react-native'
import React,{useEffect, useState, useRef} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import User from '../assets/svg/user2'
const {width, height} = Dimensions.get('window')
import extraStyle from '../json.json'
import Home from '../assets/svg/home'
import Work from '../assets/svg/work'
import Draggable from 'react-native-draggable';
import CustomTextInput from '../components/CustomTextInput'
import Back from '../assets/svg/back'
import Recents from '../assets/svg/recent'
import Gps from '../assets/svg/gps'
import Person from '../assets/svg/user'
import Arrow from '../assets/svg/arrow'
import Location from '../assets/svg/locIcon'
import Trash from '../assets/svg/trash'
import Logout from '../assets/svg/logout'
import Service from '../assets/svg/24'
import ModalDeleteAccount from '../components/ModalDeleteAccount'
import ModalLogOut from '../components/ModalLogOut'
import { WebView } from 'react-native-webview';
import Modal from "react-native-modal";
import Plus from '../assets/svg/plus'
import { EvilIcons } from '@expo/vector-icons';

const MoreScreen = ({navigation}) => {
  const modalDeleteAccount = useRef();
  const modalLogOut = useRef();
  const [visible, setVisible] = useState(false)

  const mode = () => {
    setVisible(!visible)
  }

  const deleted = () => {
    navigation.navigate('AuthScreen')
  }

  const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ModalDeleteAccount
          ref={modalDeleteAccount}
          close={() => {
            modalDeleteAccount.current.close();
          }}
        />
        <ModalLogOut
        ref={modalLogOut}
        close={() => {
          modalLogOut.current.close();
        }}
        delete ={deleted}
        />
        <Modal isVisible={visible} deviceWidth={deviceWidth}
        onBackdropPress={mode}
      deviceHeight={deviceHeight}
      style={{width: '100%', margin: 0, marginTop: "15%"}}
      >
          <SafeAreaView style={{
            flex: 1
          }}>
            <View style={{
              paddingHorizontal: 20,
              paddingBottom: 15
            }}>
            <TouchableOpacity onPress={mode} style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
            }}>
              <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            </View>

            <View style={{height: '90%', width: '100%'}}>
            <WebView
              source={{ uri: 'https://github.com' }}
              originWhitelist={['*']}
              scrollEnabled={true}
              startInLoadingState={true}
              renderLoading={() => <ActivityIndicator
                color={Colors.primary}
                size='large'
                style={{
                  alignItems: 'center',
                  justifyContent: "center",
                  flex: 1,
                  marginBottom: "50%"
                }}
             /> }
            />
            </View>
          </SafeAreaView>
        </Modal>
      <Text style={styles.head}>More</Text>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 37}} onPress={()=>{
        navigation.navigate('Profile')
      }}>
        <View style={{flexDirection: 'row'}}>
        <Person/>
        <View style={{marginLeft: 12}}>
        <Text style={{fontSize: 16, fontFamily: 'lexend-regular'}}>Profile</Text>
        <Text style={{fontSize: 14, fontFamily: 'lexend-regular', color: '#757575', marginLeft: -3}}> personal information</Text>
        </View>
        </View>
        <Arrow/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}} onPress={()=>{}}>
        <View style={{flexDirection: 'row'}}>
        <Location/>
        <View style={{marginLeft: 12}}>
        <Text style={{fontSize: 16, fontFamily: 'lexend-regular'}}>Saved places</Text>
        <Text style={{fontSize: 14, fontFamily: 'lexend-regular', color: '#757575', marginLeft: -3}}> your work and home address</Text>
        </View>
        </View>
        <Arrow/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}} onPress={()=>{
        mode()
      }}>
        <View style={{flexDirection: 'row'}}>
        <Service/>
        <View style={{marginLeft: 12}}>
        <Text style={{fontSize: 16, fontFamily: 'lexend-regular'}}>Help</Text>
        <Text style={{fontSize: 14, fontFamily: 'lexend-regular', color: '#757575', marginLeft: -3}}> Contact support</Text>
        </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}} onPress={()=>{
        modalDeleteAccount.current.open()
      }}>
        <View style={{flexDirection: 'row'}}>
        <Trash/>
        <View style={{marginLeft: 12}}>
        <Text style={{fontSize: 16, fontFamily: 'lexend-regular', color: '#FF3737'}}>Delete account</Text>
        <Text style={{fontSize: 14, fontFamily: 'lexend-regular', color: '#757575', marginLeft: -3}}> Erase your data</Text>
        </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}} onPress={()=>{
        modalLogOut.current.open()
      }}>
        <View style={{flexDirection: 'row'}}>
        <Logout/>
        <View style={{marginLeft: 12}}>
        <Text style={{fontSize: 16, fontFamily: 'lexend-regular', color: '#FF3737'}}>Log out</Text>
        </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default MoreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30

},
head: {
  fontSize: 20,
  fontFamily: 'lexend-medium'
},
})
