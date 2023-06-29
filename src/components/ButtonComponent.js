import {  View, StyleSheet, Pressable, Text,   } from "react-native"
import { colors } from "../styles/colors"
import { Dimencoes } from "../styles/dimencoes";
import LoagingComponent from "./LoadingComponent"

const Button_Component = ({ 
  title,
  OnPress,
  style=styles.ButtonStyle,
  styleText = styles.TextButton,
  textColor = colors.complement.secondary
}) => {
  return (  
    <Pressable
      textColor={textColor}
      style={ style }
      onPress={OnPress}
    >
      <Text style={styleText}>
      {title}
      </Text> 
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: Dimencoes.borderRadius,
    textAlign:"center",
    justifyContent:"center  "
  },
  TextButton: {
    fontSize: Dimencoes.fontSizeButton,
    color: colors.complement.secondary
  },
});


export default Button_Component