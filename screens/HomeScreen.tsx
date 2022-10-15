import { StyleSheet, Text, View, Dimensions, Platform,  Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
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
import Edit from '../assets/svg/edit'
import Gps from '../assets/svg/gps'
import ModalChangeCard from '../components/ModalChangeCard'
import MasterCard from "../assets/svg/mastercard"
import AsyncStorage from '@react-native-async-storage/async-storage';
import carDetails from '../data/cars'
import numbro from 'numbro'
const splax= extraStyle


const HomeScreen = ({navigation}) => {
    const lookupRef = useRef()
    const modalChangeCard = useRef();
    const [imagePicked, setImagePicked] = useState(false)
    const [picked, setPicked] = useState("https://deleoye.ng/wp-content/uploads/2016/11/Dummy-image.jpg")
    const [scheduled, setScheduled] = useState(true)
    const [rideStatus, setRideStatus] = useState('rideType')
    const showModalChangeCard = () => {
      modalChangeCard.current.open();
    }

    useEffect(()=>{
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@image')
          if(value !== null) {
            setImagePicked(true)
            setPicked(value)
          }
        } catch(e) {
          // error reading value
          console.log(e)
        }
      }
      //console.log('hi')
      getData()
    },[imagePicked, picked])

    //car ride type finder


  return (
    <View style={styles.container}>
      {rideStatus === "rideType" ? (
        <>
        <View style={{height: '61%'}}>
        <ModalChangeCard
          ref={modalChangeCard}
          close={() => {
            modalChangeCard.current.close();
          }}
        />
        <MapView
      style={styles.map}
      showsUserLocation = {true}
      provider={PROVIDER_GOOGLE}
      followsUserLocation={true}
     zoomEnabled = {true}
     customMapStyle={splax}
     //zoomControlEnabled={true}
          initialRegion={{
            latitude: 6.436034,
            longitude: 3.444399,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      >
        <Marker
            coordinate={{ latitude: 6.436034,
               longitude: 3.444399 }}
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
        <SafeAreaView style={[styles.miniContainer, {height: 297}]}>
        <View style={{alignItems: 'center'}}>
        <View style={{borderWidth: 2, borderColor:'#D9D9D9', width: '20%', borderRadius: 50}}/>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View>
          <FlatList
          data={carDetails}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) =>(
            <View style={{alignItems: 'center', flexDirection: 'row', marginTop : 35}}>
                <View style={{alignItems: 'center'}}>
                  <Image source={item.image} style={{height: 50, width: 79.22}}/>
                  </View>
                  <View style={{alignItems: 'center'}}>
                  <Text style={[styles.name,{marginRight  : "auto"}]}>{item.name}</Text>
                  <Text>{item.people} people</Text>
                  </View>
                  <View style={{marginLeft  : "auto"}}>
                  <Text style = {{marginLeft : "auto"}}>₦{numbro(item.priceStart).format({thousandSeparated: true,})} - {numbro(item.priceEnd).format({thousandSeparated: true,})}</Text>
                  <Text>{item.distance} minutes away</Text>
                  </View>
                </View>

          )}
          showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 0}}
          />
        <View style={{justifyContent: 'space-between', flexDirection: "row", marginTop: 37}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MasterCard/>
            <Text style={styles.desc}>9645</Text>
            </View>
            <TouchableOpacity onPress={showModalChangeCard}>
            <Text style={styles.link}>Switch</Text>
            </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </SafeAreaView>
        </>
  ) : (
    <>
    <View style={{height: '51%'}}>
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
        {/* <Marker
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
          </Marker> */}
      </MapView>
      </View>
      <TouchableOpacity style={{position: "absolute", top: 45}} onPress={()=>{
        navigation.navigate('Profile')
      }}>

              {imagePicked ? (
            <Image source={{uri: picked}} style={{height: 40, width: 40, borderRadius: 50,left: 25, top: 15}}/>
          ) : (
            <Image source={require("../assets/images/hiii.png")} style={{height:100, width:100}}/>
          )}

      </TouchableOpacity>
      <View style={{position: "absolute", top: 58,right: 25, height: 45, width: 45, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: "center"}}>
              <Gps/>
      </View>
      {scheduled ? (
        <View style={styles.scheduled}>
          <Text style={styles.texts12}>Ride Scheduled for 10 am Tomorrow</Text>
          <TouchableOpacity style={{marginBottom: 30}} onPress={()=>{navigation.navigate('Schedule')}}>
          <Edit/>
          </TouchableOpacity>
          </View>
      ) :
      null}

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
    </>
  )}

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
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 100,
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
      },
      scheduled: {
        width: '100%',
        backgroundColor: Colors.primary,
        height: height/8,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        flex:1,
        bottom: 0,
        right: 0,
        left: 0,
        top: '45%',
        elevation: 100,
      },
      texts12:{
        fontSize: 14,
        fontFamily: 'lexend-regular',
        color: 'white',
        marginBottom: 30,
      },
      desc:{
        marginLeft: 12,
        fontFamily: 'lexend-regular',
        fontSize: 14,
      },
      link: {
        textDecorationLine: 'underline',
        fontFamily: 'lexend-regular',
        fontSize: 14,
        color: Colors.primary
      },
      name:{
        fontSize: 16,
        fontFamily: 'lexend-regular',
      }
})
