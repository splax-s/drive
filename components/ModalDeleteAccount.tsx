import React, {useState, useRef, useEffect} from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, Dimensions, ScrollView, Image, Keyboard } from "react-native";
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
import CustomTextInput from './CustomTextInput';

const ModalDeleteAccount = React.forwardRef((props, ref) => {
    const passwordRef = useRef();
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        if(typeof password === 'string' && password.trim().length === 0){
            setDisabled(true)
          } else {
            setDisabled(false)
          }
    })
    const handleSubmit = async () => {
        setLoading(true);

        const requestData = {
          password: password,
        };

        setTimeout(() => {
          setLoading(false);
          props.close()
        }, 3000);

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
        <Text style={styles.head}>Delete Account</Text>
        <TouchableOpacity onPress={() => {
        }}>
          <Text>  </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.hii}>This will erase your data on Exon and you can’t un-do this action, for security reasons kindly provide your password</Text>
      <CustomTextInput
                    onFocus={() => {
                    }}
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    onChangeText={setPassword}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    password={true}
                    ref={passwordRef}
                    pass={true}
                    stylesExtra={{marginTop: 26}}

                  />
        <CustomButton
                title="Delete account"
                marginTop={40}
                disabled={disabled}
                loading={loading}
                _onPress={()=>{
                    handleSubmit()
                }}
                color={'#FF3737'}

                textStyle={{color: 'white'}}
                />
        </View>

        </RBSheet>
    )
})

export default ModalDeleteAccount

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
    fontFamily: 'lexend-regular',
    fontSize: 14,
    color: '#757575',
    marginTop: 13
  }
})
