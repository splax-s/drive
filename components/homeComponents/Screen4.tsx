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
import carDetails from '../../data/cars'
import numbro from 'numbro'
import Right from '../../assets/svg/right'
import LocIcon from "../../assets/svg/locIcon"
import Cancel1 from '../../assets/svg/cancel1'
import Chat from '../../assets/svg/chat'
import Calls from '../../assets/svg/calls'
import Modal from "react-native-modal";
import { useRoute } from '@react-navigation/native'
const splax= extraStyle
import StarRating from 'react-native-star-rating-widget';
import MapViewDirections from 'react-native-maps-directions'
// console.log(width)
import { selectOrigin, selectDestination } from '../../redux/slices'
import { useSelector } from 'react-redux'
import Cars from '../../assets/svg/car'
import Screen5 from './Screen5'

const Screen4 = ({navigation, status, modal}) => {
  const insets = useSafeAreaInsets();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const route = useRoute();
  const [scaleAnimation, setScaleAnimation] = useState(new Animated.Value(1))
  const [filledStar, setFilledStar] = useState(0)
  let props = route?.params;
  let rideRequest = props?.rideRequest;
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
    const zoom = () => {
        map?.current?.fitToCoordinates([{
          latitude: origin.Location.lat,
      longitude:origin.Location.lng,
        }, {latitude: destination.Location.lat,
          longitude:destination.Location.lng,} ],{
          edgePadding: {
            bottom: 200,
            right: 50,
            top: 150,
            left: 50,
          },
          animated: true,
        })
    };
    const markers = [{
      id: '23'
    }]

    const showModalChangeCard = () => {
      modalChangeCard.current.open();
    }

    setTimeout(()=>{
      status(
        <>
              <Screen5 navigation={navigation} status={status} modal={modal}/>
              </>
      )
    }, 5000)


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


  return (
    <>
    <View style={{height: '77%'}}>
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
    latitude: origin.Location.lat,
    longitude:origin.Location.lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }}
    >
       {origin?.Location && (
      <Marker
          coordinate={{
            latitude: origin.Location.lat,
          longitude:origin.Location.lng,
          }}
          title={"Exon"}
          description={origin.description}
          draggable
          onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
        >
          <View style={{backgroundColor: "black", padding: 10, borderRadius: 10, alignItems: "center"}}>
              <User/>
          </View>
        </Marker>)}
    </MapView>
      </View>
      <TouchableOpacity style={styles.deff}>
              <Text>{origin.description.slice(0,20)}</Text>
              <Right/>
              <Text>{destination.description.slice(0,20)}</Text>

      </TouchableOpacity>
      <SafeAreaView style={[styles.miniContainer, {height: 154, paddingHorizontal: 0}]}>
      <View style={{alignItems: 'center'}}>
      <View style={{borderWidth: 2, borderColor:'#D9D9D9', width: '20%', borderRadius: 50}}/>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
      <View style={{
        paddingTop: 36,
      }}>
        <Text style={{
          fontFamily: 'lexend-regular',
          fontSize: 16,
          paddingHorizontal: 30,
          paddingBottom: 36
        }}>Locating the nearest driver</Text>
        <View accessibilityRole={'progressbar'} style={{backgroundColor: '#F8F8F8', height: 10, width: '100%', flexDirection: 'row'}}>
          <Animated.View style={{backgroundColor:Colors.primary, height: 10, width: '20%', marginLeft: 110, transform: [{
          translateX: rotationDegree.interpolate({
            inputRange: [0, 100],
            outputRange: [-width, width * 2.5]
          })
        }]}}/>
          <Animated.View style={{backgroundColor:Colors.primary, height: 10, width: '20%', marginLeft: 110, transform: [{
          translateX: rotationDegree.interpolate({
            inputRange: [0, 100],
            outputRange: [-width, width * 2.5 ]
          })
        }]}}/>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </SafeAreaView>
    </>

  )
}

export default Screen4

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

