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
  TitleText,
} from "../../styles/styled-components";

import { useEffect, useState } from "react";
import axios from "axios";

const Login_Page = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const load = () => {
      if (access) {
        navigation.navigate("home");
      }
    };

    load();
  }, [access]);

  const checkLogin = async () => {


    if(!email || !senha ){
      return alert('campo vazio')
    }

    if(email){
      
      const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if (!reg.test(email)) {
        Alert.alert("Email inválido! preencha corretamente");
        alert('"Email inválido! preencha corretamente"')
        return;
      }
    }

    const baseUrl = "http://localhost:3000";
    
    await axios
      .post(`${baseUrl}/api/conect`, {
        email: email,
        senha: senha,
      })
      .then((response) => setAccess(response.data.access));
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
            value={email}
            onChange={(e) => setEmail(e)}
          />

          <Input_Component
            placeholderName="Senha"
            color={"#00000"}
            secureTextEntry={true}
            value={senha}
            textAffix={true}
            onChange={(e) => setSenha(e)}
          />
        </View>

        <Separador />

        <View>
          <Button_Component
            funcOnPress={() => {
              checkLogin();
            }}
            title="Login"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <TextButton
            title="Cadastro"
            onPressFunc={() => navigation.navigate("cadastro")}
          />
          <TextButton title="Esqueceu a Senha ?" />
        </View>
      </SectionCenter>
    </Container>
  );
};

export default Login_Page;
