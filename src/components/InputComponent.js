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
  onBlur,
  style,
  outlineStyle,
  underlineStyle,
  textColor,
  contentStyle,
}) => {
  return (
    <TextInput
      mode="outlined"
      placeholder={placeholderName}
      outlineColor={colors.complement.secondary}
      outlineStyle={outlineStyle}
      underlineStyle={underlineStyle}
      activeOutlineColor={colors.secondary}
      activeUnderlineColor="#020617"
      underlineColor="#020617"
      secureTextEntry={secureTextEntry}
      inputMode={inputMode}
      style={style}
      value={value}
      label={labelName}
      onChangeText={onChange}
      textColor={textColor}
      contentStyle={contentStyle}
    />
  );
};




    




export default Input_Component