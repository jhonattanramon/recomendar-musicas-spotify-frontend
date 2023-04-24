import { Button, View, StyleSheet, Pressable, Text } from "react-native"
import { colors } from "../styles/colors"
const Button_Component = ({
    title,
    funcOnPress,}) =>{


    return (
      <Pressable style={styles.Button} onPress={funcOnPress}> 
        <Text style={styles.TextButton}>{title}</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create(
    {
        Button: {
            backgroundColor: colors.primary,
            padding: 14,
            borderRadius: 4,
            
             
        },

        TextButton: {
           textAlign:'center' ,
           color: colors.complement.secondary,
           fontWeight:'bold'
        }
    }
)


export default Button_Component