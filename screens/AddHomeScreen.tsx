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
  import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
  import User from "../assets/svg/user2";
  const { width, height } = Dimensions.get("window");
  import extraStyle from "../json.json";
  import Home from "../assets/svg/home";
  import Back from "../assets/svg/back";
  import Work from "../assets/svg/work";
  import Calender from "../assets/svg/calender";
  import SearchIcon from "../assets/svg/location";
  import Draggable from "react-native-draggable";
  import CustomTextInput from "../components/CustomTextInput";
  import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
  import Plus from '../assets/svg/plus'
  import Locat from "../assets/svg/locat"
  import Gps from '../assets/svg/gps'
  import Real from '../assets/svg/real'
import { useDispatch } from "react-redux";
import {setHome} from '../redux/slices'
import { ActivityIndicator } from "react-native-paper";
navigator.geolocation = require("expo-location");

const AddHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
    const fromRef = useRef();
  const whereRef = useRef();
  const [loading, setLoading] = useState(false);
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if(typeof from === 'string' && from.trim().length === 0){
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
      navigation.goBack();

    }, 3000);

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
        <Text style={styles.head}>Add Home</Text>
        <Text>     </Text>
      </View>

      <View style={{ paddingTop: 20, flex: 1, flexGrow: 1 }}>

        <GooglePlacesAutocomplete
          placeholder="Add Home"
          debounce={200}
          minLength={2}
          autoFocus={true}
          returnKeyType={'search'}
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
          currentLocation={true}
          fetchDetails={true}
          textInputProps={{
            placeholderTextColor: 'rgba(117, 117, 117, 1)',
            returnKeyType: "search"
          }}
          renderLeftButton={() => (
            <SearchIcon/>
          )}
          listEmptyComponent={() => (
            <View style={{flex: 1}}>
              <Text style={styles.text}>No results were found</Text>
            </View>
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
                height: 60,
              },
              description: {
                fontFamily: 'lexend-regular'
            },

          }}
          ref={fromRef}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            dispatch(setHome({
              Location:details.geometry.location,
              description: data.description,
            }))
            setFrom(data.description)
            //console.log(data, details);
          }}
          query={{
            key: "AIzaSyBkI2Q0pVP9cuXHc_Xk3N8-nn_wKzSewKM",
            language: "en",
            components: 'country:ng'
          }}
        />
        <CustomButton
          _onPress={handleSubmit}
          title="Save Home"
          marginTop={570}
          loading={loading}
          textStyle={{color: 'white'}}
          disabled={disabled}
          containerStyle={{}}
        />
      </View>
    </SafeAreaView>
  )
}

export default AddHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 30,
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
        top: 35,
        left: '90%',
        elevation: 100,
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
        marginTop: 30,
        height: 45,
        padding: 15,
        paddingHorizontal: 15,
      },

      separator: {

        height: 0,
      },
      listView: {
        position: 'absolute',
          top: 65,
          marginTop: 20,
          borderRadius: 5,
          flex: 1,

      },
      listView1: {
        position: 'absolute',
          top: 50,
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
      text:{
        color: 'rgba(117, 117, 117, 1)',
        fontFamily: 'lexend-regular',
        fontSize: 14,
      },
})
