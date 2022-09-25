import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import MapView from 'react-native-maps';
const {width, height} = Dimensions.get('window')


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.miniContainer}>

      </View>
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
        width: width,
        height: "70%",
      },
      miniContainer:{

      }
})
