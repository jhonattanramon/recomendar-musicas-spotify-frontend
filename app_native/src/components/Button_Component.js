import { Button, View, StyleSheet } from "react-native"

const Button_Component = ({title, funcOnPress}) =>{


    return (
        <View style={styles.Button}> 
            <Button
             color="none"
              title={title}
              onPress={
                funcOnPress 
              }  />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        Button: {
            backgroundColor: '#22c55e',
            padding: 10,
            borderRadius: 4
             
        }
    }
)


export default Button_Component