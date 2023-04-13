import { TextInput} from "react-native-paper"
import styled from "styled-components/native";


const Input = ({placeholder, value}) => {


    return <TextInput
    style={styles.input} 
    inputMode="text"
    placeholder={placeholder}
    value={value}

    onFocus={ () => {
        
    }}
    /> 
}


const styles = StyleSheet.create(
    {
        input:{
            padding: 13,
            border: '1px solid white',
            color: 'white',
            borderRadius:7,
                
        

        },

       

        
      
       
    }
)


const Textinput = styled.TextInput`

    


`

export default Input