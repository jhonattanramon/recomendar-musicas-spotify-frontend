import { Text } from "react-native";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";

export function SettingContent({text}){
    return(
        <Text style={{color:colors.complement.secondary, fontSize:Dimencoes.fontSize}}> 
            {text}
        </Text>       
    )
}