import { Pressable } from "react-native";

export function SettingButton({children, onPress}){
    return <Pressable onPress={onPress} style={{flexDirection:"row", alignItems:"center"}}>{children}</Pressable>
}