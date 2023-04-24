import { TextInput} from "react-native-paper"
import styled from "styled-components/native";
import {colors} from "../styles/colors"


const Input_Component = ({
    labelName,
    placeholderName,
    secureTextEntry,
    inputMode,
    onChange,
    value,
    onBlur
}) => {


    return <TextInput

  
        mode="outlined"
        placeholder={placeholderName}
        outlineColor={colors.complement.secondary}
        activeOutlineColor={colors.secondary}
        activeUnderlineColor="#020617"
        underlineColor="#020617"
        secureTextEntry={secureTextEntry}
        inputMode={inputMode}


        value={value}
        label={labelName}
        onChangeText={onChange}
        onBlur={onBlur}

        
         
    /> 
}




    




export default Input_Component