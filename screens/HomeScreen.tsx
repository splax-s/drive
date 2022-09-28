import { StyleSheet, Text, View, Dimensions, Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image } from 'react-native'
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
const splax= extraStyle


const HomeScreen = ({navigation}) => {
    const lookupRef = useRef()
  return (
    <View style={styles.container}>
      <View style={{height: height-500}}>
      <MapView
      style={styles.map}
      showsUserLocation = {true}
      provider={PROVIDER_GOOGLE}
      followsUserLocation={true}
     zoomEnabled = {true}
     customMapStyle={splax}
     //zoomControlEnabled={true}
          initialRegion={{
            latitude: 28.579660,
            longitude: 77.321110,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      >
        <Marker
            coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
            title={"Exon"}
            description={"Your current location"}
            draggable
            onDragEnd={
                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
              }
          >
            <View style={{backgroundColor: "black", padding: 10, borderRadius: 10, alignItems: "center"}}>
                <User/>
            </View>
          </Marker>
      </MapView>
      </View>
      <View style={{position: "absolute", top: 45}}>
              <Image source={require("../assets/images/hiii.png")} style={{height:100, width:100}}/>

      </View>
      <View style={{position: "absolute", top: 58,right: 25, height: 45, width: 45, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: "center"}}>
              <Gps/>
      </View>

      <SafeAreaView style={styles.miniContainer}>
        <View style={{alignItems: 'center'}}>
        <View style={{borderWidth: 2, borderColor:'#D9D9D9', width: '20%', borderRadius: 50}}/>
        </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View>
        <Text style = {styles.text}>Hello Michael</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('SearchScreen')
        }}>
        <CustomTextInput
                    label=""
                    placeholder="Where are you going?"
                    onFocus={ () =>{
                      navigation.navigate('SearchScreen')
                      Keyboard.dismiss()
                       }}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    password={false}
                    keypad="phone-pad"
                    search={true}
                    ref={lookupRef}
                    stylesExtra={{marginTop: 4}}
                  />
                  </TouchableOpacity>
                  <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
                  <TouchableOpacity style={styles.hi} onPress={()=>{navigation.navigate('AddHome')}}>
                    <Home/>
                    <Text style = {styles.texts}>Add Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.hi} onPress={()=>{navigation.navigate('AddWork')}}>
                    <Work/>
                    <Text style = {styles.texts}>Add Work</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.hi}>
                    <Recents/>
                    <Text style = {styles.texts1}>Tiamiyu Savage St, Victoria Island</Text>
                  </TouchableOpacity>
                  </ScrollView>
                  </View>
            </TouchableWithoutFeedback>
    </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

    },
    map: {
        width: '100%',
        height: '110%',
      },
      miniContainer:{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical:-20,
      },
      text:{
        fontSize: 18,
        fontFamily: 'lexend-medium',
        paddingTop: 24
      },
      hi:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30
      },
      texts:{
        paddingLeft: 13,
        fontSize: 16,
        fontFamily: 'lexend-regular',
        color: 'grey'
      },
      texts1:{
        paddingLeft: 13,
        fontSize: 14,
        fontFamily: 'lexend-regular',
        color: 'grey'
      }
})
