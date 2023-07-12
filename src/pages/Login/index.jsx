import { View, Text } from "react-native";
import TextButton from "../../components/TextButtonComponent";
import * as Styled from "../../styles/styled-components";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../services/requisições/req";
import PopUpError from "../../components/PopUpErrorComponent";
import { Button } from "../../components/ButtonComponent/index";
import { colors } from "../../styles/colors";
import { Icon } from "react-native-elements";
import axios from "axios";

export default function LoginPage  ({ navigation, route, layout })  {
  const [loading, setLooading] = useState(false);
  const [visibiliteError, setVisibiliteError] = useState(false);
  const [menssageError, setMenssageError] = useState("");
  const [access, setAccess] = useState(null);

  const urlBaseDev = "http://localhost:3004";
  const urlBaseProduct = "https://appnative-backend.onrender.com";
  const urlBaseAuth = "https://appnative-backend-auth.onrender.com";
  const urlBaseAuthDev = "http://localhost:8887";

  useEffect(() => {
    if (access) {
      navigation.navigate("home");
    }
  }, [access]);

  async function login() {
    navigation.navigate("auth")

  }
  
  async function loginWeb(){
    window.location.href = "http://localhost:3004/api/login"
  }  
  return (
    <Styled.Container>
      <PopUpError stateMenssage={visibiliteError} menssage={menssageError} />
      <Styled.SectionCenter>
        <View>
          <Styled.NewText>Seja Bem Vindo</Styled.NewText>
        </View>
        <View>
          <Styled.TitleText>Login</Styled.TitleText>
        </View>

        <Styled.SeparadorVertical />

        <View>
          <Button.Root onPress={login}>
            <Button.Content text={"Spotify"} />
            <Button.Icon
              color={colors.complement.secondary}
              icon={"spotify"}
              type={"material-community"}
              size={30}
            />
          </Button.Root>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            marginTop: 7,
          }}
        >
          <Icon size={24} color={colors.complement.secondary} name="info" />
          <Styled.TextDefault>
            Nosso Aplicativo é vinculado com o spotify,{" "}
            <Text style={{ color: "cyan" }}>Sobre...</Text>
          </Styled.TextDefault>
        </View>
      </Styled.SectionCenter>
    </Styled.Container>
  );
};


