import {  View, StyleSheet, Pressable, Text } from "react-native"
import { Button } from "react-native-paper"
import { colors } from "../styles/colors"
const Button_Component = ({
    title,
    funcOnPress,
    loading
    ,}) =>{


    return (
      <Button
        loading={loading}
        labelStyle={{fontWeight:"bold"}}
        textColor={colors.complement.secondary}
        style={styles.ButtonStyle}
        onPress={funcOnPress}
        > 
        

      {title}
      </Button>
    )
}

const styles = StyleSheet.create(
    {
        ButtonStyle: {
            backgroundColor: colors.primary,
            padding: 14,
            borderRadius: 4,

             
        },

        TextButton: {
           color: colors.complement.secondary,
        }
    }
)


export default Button_Component