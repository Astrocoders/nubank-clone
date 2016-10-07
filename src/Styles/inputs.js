import React from "react";
import {Dimensions} from "react-native";


const widthInput = Dimensions.get('window').width - 40;
const profileWidthInput = Dimensions.get('window').width - 10;

module.exports = {
  widthInput,
  profileWidthInput,
};
