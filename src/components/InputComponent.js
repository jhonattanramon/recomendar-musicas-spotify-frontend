import { TextInput} from "react-native-paper"
import styled from "styled-components/native";
import {colors} from "../styles/colors"
import { StyleSheet } from "react-native";
import { Dimencoes } from "../styles/dimencoes";


const Input_Component = ({
  labelName,
  placeholderName,
  secureTextEntry,
  inputMode,
  onChange,
  value ,
  onBlur,
  style = styles.style,
  outlineStyle,
  underlineStyle,
  textColor = `${colors.complement.primary}`,
  contentStyle = styles.contentStyle ,
  multiline,
  error
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
      style={{ 
        height: 60, 
      }}
      value={value}
      label={labelName}
      onChangeText={onChange}
      textColor={textColor}
      contentStyle={contentStyle}
      multiline={multiline}
      error={error}
      dense={false}
    />
  );
};


const styles = StyleSheet.create({
  style: {
      height: 200,
  },
  contentStyle: {
    padding: 7
  }
})



    




export default Input_Component