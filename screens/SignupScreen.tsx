import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React,{useEffect, useState, useRef} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import { Formik } from 'formik'
import * as Yup from "yup";
import ErrorText from '../components/ErrorText';

const SignupScreen = ({navigation}) => {
    const passwordRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const [loading, setLoading] = useState(false);
    const [hasTouchedPassword, sethasTouchedPassword] = useState(false);
    const [hasTouchedName, sethasTouchedName] = useState(false);
    const [hasTouchedTel, sethasTouchedTel] = useState(false);
    const [error, setError] = React.useState("");
    const [error_, setError_] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text1}>Get Started</Text>
        <Text style={styles.text2}>Start riding in minutes</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.h}>
        <Formik
         initialValues={{
            phonenumber: "",
             name: "",
             password: "",
        }}
        onSubmit={async (values) => {
            Keyboard.dismiss();

            const requestData = {
              phonenumber: values.phonenumber,
              name: values.name.toLowerCase(),
             password: values.password,
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
                      passwordRef.current.focus();
                    }}
                    returnKeyType="next"
                    error={errors.phonenumber && hasTouchedTel ? true : undefined}
                    password={false}
                    ref={phoneRef}
                    keypad="phone-pad"
                    phone={true}
                  />
                  {errors.phonenumber && hasTouchedTel ? (
                    <ErrorText>{errors.phonenumber}</ErrorText>
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
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    error={errors.password && hasTouchedPassword ? true : undefined}
                    password={true}
                    ref={passwordRef}
                    pass={true}
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
                disabled={error_ || errors.name || errors.password || errors.phonenumber || loading}
                _onPress={()=>{
                    sethasTouchedName(true);
                    sethasTouchedPassword(true);
                    handleSubmit();
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />

                    <KeyboardAvoidingView style={{ marginTop: 20 }}>
                    <Text style={styles.info_login}>
                      Have an account?{" "}
                      <Text
                        onPress={() => {
                          navigation.replace("Login");
                        }}
                        style={styles.highlighted}
                      >
                        Log In
                      </Text>
                    </Text>
                  </KeyboardAvoidingView>
                </View>
            )}

        </Formik>

      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignupScreen

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
      h:{

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
