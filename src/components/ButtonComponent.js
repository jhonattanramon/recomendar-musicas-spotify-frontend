import {  View, StyleSheet, Pressable, Text } from "react-native"
import { Button } from "react-native-paper"
import { colors } from "../styles/colors"
import { Dimencoes } from "../styles/dimencoes";
const Button_Component = ({ 
  title,
  funcOnPress,
  loading,
  labelStyle = styles.labelStyle,
  style = styles.ButtonStyle,
  textColor = colors.complement.secondary
}) => {
  return (
    <Button
      loading={loading}
      labelStyle={labelStyle}
      textColor={textColor}
      style={style}
      onPress={funcOnPress}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 4,
  },
  labelStyle: {
    fontSize: Dimencoes.fontSize,
  },

  TextButton: {
    fontSize: Dimencoes.fontSize,
    color: colors.complement.secondary,
  },
});


export default Button_Component