import { Container, TextDefault, TitleText } from "../../styles/styled-components";
import { RadioButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import Header from "../../patterns/Header";
import SettingRadioButton from "../../patterns/SettingRadioButton"
import ButtonIcon from "../../components/ButtonIconComponent";

const Settings = ({navigation}) => {
  const [checked, setChecked] = useState();

  return (
    <Container>
        
    <Header
    navigation={navigation}
    styleText={
        {
            fontSize: Dimencoes.fontSizeTitle,
            color: colors.complement.secondary,
            fontWeight: "600"
        }
    }
     title={"Configurações"} /> 
      <SettingRadioButton text={"Sicronizar playlist com Spotify"} />

      <View style={styles.containerSetting}>
        <ButtonIcon
         icon={"exit-run"}
         color={colors.complement.secondary}
         onPress={() => {
          
         }}
         />  
         <TextDefault> 
          Logout
         </TextDefault>
      </View>

    </Container>
  );
};

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

export default Settings;
