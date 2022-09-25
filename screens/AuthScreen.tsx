import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import Main from '../assets/svg/main'

const AuthScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
      <Main/>
      </View>

      <View style={styles.hi}>

      <CustomButton
                title="Get Started"
                marginTop={140}
                loading={false}
                disabled={false}
                _onPress={()=>{
                  navigation.navigate('SignupScreen')
                }}
                containerStyle={{}}
                color={'white'}
                textStyle={{color: '#4949FF'}}
                />
                <CustomButton
                title="Sign up as a driver"
                marginTop={60}
                loading={false}
                disabled={false}
                _onPress={()=>{}}
                containerStyle={{}}
                textStyle={{color: 'white'}}
                />

            </View>
    </SafeAreaView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  image:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },
  hi: {
    //justifyContent: "center",
  }
})
