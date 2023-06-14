import { Pressable, Text, StyleSheet, View } from "react-native"
import { colors } from "../styles/colors"

const ButtonBasic = ({funcOnPress, title}) => {

  return (
    <Pressable onPress={funcOnPress}> 
    <View style={styles.border}> 
      <Text style={styles.text}>{title}</Text>
    </View>
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