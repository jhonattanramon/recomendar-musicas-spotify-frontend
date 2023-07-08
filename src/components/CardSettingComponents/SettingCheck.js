import { CheckBox } from "react-native-elements";
import { colors } from "../../styles/colors";

export function SettingCheck({onPress, size}){
    return(
        <CheckBox 
        size={size}
        onPress={onPress}
        uncheckedColor={colors.complement.secondary}
        checkedColor={colors.primary}/>
    )
}