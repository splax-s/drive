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
    Image
  } from "react-native";
  import React, { useEffect, useState, useRef } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Colors from "../constants/Colors";
  import CustomButton from "../components/CustomButton";
  import Back from "../assets/svg/back";
  import SearchIcon from "../assets/svg/location";
  import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
  import Plus from '../assets/svg/plus'
  import Real from '../assets/svg/real'
  import Arrow from '../assets/svg/arrow'
  import ModalDatePicker from '../components/ModalDatePicker'
  import ModalChangeCard from '../components/ModalChangeCard'
  import LocIcon from "../assets/svg/locIcon"
  import MasterCard from "../assets/svg/mastercard"
import { ActivityIndicator } from "react-native-paper";


const ScheduleRideScreen = ({navigation}) => {
    const fromRef = useRef();
  const whereRef = useRef();
  const modalDatePicker = useRef();
  const modalChangeCard = useRef();
  const [loading, setLoading] = useState(false);
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [details, setDetails] = useState(false)
  const [time, setTime] = useState('')
  const [meridian, setMeridian] = useState('')
  useEffect(() => {
    if(typeof from === 'string' && from.trim().length === 0 || typeof to === 'string' && to.trim().length === 0){
        setDisabled(true)
      } else {
        setDisabled(false)
      }
})

  const handleSubmit = async () => {
    setLoading(true);

    const requestData = {
      from: from,
      where: to,
    };

    setTimeout(() => {
      setLoading(false);


    }, 3000);



}

const showModalDatePicker = () => {
    modalDatePicker.current.open();

};

const showModalChangeCard = () => {
  modalChangeCard.current.open();
}

  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.head}>Schedule Ride</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Schedule')
        }}>
          <Text>  </Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 20, flex: 1, flexGrow: 1 }}>

      <ModalDatePicker
          ref={modalDatePicker}
          close={() => {
            modalDatePicker.current.close();
          }}
          details={setDetails}
          time={setTime}
          meridian={setMeridian}
        />
      <ModalChangeCard
          ref={modalChangeCard}
          close={() => {
            modalChangeCard.current.close();
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Pickup Location"
          debounce={200}
          minLength={2}
          autoFocus={true}
          returnKeyType={'search'}
          //suppressDefaultStyles
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          fetchDetails={true}
          listEmptyComponent={() => (
            <View style={{flex: 1}}>
              <Text style={styles.text}>No results were found</Text>
            </View>
          )}
          listLoaderComponent={()=>{
            return(
              <ActivityIndicator
                color={Colors.primary}
                size='small'
                animating={true}
                style={{
                  alignItems: 'center',
                  justifyContent: "center",
                  flex: 1,
                }}
             />
            )
          }}

          renderLeftButton={() => (
            <SearchIcon/>
          )}

          renderRow={results => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                  <View style={{marginLeft: -10}}>
                  <Real/>
                  </View>

                  <Text style={styles.loc}>{results.description}</Text>
                </View>
              );
          }}
          textInputProps={{
            placeholderTextColor: 'rgba(117, 117, 117, 1)',
            returnKeyType: "search"
          }}
          styles={{
            textInput: styles.textInput,
            textInputContainer: styles.textInputContainer,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
            predefinedPlacesDescription: {
                fontSize: 90,
                fontFamily: 'lexend-regular'
            },
            row: {
                backgroundColor: 'white',
                fontFamily: 'lexend-medium',
                height: 56,
              },
              description: {
                fontFamily: 'lexend-regular'
            },

          }}
          ref={fromRef}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setFrom(data.description)
            //console.log(data, details);
          }}
          query={{
            key: "AIzaSyBkI2Q0pVP9cuXHc_Xk3N8-nn_wKzSewKM",
            language: "en",
            components: 'country:ng'
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Dropoff Location"
          debounce={200}
          minLength={2}
          autoFocus={true}
          returnKeyType={'search'}
          listEmptyComponent={() => (
            <View style={{flex: 1}}>
              <Text style={styles.text}>No results were found</Text>
            </View>
          )}
          listLoaderComponent={()=>{
            return(
              <ActivityIndicator
                color={Colors.primary}
                size='small'
                animating={true}
                style={{
                  alignItems: 'center',
                  justifyContent: "center",
                  flex: 1,

                }}
             />
            )
          }}
          //suppressDefaultStyles
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          fetchDetails={true}
          textInputProps={{
            placeholderTextColor: 'rgba(117, 117, 117, 1)',
            returnKeyType: "search"
          }}

          renderLeftButton={() => (
            <SearchIcon/>
          )}

          renderRow={results => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                  <View style={{marginLeft: -10}}>
                  <Real/>
                  </View>

                  <Text style={styles.loc}>{results.description}</Text>
                </View>
              );
          }}
          styles={{
            textInput: styles.textInput,
            textInputContainer: styles.textInputContainer,
            container: { ...styles.autocompleteContainer,
                top: 55, marginTop: 10},
            listView: styles.listView1,
            separator: styles.separator,
            predefinedPlacesDescription: {
                fontSize: 90,
                fontFamily: 'lexend-regular'
            },
            row: {
                backgroundColor: 'white',
                fontFamily: 'lexend-medium',
                height: 56,
              },
              description: {
                fontFamily: 'lexend-regular'
            },
          }}
          ref={whereRef}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            //console.log(data, details);
            setTo(data.description)
          }}
          query={{
            key: "AIzaSyBkI2Q0pVP9cuXHc_Xk3N8-nn_wKzSewKM",
            language: "en",
            components: 'country:ng'
          }}
        />
        <TouchableOpacity style={styles.dates} onPress={showModalDatePicker}>
          <Text style={styles.date1}>Set date and Time</Text>
          <Arrow/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plus}>
          <Plus/>
        </TouchableOpacity>

          {details ? (
            <View style={{marginTop: 36}}>
              <View>
            <Text style={styles.head}>Trip</Text>
            <View style={{justifyContent: 'space-between', flexDirection: "row", marginTop: 37}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LocIcon/>
            <Text style={styles.desc}>{from.slice(0, 23)}...</Text>
            </View>
            <Text style={styles.desc1}>{time} {meridian.toLowerCase()} Pickup</Text>
            </View>
            <View style={{width: 2, backgroundColor: 'rgba(217, 217, 217, 1)', height: 40, borderRadius: 20, left: 8.5}}/>
            <View style={{justifyContent: 'space-between', flexDirection: "row",}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LocIcon/>
            <Text style={styles.desc}>{to.slice(0, 23)}</Text>
            </View>
            <Text style={styles.desc1}>12:45 pm Dropoff</Text>
            </View>
          </View>
          <View>
          <View style={{marginTop: 23}}>
            <Text style={styles.head}>Payments</Text>
          </View>
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
        </View>
          ) : null}

        <CustomButton
          _onPress={handleSubmit}
          title="Schedule Ride"
          marginTop={details ? 130 : 400}
          loading={loading}
          textStyle={{color: 'white'}}
          disabled={disabled}
          containerStyle={{}}
        />
      </View>
    </SafeAreaView>
  )
}

export default ScheduleRideScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 30,
      },
      dates:{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: '42%'
      },
      date1: {
        color: '#4949FF',
        fontFamily: 'lexend-regular',
        fontSize: 14,
      },
      head: {
        fontSize: 18,
        fontFamily: "lexend-regular",
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
        width: "90%",
        flexDirection: 'row',
        justifyContent: "center",
        borderRadius: 50,
        height: 40
      },
      textInputContainer:{
        borderColor: 'rgba(217, 217, 217, 1)',
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        width: "100%",
        marginTop: 20,
        height: 45,
        padding: 15,
        paddingHorizontal: 15,
      },

      separator: {

        height: 0,
      },
      listView: {
        position: 'absolute',
          top: 170,
          marginTop: 20,
          borderRadius: 5,
          flex: 1,

      },
      listView1: {
        position: 'absolute',
          top: 130,
          marginTop: 0,

      },
      autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      loc:{
        marginLeft: 10,
      },
      desc:{
        marginLeft: 12,
        fontFamily: 'lexend-regular',
        fontSize: 14,
      },
      desc1:{
        fontFamily: 'lexend-light',
        fontSize: 14,
        color: '#757575'
      },
      link: {
        textDecorationLine: 'underline',
        fontFamily: 'lexend-regular',
        fontSize: 14,
        color: Colors.primary
      },
      text:{
        color: 'rgba(117, 117, 117, 1)',
        fontFamily: 'lexend-regular',
        fontSize: 14,
      },
})
