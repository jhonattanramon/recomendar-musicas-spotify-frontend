import { View, StyleSheet } from "react-native";
import Button_Component from "../../components/ButtonComponent";
import Input_Component from "../../components/InputComponent";
import TextButton from "../../components/TextButtonComponent";
import * as Styled from "../../styles/styled-components";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../services/requisições/req";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import PopUpError from "../../components/PopUpErrorComponent";

const Login_Page = ({ navigation, route, layout }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [access, setAccess] = useState(false);
  const [loading, setLooading] = useState(false);

  const [visibiliteError, setVisibiliteError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [menssageError, setMenssageError] = useState("");

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
    window.location.href = `${urlBaseAuthDev}`;
  };

  const pageAutenticacao = () => {
    navigation.navigate("auth");
  };

  const checkLogin = async () => {
    setAccess(false);
    if (!email || !senha) {
      return alert("campo vazio");
    }

    if (email) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if (!reg.test(email)) {
        //Alert.alert("Email inválido! pr eencha corretamente");
        alert("Email inválido! preencha corretamente");
        return;
      } else {
        setLooading(!loading);
        const requisicoes = new Requisicoes();
        const conect = await requisicoes
          .login({
            email: email.toLowerCase(),
            password: senha,
          })
          .finally(() => setLooading(false));


        setMenssageError(conect.data.menssage);
        setErrorEmail(conect.data.stateErrorEmail);
        setErrorSenha(conect.data.stateErrorPassword);

        setAccess(conect.data.access);

        const displayMenssageError = () => {
          setVisibiliteError(conect.data.stateMenssage);
          setTimeout(() => setVisibiliteError(false), 1200);
        };
        if (conect.data.stateMenssage) displayMenssageError();
      }
    }
  };

  return (
    <Styled.Container>
      <PopUpError stateMenssage={visibiliteError} menssage={menssageError} />
      <Styled.SectionCenter>
        <View>
          <Styled.NewText>Seu login</Styled.NewText>
          <Styled.TitleText>Login</Styled.TitleText>
        </View>

        <View>
          <Input_Component
            style={{ padding: Dimencoes.padding }}
            placeholderName="Email"
            inputMode="email"
            value={email}
            error={errorEmail}
            onChange={(e) => {
              setErrorEmail(false);
              setEmail(e);
            }}
          />

          <Input_Component
            error={errorSenha}
            placeholderName="Senha"
            secureTextEntry={true}
            value={senha}
            textAffix={true}
            onChange={(e) => {
              setErrorSenha(false);
              setSenha(e);
            }}
          />
        </View>

        <Styled.SeparadorVertical />

        <View style={{ gap: 12}}>
          <View>
            <Button_Component
              onPress={() => {
                checkLogin();
              }}
              title="Login"
            />
          </View>
          <View>
            <Button_Component
              title="Login Spotify"
              style={{
                backgroundColor: colors.complement.secondary,
                height: 60,
                borderRadius: Dimencoes.borderRadius,
                textAlign: "center",
                justifyContent:"center",
                alignItems: "center",
              }}
              styleText={{ 
                color: colors.complement.primary,
                fontSize: Dimencoes.fontSizeButton,
              }}
              onPress={ () => authSpotifyWeb()}
            />
          </View>
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

          <TextButton title="Esqueceu a Senha ?" />
        </View>
      </Styled.SectionCenter>
    </Styled.Container>
  );
};


export default Login_Page;
