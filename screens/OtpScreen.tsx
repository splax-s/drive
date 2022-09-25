import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView } from 'react-native'
import React,{useState, useEffect, useRef} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import ErrorText from '../components/ErrorText';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

const OtpScreen = ({navigation, route}) => {
    const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true)
  const ref = useBlurOnFulfill({ value, cellCount: 5 });
  const modalNoInternet = useRef();
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [error, setError] = useState("");
  const isSignUP = route.params.isSignUP
  useEffect(() => {
    setError("");
    if ( value.length === 5){
        setDisabled(false);
    }
    else{
        setDisabled(true);
    }
  });

  const num = route.params.number;

  const handleSubmit = async () => {
    setLoading(true);

    const requestData = {
      otp: value,
      number: num,
    };

    setTimeout(() => {
      setLoading(false);
      if(isSignUP == true){
        navigation.navigate('IsSignUPScreen')
      }
      else{
        navigation.navigate('Root')
      }


    }, 3000);
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text1}>Enter OTP</Text>
        <Text style={styles.text2}>Enter the 5 digit code sent to +234{num}</Text>
      </View>
      <View style={styles.body}>
        <ErrorText>{error}</ErrorText>
        <CodeField
          ref={ref}
          value={value}
          onChangeText={setValue}
          rootStyle={styles.codeFieldRoot}
          cellCount={5}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={`value-${index}`}
              style={styles.cell}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>

            // <View style={{borderRadius: 50}}>

            //   </View>
          )}
        />
        <CustomButton
          _onPress={handleSubmit}
          title="Confirm"
          marginTop={140}
          loading={loading}
          textStyle={{color: 'white'}}
          disabled={disabled}
          containerStyle={{}}
        />
         <KeyboardAvoidingView style={{ marginTop: 20 }}>
                    <Text style={styles.info_login}>
                      <Text
                        style={styles.highlighted}
                        onPress={() => {
                            navigation.goBack()
                        }}
                      >
                        Go Back
                      </Text>
                    </Text>
                  </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default OtpScreen

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
      body:{
        paddingTop: 20
      },
      cell: {
        width: 59,
        height: 59.21,
        lineHeight: 53,
        alignText: 'center',
        fontSize: 30,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",

        borderColor: "rgba(217, 217, 217, 1)",
        borderWidth: 1,
        overflow: "hidden",
        borderRadius: 10,
        color: "#000",
      },
      focusCell: {
        borderColor: "#000",
      },
      codeFieldRoot: {},
})
