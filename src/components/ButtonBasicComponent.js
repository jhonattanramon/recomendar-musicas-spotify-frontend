import { Pressable, Text, StyleSheet, View } from "react-native"
import { colors } from "../styles/colors"
import { Dimencoes } from "../styles/dimencoes";

const ButtonBasic = ({onPress, title, titleStyle = styles.text, style = styles.button}) => {

  return (
    <Pressable 
    style={style}
    onPress={onPress}> 
      <Text style={titleStyle}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.complement.primary,
    fontSize: 14,
    fontWeight: "600"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: colors.complement.secondary,
    borderRadius: 7,
    backgroundColor: colors.complement.secondary
  },
});


export default ButtonBasic