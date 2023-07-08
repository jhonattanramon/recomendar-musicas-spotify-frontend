import { View } from "react-native";

export function SettingRoot({children}){
    return <View style={{flexDirection:"row", alignItems:"center"}}>{children}</View>
}