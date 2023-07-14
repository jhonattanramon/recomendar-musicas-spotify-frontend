import { Container, TextDefault, TitleText } from "../../styles/styled-components";
import { useState } from "react";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import Header from "../../patterns/Header";
import { CardSetting } from "../../components/CardSettingComponents";
import { Requisicoes } from "../../services/requisições/req";
import { RequestsUser } from "../../services/requisições/user";

export default function Settings({navigation}){
  const [checked, setChecked] = useState();


 async function longout(){
      const { stateLogout }= await RequestsUser.loungout()
      if(stateLogout) navigation.navigate("login")
  }

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
        <CardSetting.Button onPress={longout} >
          <CardSetting.Icon size={30} color={colors.complement.secondary} icon={"exit-outline"}/>
          <CardSetting.Content text={"Longout"} />
        </CardSetting.Button>
      </CardSetting.Root>
    </Container>
  );
};


