import React from "react"
import { Text, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"
export function ButtonContent({
    color = colors.complement.secondary,
    text,
    size = 20

}){
    return( <Text style={{
        color: color,
        fontSize: size,
      fontWeight: "500"
        
    }}>{text}</Text>)
}

