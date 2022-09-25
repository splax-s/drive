import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import Main from '../assets/svg/main'

const Login_Screen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hiii}>
        <Image source={require('../assets/images/qwerty.gif')} style={{height: 134, width: 245}}/>
        <Text style={styles.qwerty}>You’re all setup</Text>
        <Text style={styles.qwerty1}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official</Text>
      </View>
      <View style={styles.hi}>
      <CustomButton
                title="Log in"
                marginTop={85}
                loading={false}
                disabled={false}
                _onPress={()=>{
                  navigation.navigate('Login')
                }}
                containerStyle={{}}
                color={'white'}
                textStyle={{color: '#4949FF'}}
                />
      </View>
    </SafeAreaView>
  )
}

export default Login_Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    justifyContent: "center",
    paddingTop: 200
  },
  image:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },
  hi: {
    //justifyContent: "center",
  },
  hiii: {
    justifyContent: "center",
    alignItems: "center",
  },
  qwerty: {
    fontFamily: 'lexend-regular',
    fontSize: 20,
    color: 'white',
    lineHeight: 25,
    marginTop: 58
  },
  qwerty1: {
    fontFamily: 'lexend-regular',
    fontSize: 14,
    color: 'white',
    lineHeight: 18,
    textAlign: "center",
    marginTop: 24
  }
})
