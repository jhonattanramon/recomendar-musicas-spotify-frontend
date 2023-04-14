import { TextInput} from "react-native-paper"
import styled from "styled-components/native";


const Input_Component = ({labelName, placeholderName, value, color}) => {


    return <TextInput
        label={labelName}
        mode="outlined"
        placeholder={placeholderName}
        selectionColor={color}
        activeUnderlineColor="#00000"
        underlineColor="#00000"
        
    /> 
}




    




export default Input_Component