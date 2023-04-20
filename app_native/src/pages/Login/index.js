import { View, Text } from "react-native";
import { Title } from "react-native-paper";
import Button_Component from "../../components/Button_Component";
import Input_Component from "../../components/Input_Component";

import {
  Separador,
  Container,
  SectionCenter,
  Title,
} from "../../styles/styled-components";

const Login_Page = ({ navigation }) => {

  const navigationLogin = () => {
    return navigation.navigate("cadastro");
  };


  return (
    <Container>
      <SectionCenter>
        <View>
            <Title>Login</Title>
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
          <Button_Component funcOnPress={navigationLogin} title="login" />
        </View>

        <View>
          <Text> Cadastro </Text>
        </View>
      </SectionCenter>
    </Container>
  );
};

export default Login_Page;
