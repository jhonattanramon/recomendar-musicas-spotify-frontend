import { View, StyleSheet } from "react-native";
import { TextDefault } from "../styles/styled-components";
import ButtonIcon from "../components/ButtonIconComponent";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";

const SettingButtonIcon = ({text, icon}) => {
    return(
        <View style={styles.containerSetting}>
        <ButtonIcon
         icon={icon}
         color={colors.complement.secondary}
         onPress={() => {
          
         }}
         />  
         <TextDefault> 
          {text}
         </TextDefault>
      </View>
    )
}


const styles = StyleSheet.create({
    containerSetting: {
      flexDirection: "row",
          backgroundColor: colors.blur.primary,
          alignItems: "center",
          //paddingHorizontal: 17,
          height: 70,
          margin: 7,
          borderRadius: Dimencoes.borderRadius,
    },
  });

export default SettingButtonIcon;