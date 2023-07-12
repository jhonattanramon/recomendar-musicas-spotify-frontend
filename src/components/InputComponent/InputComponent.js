
import { TextInput } from "react-native";
import styled from "styled-components/native";
import {colors} from "../../styles/colors"
import { StyleSheet } from "react-native";
import { Dimencoes } from "../../styles/dimencoes";


export default function InputComponent ({
  height = 60,
  width = "100%",
  backgroundColor = colors.complement.secondary,
  placeholder,
  placeholderTextColor = colors.complement.primary,
  secureTextEntry,
  inputMode,
  onChange,
  value ,

})  {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      inputMode={inputMode}
      style={{ 
        flex: 1,
        width:width ,
        height: height, 
        backgroundColor: backgroundColor,
        borderRadius: Dimencoes.borderRadius,
        paddingHorizontal: 10
      }
    }
      value={value} 
      onChangeText={onChange}
    />
  );
};



