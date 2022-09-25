import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import colors from "../constants/Colors";

const CustomButton = ({
  containerStyle,
  _onPress,
  title,
  marginTop,
  loading = false,
  disabled = false,
  color = colors.primary,
  textStyle
}) => {
  return (
    <View style={[{ marginTop: marginTop, width: "100%" }, containerStyle]}>
      <Button
        title={title}
        titleStyle={[textStyle,styles.text]}
        type="solid"
        buttonStyle={[styles.button, { backgroundColor: color }]}
        containerStyle={{ borderRadius: 50 }}
        onPress={_onPress}
        loading={loading}
        loadingStyle={{ paddingVertical: 3 }}
        disabledStyle={{ backgroundColor: colors.outline }}
        disabledTitleStyle={{ color: "white" }}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 14,
    paddingVertical: 16,

    borderRadius: 50,
  },

  text: {
    fontFamily: "lexend-regular",
  },
});

export default CustomButton;
