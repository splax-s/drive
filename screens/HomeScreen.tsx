import { StyleSheet, Text, Share, View, Dimensions, Animated, Platform,  Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, FlatList, Easing } from 'react-native'
import React,{useEffect, useState, useRef, useCallback} from 'react'
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import MapView, {Camera, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import User from '../assets/svg/user2'
const {width, height} = Dimensions.get('window')
import extraStyle from '../json.json'
import Home from '../assets/svg/home'
import Work from '../assets/svg/work'
import Draggable from 'react-native-draggable';
import CustomTextInput from '../components/CustomTextInput'
import Shared from '../assets/svg/share'
import Recents from '../assets/svg/recent'
import Edit from '../assets/svg/edit'
import Gps from '../assets/svg/gps'
import ModalChangeCard from '../components/ModalChangeCard'
import MasterCard from "../assets/svg/mastercard"
import AsyncStorage from '@react-native-async-storage/async-storage';
import carDetails from '../data/cars'
import numbro from 'numbro'
import Right from '../assets/svg/right'
import LocIcon from "../assets/svg/locIcon"
import Cancel1 from '../assets/svg/cancel1'
import Chat from '../assets/svg/chat'
import Calls from '../assets/svg/calls'
import Modal from "react-native-modal";
import { useRoute } from '@react-navigation/native'
const splax= extraStyle
import StarRating from 'react-native-star-rating-widget';
import MapViewDirections from 'react-native-maps-directions'
// console.log(width)
import { selectOrigin, selectDestination } from '../redux/slices'
import { useSelector } from 'react-redux'
import Cars from '../assets/svg/car'
import Screen1 from '../components/homeComponents/Screen1'
import Screen2 from '../components/homeComponents/Screen2'
import Screen5 from '../components/homeComponents/Screen5'
import Screen6 from '../components/homeComponents/Screen6'


const HomeScreen = ({navigation}) => {
  //const {rideRequest} = route.params
  const insets = useSafeAreaInsets();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const route = useRoute();
  const [scaleAnimation, setScaleAnimation] = useState(new Animated.Value(1))
  const [filledStar, setFilledStar] = useState(0)
  let props = route?.params;
  let rideRequest = props?.rideRequest;
  const rotationDegree = useRef(new Animated.Value(0)).current
    const [isModalVisible, setModalVisible] = useState(false);
    const [loaded, setLoaded]=useState(false)

    //car ride type finder

    useEffect(() => {
       console.log(filledStar);
      // setFilledStar(filledStar);
      // console.log(filledStar, " second value")
    }, [filledStar])



    const click = useCallback((j: any) => {
      //const splax = {filledStar}
       setFilledStar(j)
      //console.log(filledStar, "is filled star")
    },[filledStar])
    const [rideStatus, setRideStatus] = useState(
    <>
    <Screen1 navigation={navigation}/>
    </>)
      const durationMs = 3500
      const [star, setStar] = useState(true)

  Animated.loop(Animated.timing(
    rotationDegree,
    {
      toValue: 50,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: false
    }
  )).start()

      useEffect(() => {
        if(rideRequest) {

          setRideStatus(<>
          <Screen2 navigation={navigation} status={setRideStatus} modal={setModalVisible}/>
          </>)
        }
      }, [rideRequest])
    return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible}
      // animationIn="slideInLeft"
      // animationOut="slideOutRight"

      onBackButtonPress={()=> {
        setModalVisible(!isModalVisible)
      }}
      // onBackdropPress={()=> {
      //   setModalVisible(!isModalVisible)
      // }}
      >
        <View style={styles.content}>
          <Text style={{fontSize:18,
          fontFamily: 'lexend-regular'
          }}>Cancel Ride</Text>
          <Text style={{fontSize:14,
          fontFamily: 'lexend-regular',
          color: '#757575',
          marginTop:24
          }}>Are you sure you want to end the trip?</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24}}>
            <TouchableOpacity style={{height: 42, width:118, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}} onPress={()=> {setModalVisible(false)}}>
              <Text style={{fontSize:14, fontFamily: 'lexend-medium'}}>Cancel</Text>
            </TouchableOpacity>
            <Text>                </Text>
            <TouchableOpacity style={{height: 42, backgroundColor: "#FFF1F1", width:118, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}
            onPress={()=> {
              setModalVisible(false)
              setTimeout(()=>{
                setRideStatus(
                  <>
                  <Screen6 navigation={navigation} status={setRideStatus}/>
                  </>
                )
              }, 300)

            }}>
              <Text style={{fontSize:14, color: '#FF3737', fontFamily: 'lexend-medium'}}>End trip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
            {rideStatus}


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
