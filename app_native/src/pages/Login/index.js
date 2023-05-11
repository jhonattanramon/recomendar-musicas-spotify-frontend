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
  Section,
} from "../../styles/styled-components";

import { useEffect, useState } from "react";
import axios from "axios";
import { Requests, tokenTst } from "../../services/Requests";

const Login_Page = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [access, setAccess] = useState(false);
  const [token, setToken] = useState();



  const urlBase = "http://localhost:3001";

  useEffect(() => {
    function getHashParams() {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    const paramentros = getHashParams();

    setToken(paramentros);
  }, []);

  useEffect(() => {
    if (access) {
      navigation.navigate("home");
    }
  }, [access]);

  const authSpotify = () => {
    window.location.href = "http://localhost:8887";
  };

  const checkLogin = async () => {
    if (!email || !senha) {
      return alert("campo vazio");
    }

    if (email) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if (!reg.test(email)) {
        Alert.alert("Email inválido! preencha corretamente");
        alert("Email inválido! preencha corretamente");
        return;
      }

      // axios.post(`${urlBase}/api/conect`, {
      //   email: email,
      //   password: senha
      // }).then( res => setAccess(res.data.access))
    }

    await axios
      .get(`${urlBase}/apiSpotify/auth`, {
        headers: {
          Authorization: `${token.access_token}`
        }
      })
      .then((res) => console.log(res));
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
            title="auth spotify"
            onPressFunc={() => {
              authSpotify();
            }}
          />

          <TextButton title="Esqueceu a Senha ?" />
        </View>
      </SectionCenter>
    </Container>
  );
};

export default Login_Page;
