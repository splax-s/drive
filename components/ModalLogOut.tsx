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
    const cardRef = useRef(ref)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true);
        setTimeout(async() => {
          setLoading(false);
          props.close()
          await props.delete()
        }, 3000);

    }
    return(
        <RBSheet
        ref={ref}
    height={250}
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
          paddingHorizontal: 4
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.close()
          }}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.head}>Log out</Text>
        <TouchableOpacity onPress={() => {
        }}>
          <Text>        </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.hii}>Are you sure you want to log out?</Text>

        <CustomButton
                title="Log Out"
                marginTop={30}
                loading={loading}
                disabled={loading}
                _onPress={()=>{
                    handleSubmit()
                }}
                containerStyle={{}}
                color='#FF3737'

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
  hii:{
    fontFamily: 'lexend-light',
    fontSize: 14,
    color: '#757575',
    marginTop: 13
  }
})
