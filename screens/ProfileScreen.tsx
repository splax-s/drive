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
  Image,
  KeyboardAvoidingView
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState, useRef, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";
import Back from "../assets/svg/back";
import ProfileIcon from "../assets/svg/profileicon"
import { Formik } from 'formik'
import * as Yup from "yup";
import ErrorText from '../components/ErrorText';
import CustomTextInput from "../components/CustomTextInput";
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfileScreen = ({navigation}) => {
  const passwordRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const [loading, setLoading] = useState(false);
    const [hasTouchedPassword, sethasTouchedPassword] = useState(false);
    const [hasTouchedName, sethasTouchedName] = useState(false);
    const [hasTouchedTel, sethasTouchedTel] = useState(false);
    const [hasTouchedEmail, sethasTouchedEmail] = useState(false);
    const [error, setError] = React.useState("");
    const [error_, setError_] = useState(true);
    const [verified, setVerified] = useState(false)
    const [image, setImage] = useState(null);
    const [imagePicked, setImagePicked] = useState(false)
    const [picked, setPicked] = useState('https://deleoye.ng/wp-content/uploads/2016/11/Dummy-image.jpg')
    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    const pickImage = async () => {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("You've refused to allow this app to access your photos!");
        return;
      }
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });


      if (!result.cancelled) {
        setImage(result.uri);
        try {
          await AsyncStorage.setItem('@image', result.uri)
        } catch (e) {
          // saving error
          console.log(e)
        }
        setPicked(result.uri);
        //console.log(result.uri)
      setImagePicked(true)
      }


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
      getData()
    }, [])

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
        <Text style={styles.head}>Profile</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Schedule')
        }}>
          <Text>       </Text>
        </TouchableOpacity>


      </View>
      <View style={styles.why}>

          {imagePicked ? (
            <Image source={{uri: picked}} style={{height: 80, width: 80, borderRadius: 50}}/>
          ) : (
            <ProfileIcon/>
          )}
          <TouchableOpacity onPress={pickImage}>
          <Text style={styles.link}>Change profile picture</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.h}>
        <Formik
         initialValues={{
            phonenumber: "",
             name: "",
             password: "",
             emailaddress: "",
        }}
        onSubmit={async (values) => {
            Keyboard.dismiss();

            const requestData = {
              phonenumber: values.phonenumber,
              name: values.name.toLowerCase(),
             password: values.password,
             emailaddress: values.emailaddress,
             imageUri: picked.uri,
            };
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              navigation.navigate('OtpScreen', { number: requestData.phonenumber, isSignUP: true })
            }, 3000);

            }}
        validationSchema={Yup.object({
            password: Yup.string()
                .required("Password is required")
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  "Minimum 8 characters, at least an uppercase letter, a lowercase letter and a number"
                ),
            emailaddress: Yup.string()
                .required("Email address is required")
                .email("Invalid email address")
                .trim()
                ,
            phonenumber: Yup.number()
                  .required("Phone number is required")
                  .typeError("Invalid phone number")

                  .positive("A phone number can't start with a minus")
                  .integer("A phone number can't include a decimal point")
                  .moreThan(99999999, "Invalid phone number"),
            name: Yup.string()
              .trim()
              .required("Full name is required"),

          })}
        >
            {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{flex:1}}>
                    {error ? (
                    <ErrorText>{error}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                    )}
                    <CustomTextInput
                    onFocus={() => {
                      sethasTouchedName(true);
                      setError("");
                    }}
                    onBlur={handleBlur("name")}
                    onChangeText={handleChange("name")}
                    value={values.name}
                    label="Name"
                    placeholder="First and Last name"
                    onSubmitEditing={() => {
                      phoneRef.current.focus();
                    }}
                    returnKeyType="next"
                    error={errors.name && hasTouchedName ? true : undefined}
                    password={false}
                    ref={nameRef}
                    person={true}
                    stylesExtra={{marginTop: 13}}
                    splax={{color: '#757575'}}
                  />
                  {errors.name && hasTouchedName ? (
                    <ErrorText>{errors.name}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                  )}
                    <CustomTextInput
                    onFocus={() => {
                      sethasTouchedTel(true);
                      setError("");
                    }}
                    onBlur={handleBlur("phonenumber")}
                    onChangeText={handleChange("phonenumber")}
                    value={values.phonenumber}
                    label="Phone number"
                    placeholder="Enter Phone Number"
                    onSubmitEditing={() => {
                      emailRef.current.focus();
                    }}
                    returnKeyType="next"
                    error={errors.phonenumber && hasTouchedTel ? true : undefined}
                    password={false}
                    ref={phoneRef}
                    keypad="phone-pad"
                    phone={true}
                    splax={{color: '#757575'}}
                    stylesExtra={{marginTop: 13}}
                  />
                  {errors.phonenumber && hasTouchedTel ? (
                    <ErrorText>{errors.phonenumber}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                  )}
                  <CustomTextInput
                    onFocus={() => {
                      sethasTouchedEmail(true);
                      setError("");
                    }}
                    onBlur={handleBlur("emailaddress")}
                    onChangeText={handleChange("emailaddress")}
                    value={values.emailaddress}
                    label="Email address"
                    placeholder="Enter Phone Number"
                    onSubmitEditing={() => {
                      passwordRef.current.focus();
                    }}
                    returnKeyType="next"
                    splax={{color: '#757575'}}
                    error={errors.emailaddress && hasTouchedEmail ? true : undefined}
                    password={false}
                    email={true}
                    ref={emailRef}
                    verify={verified}
                    stylesExtra={{marginTop: 13}}
                  />
                  {errors.emailaddress && hasTouchedEmail ? (
                    <ErrorText>{errors.emailaddress}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                  )}

                    <CustomTextInput
                    onFocus={() => {
                      sethasTouchedPassword(true);
                      setError_(false);
                    }}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    label="Password"
                    placeholder="Enter password"
                    splax={{color: '#757575'}}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    error={errors.password && hasTouchedPassword ? true : undefined}
                    password={true}
                    ref={passwordRef}
                    pass={true}
                    editable={false}
                    stylesExtra={{marginTop: 13}}
                  />
                  {errors.password && hasTouchedPassword ? (
                  <ErrorText>{errors.password}</ErrorText>
                ) : (
                  <ErrorText> </ErrorText>
                )}
                <CustomButton
                title="Next"
                marginTop={20}
                loading={loading}
                disabled={error_ || errors.name || errors.password || errors.phonenumber || errors.emailaddress || loading}
                _onPress={()=>{
                    sethasTouchedName(true);
                    sethasTouchedPassword(true);
                    handleSubmit();
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />
                </View>
            )}

        </Formik>

      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

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
  why: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 35,
  },
  link: {
    textDecorationLine: 'underline',
    fontFamily: 'lexend-regular',
    fontSize: 14,
    color: Colors.primary,
    marginTop: 24
  }
})
