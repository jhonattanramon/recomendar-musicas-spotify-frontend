import { Button, View, StyleSheet } from "react-native"

const Button_Component = ({title}) =>{


    return (
        <View style={styles.Button}> 
            <Button color="none" title={title}  />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        Button: {
            backgroundColor: '#00E007',
            padding: 10
             
        }
    }
)


export default Button_Component