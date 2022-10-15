import React, {useState, useRef, useEffect} from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, Dimensions, ScrollView, Image } from "react-native";
import { Text } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from "../constants/Colors";
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import CustomButton from "./CustomButton";
import Down from '../assets/svg/down'
import Back from "../assets/svg/back";
import Check from "../assets/svg/check"
import Add from "../assets/svg/add"
import ModalAddCard from './ModalAddCard'

const ModalChangeCard = React.forwardRef((props, ref) => {
    const modalAddCard = useRef();
    const showModalAddCard = () => {
        modalAddCard.current.open();
      }
    return(
        <RBSheet
        ref={ref}
    height={400}
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
    }}>
        <View style={styles.container}>
        <ModalAddCard
          ref={modalAddCard}
          close={() => {
            modalAddCard.current.close();
          }}
        />
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
        <Text style={styles.head}>Payments Options</Text>
        <TouchableOpacity onPress={() => {
        }}>
          <Text>  </Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: "row", marginTop: 37, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../assets/images/money.png')} style={{height: 36, width: 36}} />
            <Text style={styles.desc}>Maple court</Text>
            </View>
            <Check/>
            </View>
      <View style={{justifyContent: 'space-between', flexDirection: "row", marginTop: 32, alignItems: 'center'}}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={showModalAddCard}>
            <Add/>
            <Text style={styles.desc}>Add credit or debit card</Text>
            </TouchableOpacity>
            </View>
        </View>

        </RBSheet>
    )
})

export default ModalChangeCard

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
  desc:{
    marginLeft: 12,
    fontFamily: 'lexend-regular',
    fontSize: 14,
  },
})
