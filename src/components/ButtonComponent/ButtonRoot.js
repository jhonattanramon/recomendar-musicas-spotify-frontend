import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import { Button } from "./index";

export function ButtonRoot({
  onPress,
  style = styles.ButtonStyle,
  textColor = colors.complement.secondary,
  children  
}) {
  return <Pressable
      textColor={textColor}
      style={style}
      onPress={ onPress}
    >
      {children}
      </Pressable>  
  
}

const styles = StyleSheet.create({
  ButtonStyle: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: Dimencoes.borderRadius,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  }
});
