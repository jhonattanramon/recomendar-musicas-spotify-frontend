import { View, Text, StyleSheet, Animated } from "react-native";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";
import { Modal } from "react-native";
import { useEffect, useState } from "react";

const PopUpError = ({ menssage, stateMenssage = false  }) => {

  if (stateMenssage){
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "5%",
            backgroundColor: colors.complement.secondary,
            width: 200,
            height: 70,
            zIndex: 1,
            borderRadius: Dimencoes.borderRadius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "red",
              textAlign: "center"
            }}
          >
            {menssage}
          </Text>
        </View>
      </View>
    );
  }else{
    return
  }
};

export default PopUpError;
