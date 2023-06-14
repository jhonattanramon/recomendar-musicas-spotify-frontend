import { View, Text, Pressable, Dimensions } from "react-native";
import { Title } from "react-native-paper";
import Button_Component from "../../components/ButtonComponent";
import Input_Component from "../../components/InputComponent";
import TextButton from "../../components/TextButton";
import ButtonIcon from "../../components/ButtonIcon";

import {
  Separador,
  Container,
  SectionCenter,
  NewText,
  TitleText,
  Section,
} from "../../styles/styled-components";

import { useEffect, useState } from "react";
import { Requisicoes, accessToken } from "../../services/requisições/req";
import { Dimension } from "../../components/Dimension";

const Login_Page = ({ navigation, route, layout }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [access, setAccess] = useState(false);
  const [token, setToken] = useState();
  const [loading, setLooading] = useState(false);

  const urlBaseDev = "http://localhost:3001";
  const urlBaseProduct = "https://appnative-backend.onrender.com";
  const urlBaseAuth = "https://appnative-backend-auth.onrender.com";
  const urlBaseAuthDev = "http://localhost:8887";



  useEffect(() => {
    if (access) {
      navigation.navigate("home");
    }
  }, [access]);

  const authSpotifyWeb = () => {
    window.location.href = `${urlBaseAuth}`;
  };

  const pageAutenticacao = () => {
    navigation.navigate("auth");
  };

  const checkLogin = async () => {
    if (!email || !senha) {
      return alert("campo vazio");
    }

    if (email) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if (!reg.test(email)) {
        Alert.alert("Email inválido! pr eencha corretamente");
        alert("Email inválido! preencha corretamente");
        return;
      } else {
        setLooading(!loading);
        const requisicoes = new Requisicoes();
        const conect = await requisicoes.login({
          email: email,
          password: senha,
        });
        setAccess(conect.data.access);
      }
    }
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
            loading={loading}
            funcOnPress={() => {
              checkLogin();
              //load()
            }}
            title="Login"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextButton
            title="Cadastro"
            onPressFunc={() => navigation.navigate("cadastro")}
          />

          <TextButton
            title="Login Spotify"
            onPressFunc={() => {
              pageAutenticacao();
            }}
          />

          <TextButton title="Esqueceu a Senha ?" />
        </View>
      </SectionCenter>
    </Container>
  );
};

export default Login_Page;
