import { TextInput} from "react-native-paper"
import styled from "styled-components/native";
import {colors} from "../styles/colors"


const Input_Component = ({
    labelName,
    placeholderName,
    value,
    color,
    secureTextEntry,
    inputMode,
    textAffix
}) => {


    return <TextInput
        label={labelName}
        mode="outlined"
        placeholder={placeholderName}
        outlineColor={colors.complement.secondary}
        activeOutlineColor={colors.secondary}
        activeUnderlineColor="#020617"
        underlineColor="#020617"
        secureTextEntry={secureTextEntry}
        inputMode={inputMode}

        
         
    /> 
}




    




export default Input_Component