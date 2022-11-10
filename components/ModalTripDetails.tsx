import React, {useState, useRef, useEffect} from 'react'
import { FlatList, StyleSheet, TouchableOpacity, Image, View, Dimensions, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from "../constants/Colors";
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import CustomButton from "./CustomButton";
import Down from '../assets/svg/down'
import InfiniteScroll from 'react-native-infinite-looping-scroll';
const {width, height} = Dimensions.get('window');
import SwipePicker from 'react-native-swipe-picker'
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import HorizontalScrollMenu, { RouteProps } from '@nyashanziramasanga/react-native-horizontal-scroll-menu/src';
import Back from "../assets/svg/back";
import LocIcon from '../assets/svg/locIcon';
import MasterCard from '../assets/svg/mastercard'
import numbro from 'numbro';

const ModalTripDetails = React.forwardRef((props, ref) => {
    return(
        <RBSheet
        ref={ref}
        height={646}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        customStyles={{
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,

            backgroundColor: "white",
          },

          draggableIcon: {
            backgroundColor: "#C4C4C4",
            width: 50,
            marginTop: 20,
          },
        }}
        >
        <View style={styles.container}>
        <View
        style={{
          flexDirection: "row",
          paddingBottom: 20,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 18
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.close()
          }}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.head}>Ride Details</Text>
        <TouchableOpacity onPress={() => {
        }}>
          <Text>    </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', flexDirection: 'row', marginTop : 10}}>
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
                  <View style={styles.breakdown}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={[styles.name, {color: '#797979'}]}>Cost</Text>
                        <Text style={styles.name}>₦{numbro('8600').format({
                 thousandSeparated: true,
            })}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
                        <Text style={[styles.name, {color: '#797979'}]}>Duration</Text>
                        <Text style={styles.name}>2hr30min</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 36}}>
              <View>
            <Text style={styles.head}>Trip</Text>
            <View style={{justifyContent: 'space-between', flexDirection: "row", marginTop: 25}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LocIcon/>
            <Text style={styles.desc}>Maple Court...</Text>
            </View>
            <Text style={styles.desc1}>12:43 am Pickup</Text>
            </View>
            <View style={{width: 2, backgroundColor: 'rgba(217, 217, 217, 1)', height: 40, borderRadius: 20, left: 8.5}}/>
            <View style={{justifyContent: 'space-between', flexDirection: "row",}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LocIcon/>
            <Text style={styles.desc}>Eko hotel & Suites</Text>
            </View>
            <Text style={styles.desc1}>12:45 pm Dropoff</Text>
            </View>
          </View>
          <View>
          <View style={{marginTop: 23}}>
            <Text style={styles.head}>Payments</Text>
          </View>
          <View style={{ marginTop: 37}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MasterCard/>
            <Text style={styles.desc}>9645</Text>
            </View>
            </View>
          </View>
        </View>
        <CustomButton
          _onPress={()=>{}}
          title="Report an issue"
          marginTop={30}
          loading={false}
          textStyle={{color: 'white'}}
          disabled={false}
          containerStyle={{marginBottom: 30}}
        />
        </View>
        </RBSheet>
    )
})

export default ModalTripDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  head: {
    fontSize: 18,
    fontFamily: "lexend-regular",
  },
  text:{
    color: 'rgba(117, 117, 117, 1)',
    fontFamily: 'lexend-regular',
    fontSize: 15,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  text1:{
    color: 'rgba(117, 117, 117, 1)',
    fontFamily: 'lexend-regular',
    fontSize: 15,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    margin: 0,
    borderWidth: 0,
  },
  textStyle:{
    paddingHorizontal: 14,
    fontFamily: 'lexend-regular',
  },
  loc:{
    marginLeft: 10,
  },
  desc:{
    marginLeft: 12,
    fontFamily: 'lexend-regular',
    fontSize: 15,
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
//   text:{
//     color: 'rgba(117, 117, 117, 1)',
//     fontFamily: 'lexend-regular',
//     fontSize: 14,
//   },
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
  breakdown: {
    marginTop: 30,
  }
})
