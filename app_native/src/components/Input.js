import { TextInput, StyleSheet} from "react-native"


const Input = () => {


    return <TextInput
    style={styles.input} 
    inputMode="text"
    placeholder="test" 
    
    /> 
}


const styles = StyleSheet.create(
    {
        input:{
            padding: 10,
            border: '1px solid black',
            color: '#000A00'

        }
    }
)

export default Input