import { TextInput, StyleSheet} from "react-native"


const Input = ({placeholder, value}) => {


    return <TextInput
    style={styles.input} 
    inputMode="text"
    placeholder={placeholder}
    value={value}
    
    /> 
}


const styles = StyleSheet.create(
    {
        input:{
            padding: 10,
            border: '1px solid white',
            color: 'white',
        },
      
       
    }
)

export default Input