import React, {useState, useRef, useEffect} from 'react'
import { FlatList, StyleSheet, Keyboard, TouchableOpacity, View, Dimensions, ScrollView, Image } from "react-native";
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
import CustomTextInput from './CustomTextInput';

const ModalAddCard = React.forwardRef((props, ref) => {
    const cardRef = useRef()
    const dateRef = useRef();
    const cvvRef = useRef();
    const [month, setMonth] = useState('')
    const [expirationMonth, setExpirationMonth] = useState('')
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
        <Text style={styles.head}>Add Card</Text>
        <TouchableOpacity onPress={() => {
        }}>
          <Text>  </Text>
        </TouchableOpacity>
      </View>
        <CustomTextInput
         onFocus={() => {
          }}
          label=""
          placeholder="Card number"
          onSubmitEditing={() => {
            Keyboard.dismiss
            dateRef.current.focus()
          }}
          value={month}
          onChangeText={(text) => {
            setMonth(text.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
          }}
          returnKeyType="next"
          password={false}
          ref={cardRef}
          max={19}
          keypad="phone-pad"
        />
        <View style={{flexDirection: "row", paddingLeft: 0}}>
        <CustomTextInput
         onFocus={() => {
          }}
          label=""
          placeholder="Exp.date"
          onSubmitEditing={() => {
            Keyboard.dismiss
            cvvRef.current.focus()
          }}
          value={expirationMonth}
          onChangeText={(text) => {
            if (text.indexOf('.') >= 0 || text.length > 5) {
              // Since the keyboard will have a decimal and we don't want
              // to let the user use decimals, just exit if they add a decimal
              // Also, we only want 'MM/YY' so if they try to add more than
              // 5 characters, we want to exit as well
              return;
          }

          if (text.length === 2 && expirationMonth.length === 1) {
              // This is where the user has typed 2 numbers so far
              // We can manually add a slash onto the end
              // We check to make sure the current value was only 1 character
              // long so that if they are backspacing, we don't add on the slash again
              text += '/'
          }

          // Update the state, which in turns updates the value in the text field
            setExpirationMonth(text)
          }}
          returnKeyType="next"
          password={false}
          keypad={'numeric'}
          ref={dateRef}
          max={5}
          style={{width:"70%"}}
        />
        <CustomTextInput
         onFocus={() => {
          }}
          label=""
          placeholder="CVV"
          onSubmitEditing={() => {
            Keyboard.dismiss
          }}
          returnKeyType="next"
          password={true}
          ref={cvvRef}
          keypad="phone-pad"
          max={3}
          style={{width: "79%", marginLeft: -65}}
        />
        </View>

        <CustomButton
                title="Save Card"
                marginTop={50}
                loading={false}
                disabled={false}
                _onPress={()=>{

                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />
        </View>

        </RBSheet>
    )
})

export default ModalAddCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
