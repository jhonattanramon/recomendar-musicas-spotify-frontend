import { Container, TextDefault, TitleText } from "../../styles/styled-components";
import { RadioButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import Header from "../../patterns/Header";
import { CardSetting } from "../../components/CardSettingComponents";

export default function Settings({navigation}){
  const [checked, setChecked] = useState();

  return (
    <Container>
        
    <Header
    navigation={navigation}
    styleText={{fontSize: Dimencoes.fontSizeTitle,color: colors.complement.secondary,fontWeight: "600"}}
     title={"Configurações"} /> 
      <CardSetting.Root>
        <CardSetting.Content text={"Sicronizar playlist com Spotify"} />
        <CardSetting.Check size={30}  onPress={{}}/>
      </CardSetting.Root>

      <CardSetting.Root>
        <CardSetting.Button onPress={{}} >
          <CardSetting.Icon size={30} color={colors.complement.secondary} icon={"information-circle-outline"} />
          <CardSetting.Content text={"Sobre-nós"} />
        </CardSetting.Button>
      </CardSetting.Root>

      <CardSetting.Root>
        <CardSetting.Button onPress={{}}>
          <CardSetting.Icon size={30} color={colors.complement.secondary} icon={"exit-outline"}/>
          <CardSetting.Content text={"Longout"} />
        </CardSetting.Button>
      </CardSetting.Root>
    </Container>
  );
};


