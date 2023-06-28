import { Pressable, Text, StyleSheet, View } from "react-native"
import { colors } from "../styles/colors"

const ButtonBasic = ({funcOnPress, title, titleStyle = styles.text, style = styles.border}) => {

  return (
    <Pressable 
    style={style}
    onPress={funcOnPress}> 
      <Text style={titleStyle}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.complement.secondary,
    fontSize: 12,
    paddingHorizontal: 13,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  border: {
    borderWidth: 1.4,
    borderColor: colors.complement.secondary,
    borderRadius: 7,
  },
});


export default ButtonBasic