import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
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
  SeparadorVertical,
} from "../../styles/styled-components";
import { useEffect, useState } from "react";
import { Requisicoes, accessToken } from "../../services/requisições/req";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";

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
            style={{ padding: Dimencoes.padding }}
            placeholderName="Email"
            color={"#00000"}
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e)}
          />

          <Input_Component
            style={{ padding: Dimencoes.padding }}
            placeholderName="Senha"
            color={"#00000"}
            secureTextEntry={true}
            value={senha}
            textAffix={true}
            onChange={(e) => setSenha(e)}
          />
        </View>

        <SeparadorVertical />

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
        <View style={styles.spotify}>
          <Pressable
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              authSpotifyWeb();
            }}
          >
            <Text style={{ fontSize: Dimencoes.fontSize }}>Login Spotify</Text>
            <ButtonIcon size={35} color={"#1ed760"} icon="spotify" />
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TextButton
            title="Cadastro"
            onPressFunc={() => navigation.navigate("cadastro")}
          />

          <TextButton
            title="Login Spotify"
            onPressFunc={() => {
              authSpotifyWeb();
            }}
          />

          <TextButton title="Esqueceu a Senha ?" />
        </View>
      </SectionCenter>
    </Container>
  );
};

const styles = StyleSheet.create({
  spotify: {
    backgroundColor: colors.complement.secondary,
    borderRadius: Dimencoes.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
});

export default Login_Page;
