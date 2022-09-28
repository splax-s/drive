import { Feather } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import { Octicons } from '@expo/vector-icons';
import Call from '../assets/svg/call'
import Lock from '../assets/svg/lock'
import User from '../assets/svg/user'
import SearchIcon from '../assets/svg/location'

const CustomTextInput = React.forwardRef(
  (
    {
      style,
      onLayout = () => {},
      onChangeText,
      onBlur,
      value,
      placeholder,
      label,
      error,
      onSubmitEditing,
      returnKeyType,
      password,
      onPressIn,
      onFocus,
      keypad,
      defaultValue,
      tapFunction = () => {},
      editable = true,
      dropdown = false,
      contact= false,
      person= false,
      phone = false,
      pass= false,
      search= false,
      stylesExtra
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(!password);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          ref.current.focus();
          tapFunction();
        }}
      >
        <View style={[stylesExtra]}>
        <Text style={styles.label}>{label}</Text>
        <View
        onLayout = {onLayout}
          style={[
            {
              backgroundColor: "white",
              padding: 15,
              paddingHorizontal: 22,
              borderRadius: 40,
              flexDirection: "row",
              alignItems: "center",
              borderColor: error === undefined ? "rgba(217, 217, 217, 1)" : Colors.warning,
              borderWidth: error === undefined ? 1 : 1,
            },
            style,
          ]}
        >

          <View style={{ justifyContent: "center", width: "90%", flexDirection: 'row' , }}>

            <TouchableOpacity
              onPress={tapFunction}
              style={{ marginLeft: 40 }}
            >
              {person ? (
                <User/>
              ) : (null)}
              {phone ? (
                <Call/>
              ) : (null)}
              {pass ? (
                <Lock/>
              ) : (null)}
              {search ? (
                <SearchIcon/>
              ) : (null)}
               </TouchableOpacity>
            <TextInput
              onPressIn={onPressIn}
              onFocus={onFocus}
              blurOnSubmit={false}
              editable={editable}

              secureTextEntry={!showPassword}
              style={[
                styles.text,
                { color: editable ? "black" : 'black' },
              ]}
              placeholder={placeholder}
              placeholderTextColor={Colors.grey}
              keyboardType={keypad}
              onChangeText={onChangeText}
              selectionColor={Colors.primary}
              onBlur={onBlur}
              value={value}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              ref={ref}
              defaultValue={defaultValue}
            />
          </View>
          <TouchableOpacity
              onPress={tapFunction}
              style={{ marginLeft: "auto" }}
            >
              { contact ? (  <AntDesign name="contacts" size={24} color={Colors.outline}/>
              ) : (
                null
              )}

          {dropdown ? (
                <Feather name="chevron-down" size={24} color={Colors.outline} />
              ) : (
                null
              )}
               </TouchableOpacity>
          {password ? (
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{ marginLeft: "auto" }}
            >
              {showPassword ? (
                <Feather name="eye" size={23} color={Colors.outline} />
              ) : (
                <Feather name="eye-off" size={23} color={Colors.outline} />
              )}


            </TouchableOpacity>
          ) : null}
        </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 14,
    fontFamily: "lexend-regular",
    padding: 0,
    margin: 0,
    marginBottom: 10,
    marginLeft: 5,
    justifyContent: "center"
  },

  placeholder: {},

  text: {
    width: "100%",
    borderWidth: 0,
    borderRadius: 50,
    fontSize: 14,
    fontFamily: "lexend-light",
    marginLeft: 9,
  },
});

export default CustomTextInput;
