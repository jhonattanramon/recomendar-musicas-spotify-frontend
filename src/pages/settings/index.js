import { Container, TextDefault, TitleText } from "../../styles/styled-components";
import { RadioButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import Header from "../../patterns/Header";
import SettingRadioButton from "../../patterns/SettingRadioButton"
import ButtonIcon from "../../components/ButtonIconComponent";
import SettingButtonIcon from "../../patterns/SettingButtonIcon";

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
      <SettingButtonIcon icon={"information-variant"} text={"Sobre-nós"}/> 
      <SettingButtonIcon icon={"exit-run"} text={"Longout"}/>

    </Container>
  );
};


export default Settings;
