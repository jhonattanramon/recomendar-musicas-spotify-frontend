import React from "react"
import { Text, StyleSheet } from "react-native"
import { colors } from "../../styles/colors"
export function ButtonContent({
    color = colors.complement.secondary,
    text
}){
    return( <Text style={{
        color: color,
        fontSize: 20,
        fontWeight: "500"
        
    }}>{text}</Text>)
}

