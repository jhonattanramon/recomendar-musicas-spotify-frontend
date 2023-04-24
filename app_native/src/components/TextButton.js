import { Pressable, Text, StyleSheet } from "react-native"
import { colors } from "../styles/colors"

const TextButton = ( {onPressFunc, title} ) => {
  return (
    <Pressable onPress={onPressFunc}> 
      <Text style={styles.colorText}> {title} </Text>
    </Pressable>
  )

  
}

const styles = StyleSheet.create(
      {
        colorText:{
          color: colors.secondary,
          fontWeight:'bold',
          padding:5
        }
      }
  )

export default TextButton