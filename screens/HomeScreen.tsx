import { StyleSheet, Text, Share, View, Dimensions, Animated, Platform,  Keyboard, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Image, FlatList, Easing } from 'react-native'
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
// console.log(width)


const HomeScreen = ({navigation}) => {
  //const {rideRequest} = route.params

  const route = useRoute();

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




    //car ride type finder
    const content1 = (
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
    )

    const content2 = (
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
            latitudeDelta: 0.0822,
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
        <TouchableOpacity style={styles.deff}>
                <Text>{bro.slice(0,20)}</Text>
                <Right/>
                <Text>{bro1.slice(0,20)}</Text>

        </TouchableOpacity>
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
            <TouchableOpacity style={{alignItems: 'center', flexDirection: 'row', marginTop : 35}} onPress={()=> {
              setRideStatus(content3)
            }}>
                <View style={{alignItems: 'center'}}>
                  <Image source={item.image} style={{height: 50, width: 79.22}}/>
                  </View>
                  <View style={{alignItems: 'center', marginLeft: 5}}>
                  <Text style={[styles.name,{marginRight  : "auto"}]}>{item.name}</Text>
                  <Text style={styles.people}>{item.people} people</Text>
                  </View>
                  <View style={[styles.second,{marginLeft  : "auto"}]}>
                  <Text style = {[styles.price]}>₦{numbro(item.priceStart).format({thousandSeparated: true,})} - {numbro(item.priceEnd).format({thousandSeparated: true,})}</Text>
                  <Text style={styles.minutes}>{item.distance} minutes away</Text>
                  </View>
                </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{height: 170}}
          />
          <View style={{width: '100%', borderColor: '#F8F8F8', borderWidth: 0.8, marginTop: 20}}/>
        <View style={{justifyContent: 'space-between', flexDirection: "row", marginTop: 27}}>
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
    )

    const content3 =(
      <>
      <View style={{height: '71%'}}>
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
            latitudeDelta: 0.0822,
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
        <TouchableOpacity style={styles.deff}>
                <Text>{bro.slice(0,20)}</Text>
                <Right/>
                <Text>{bro1.slice(0,20)}</Text>

        </TouchableOpacity>
        <SafeAreaView style={[styles.miniContainer, {height: 204}]}>
        <View style={{alignItems: 'center'}}>
        <View style={{borderWidth: 2, borderColor:'#D9D9D9', width: '20%', borderRadius: 50}}/>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View>
        <View style={{justifyContent: 'space-between', flexDirection: "row", marginTop: 36}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LocIcon/>
            <Text style={styles.desc}>{bro}</Text>
            </View>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('SearchScreen')
            }}>
            <Text style={styles.link}>Switch</Text>
            </TouchableOpacity>
        </View>
        <CustomButton
          _onPress={()=>{
            setRideStatus(content4)
          }}
          title="Confirm"
          marginTop={40}
          textStyle={{color: 'white'}}
          containerStyle={{}}
        />
        </View>
        </TouchableWithoutFeedback>
        </SafeAreaView>
      </>
    )
    const content4 = (
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
            latitude: 6.436034,
            longitude: 3.444399,
            latitudeDelta: 0.0822,
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
        <TouchableOpacity style={styles.deff}>
                <Text>{bro.slice(0,20)}</Text>
                <Right/>
                <Text>{bro1.slice(0,20)}</Text>

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

    const content5 = (
      <>
      <View style={{height: '70%'}}>

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
            latitudeDelta: 0.0822,
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
        <TouchableOpacity style={styles.deff}>
                <Text>{bro.slice(0,20)}</Text>
                <Right/>
                <Text>{bro1.slice(0,20)}</Text>

        </TouchableOpacity>
        <View style={styles.scheduled1}>
          <Text style={styles.texts12}>Driver is 5 minutes away</Text>
          <TouchableOpacity style={{marginBottom: 30}} onPress={shared}>
          {/* <Text>                           </Text> */}
          <Shared/>
          </TouchableOpacity>
          </View>
        <SafeAreaView style={[styles.miniContainer, {height: 229}]}>
        <View style={{alignItems: 'center'}}>
        <View style={{borderWidth: 2, borderColor:'#D9D9D9', width: '15%', borderRadius: 50}}/>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
          <View>
        <View style={{alignItems: 'center', flexDirection: 'row', marginTop : 26}}>
                <View style={{alignItems: 'center'}}>
                  <View style={{borderRadius: 50, height:60, width: 60, backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('../assets/icon/image.jpeg')} style={{height: 50, width: 50, borderRadius: 50}}/>
                  </View>
                  </View>
                  <View style={{alignItems: 'center', marginLeft: 12}}>
                  <Text style={[styles.name,{marginRight  : "auto"}]}>Samuel</Text>
                  <Text style={styles.people}>Black Tesla Model 3</Text>
                  </View>
                  <View style={[styles.second,{marginLeft  : "auto"}]}>
                  <Text style = {[styles.price,{marginLeft: 'auto', fontSize: 17}]}>XYC34468</Text>
                  <Text style={styles.minutes1}>License Plate</Text>
                  </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity onPress={()=> {navigation.navigate('Call')}}>
                      <Calls/>
                      </TouchableOpacity>
                      <Text style={styles.driver}>Call Driver</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity onPress={()=>{
                        navigation.navigate('Chats')
                      }
                      }>
                      <Chat/>
                      </TouchableOpacity>
                      <Text style={styles.driver}>Chat</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity onPress={()=>{
                        hiii()
                        }}>
                      <Cancel1/>
                      </TouchableOpacity>
                      <Text style={[styles.driver, {color: '#FF3737'}]}>Cancel ride</Text>
                    </View>
                  </View>
                </View>
        </TouchableWithoutFeedback>
        </SafeAreaView>
      </>
    )


    const [rideStatus, setRideStatus] = useState(content1)
      const durationMs = 3500
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

          setRideStatus(content4)
        }
      }, [rideRequest])


      setTimeout(() => {
        setLoaded(true);
      }, 10000)


      useEffect(() => {
        if(loaded) {
          setRideStatus(content5)
        }
      }, [loaded])
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
            <TouchableOpacity style={{height: 42, backgroundColor: "#FFF1F1", width:118, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
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
        top: '45%',
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
        top: '63%',
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
})
