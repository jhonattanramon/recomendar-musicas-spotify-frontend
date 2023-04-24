import { View, Text, Pressable } from "react-native";
import { Title } from "react-native-paper";
import Button_Component from "../../components/Button_Component";
import Input_Component from "../../components/Input_Component";
import TextButton from "../../components/TextButton";

import {
  Separador,
  Container,
  SectionCenter,
  NewText,
  TitleText

} from "../../styles/styled-components";

const Login_Page = ({ navigation }) => {

  const navigationLogin = () => {
    return navigation.navigate("cadastro");
  };


  return (
    <Container>
      <SectionCenter>
        <View>
            <NewText>Seu login</NewText>
            <TitleText>Login</TitleText>
        </View>

        <View>
          <Input_Component
            placeholderName="Email"
            color={"#00000"}
            inputMode="email"
          />

          <Input_Component
            placeholderName="Senha"
            color={"#00000"}
            secureTextEntry={true}
            textAffix={true}
          />
        </View>

        <Separador />

        <View>
          <Button_Component funcOnPress={navigationLogin} title="Login" />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', padding: 2}}> 
        <TextButton title="Cadastro" onPressFunc={ () => navigation.navigate('cadastro')} /> 
        <TextButton title="Esqueceu a Senha ?"  /> 
        </View>
    
      </SectionCenter>
    </Container>
  );
};

export default Login_Page;
