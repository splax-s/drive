import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React,{useEffect, useState, useRef} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import { Formik } from 'formik'
import * as Yup from "yup";
import ErrorText from '../components/ErrorText';

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState("");
  const [error_, setError_] = useState(true);
  const [hasTouchedTel, sethasTouchedTel] = useState(false);
  const phoneRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text1}>Log in</Text>
        <Text style={styles.text2}>Start riding in minutes</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Formik
        initialValues={{
          phonenumber: "",
      }}
      onSubmit={async (values) => {
        Keyboard.dismiss();

        const requestData = {
          phonenumber: values.phonenumber,
        };
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          navigation.navigate('OtpScreen', { number: requestData.phonenumber })
          //navigation.navigate('OtpScreen', { email: requestData.name })
        }, 3000);

        }}

        validationSchema={Yup.object({
          phonenumber: Yup.number()
                .required("Phone number is required")
                .typeError("Invalid phone number")

                .positive("A phone number can't start with a minus")
                .integer("A phone number can't include a decimal point")
                .moreThan(99999999, "Invalid phone number"),
        })}
        >
          {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{}}>
              {error ? (
                    <ErrorText>{error}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                    )}
                     <CustomTextInput
                    onFocus={() => {
                      sethasTouchedTel(true);
                      setError_(false);
                    }}
                    onBlur={handleBlur("phonenumber")}
                    onChangeText={handleChange("phonenumber")}
                    value={values.phonenumber}
                    label="Phone number"
                    placeholder="Enter Phone number"
                    onSubmitEditing={() => {
                      Keyboard.dismiss
                    }}
                    returnKeyType="next"
                    error={errors.phonenumber && hasTouchedTel ? true : undefined}
                    password={false}
                    ref={phoneRef}
                    keypad="phone-pad"
                    phone={true}
                    stylesExtra={{marginTop: 13}}
                  />
                  {errors.phonenumber && hasTouchedTel ? (
                    <ErrorText>{errors.phonenumber}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                  )}
                   <CustomButton
                title="Log In"
                marginTop={20}
                loading={loading}
                disabled={error_ || errors.phonenumber || loading}
                _onPress={()=>{
                    sethasTouchedTel(true);
                    handleSubmit();
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />
                 <KeyboardAvoidingView style={{ marginTop: 292 }}>
                    <Text style={styles.info_login}>
                      New Here?{" "}
                      <Text
                        onPress={() => {
                          navigation.replace("SignupScreen");
                        }}
                        style={styles.highlighted}
                      >
                        Sign Up
                      </Text>
                    </Text>
                  </KeyboardAvoidingView>

            </View>
          )}

        </Formik>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    display: 'flex',
    gap: 10,
    marginTop: 40
  },
  text1:{
    fontSize: 20,
    fontFamily: 'lexend-regular'
  },
  text2:{
    color: '#777878',
    fontSize: 14,
    fontFamily: 'lexend-light',
    marginTop: 10
  },
  highlighted: {
    color: Colors.primary,
  },
  info_login: {
    textAlign: "center",
    fontFamily: "lexend-regular",
    fontSize: 14,
    marginTop: "auto",
    justifyContent: "center",
    alignSelf: "center",
    color: 'rgba(4, 23, 42, 0.7)'
  },

})
