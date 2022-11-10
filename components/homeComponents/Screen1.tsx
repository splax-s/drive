import { StyleSheet, Text, Share, View, Dimensions, Animated, Platform,  Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, FlatList, Easing } from 'react-native'
import React,{useEffect, useState, useRef, useCallback} from 'react'
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import Colors from '../../constants/Colors'
import CustomButton from '../../components/CustomButton'
import MapView, {Camera, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import User from '../../assets/svg/user2'
const {width, height} = Dimensions.get('window')
import extraStyle from '../../json.json'
import Home from '../../assets/svg/home'
import Work from '../../assets/svg/work'
import Draggable from 'react-native-draggable';
import CustomTextInput from '../../components/CustomTextInput'
import Shared from '../../assets/svg/share'
import Recents from '../../assets/svg/recent'
import Edit from '../../assets/svg/edit'
import Gps from '../../assets/svg/gps'
import ModalChangeCard from '../../components/ModalChangeCard'
import MasterCard from "../../assets/svg/mastercard"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native'
const splax= extraStyle
import StarRating from 'react-native-star-rating-widget';
import MapViewDirections from 'react-native-maps-directions'
// console.log(width)
import { selectOrigin, selectDestination, selectProfilePic } from '../../redux/slices'
import { useSelector } from 'react-redux'
import Cars from '../../assets/svg/car'
import { TapGestureHandler  } from "react-native-gesture-handler"

const Screen1 = ({navigation, status}) => {
  const insets = useSafeAreaInsets();
  const pic = useSelector(selectProfilePic)
  //console.log(pic)

  const route = useRoute();
  const [scaleAnimation, setScaleAnimation] = useState(new Animated.Value(1))
  const [filledStar, setFilledStar] = useState(0)
  const rotationDegree = useRef(new Animated.Value(0)).current

  const bro = 'Maple Court'
  const bro1 = 'Abike wilson'
    const lookupRef = useRef()
    const modalChangeCard = useRef();
    const [isModalVisible, setModalVisible] = useState(false);
    const [imagePicked, setImagePicked] = useState(false)
    const [picked, setPicked] = useState("https://deleoye.ng/wp-content/uploads/2016/11/Dummy-image.jpg")
    const [scheduled, setScheduled] = useState(true)
    const [loaded, setLoaded]=useState(false)


    const map = useRef(null);
    const onZoomInPress = () => {
      map?.current?.getCamera().then((cam: Camera) => {
          cam.zoom += 1;
          map?.current?.animateCamera(cam);
      });
  };

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
    })

    const hiii = () =>{
      setModalVisible(true)
    }


    const shared = async () => {
      try {
        const result = await Share.share({
          message:
            'Exon | Share your trips with friends and family with love',
            url: 'https://www.github.com/',
            title: 'Exon | Share your trips with friends and family with love'
        },{
          subject: 'Exon | Share your trips with friends and family with love',
          tintColor: '#black'
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    }




  return (
    <>
    <View style={{height: '51%'}}>
      <MapView
      ref={map}
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
      latitudeDelta: 0.0822,
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
            <Image source={{uri:  pic == null ? picked : pic.profile }} style={{height: 40, width: 40, borderRadius: 50,left: 25, top: 15}}/>
          ) : (
            <Image source={require("../../assets/images/hiii.png")} style={{height:100, width:100}}/>
          )}

      </TouchableOpacity>
      <TouchableOpacity style={{position: "absolute", top: 58,right: 25, height: 45, width: 45, backgroundColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: "center"}} onPress={()=>{
        onZoomInPress()
      }}>
              <Gps/>
      </TouchableOpacity>
      {scheduled ? (
        <View style={[styles.scheduled, {top:  (height * .3554)}]}>
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
  )
}

export default Screen1

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
      bottom: "20%",
      right: 0,
      left: 0,
      top: '40%',
      elevation: 100,
    },
    scheduled1: {
      width: '100%',
      backgroundColor: Colors.primary,
      height: height/8,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      alignItems: 'center',
      position: 'absolute',
      flex:1,
      bottom: 0,
      right: 0,
      left: 0,
      top: '61%',
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
    },
    people:{
      marginTop: 6,
      color: '#757575',
      fontFamily: 'lexend-regular',
    },
    second:{

    },
    minutes:{
      marginTop: 6,
      color: Colors.primary,
      fontFamily: 'lexend-regular',
      marginLeft: 'auto'
    },
    minutes1:{
      marginTop: 6,
      color: '#757575',
      fontFamily: 'lexend-regular',
      marginLeft: 'auto',
      fontSize: 12,
    },
    price:{
      fontFamily: 'lexend-medium',
      fontSize: 16,
    },
    deff:{
      position: 'absolute',
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 14,
      height: 52,
      top: 65,
      left: 20,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 1,
      //shadowOpacity: 0.1,
      flexDirection: 'row',
    },
    driver:{
      fontFamily: 'lexend-regular',
      fontSize: 13,
      marginTop: 12,
    },
    content: {
      backgroundColor: 'white',
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    starRowStyle:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'

    },
    starSizeStyle:{
    }
})
