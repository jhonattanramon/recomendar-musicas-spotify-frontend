import { Pressable, View, Text, Button } from "react-native";
import Button_Component from "../../components/ButtonComponent";
import Input_Component from "../../components/InputComponent";
import {
  Container,
  SectionCenter,
  Title,
  Separador,
  NewText,
  TitleText,
} from "../../styles/styled-components";
import { colors } from "../../styles/colors";
import { Requisicoes } from "../../services/requisições/req";
import { useState } from "react";

const Bem_vindo = ({ navigation }) => {
  const [email, setEmail] = useState();

  const toLogin = async () => {
    const requisicoes = new Requisicoes();

    const access = await requisicoes.login({ email: email });

    console.log(access);
  };

  return (
    <Container>
      <SectionCenter>
        <View>
          <View>
            <NewText>Olá,</NewText>
            <TitleText>Bem-vindo</TitleText>
          </View>

          <View>
            <Input_Component
              placeholderName="seu email"
              onChange={(text) => {
                setEmail(text);
              }}
            />
            <Separador />
            <Button_Component
              funcOnPress={() => {
                toLogin();
              }}
              title="continuar"
            />
          </View>
          <View>
            <Text style={{ color: colors.complement.secondary }}>
              ainda não tem conta ?{" "}
              <Text
                onPress={() => {
                  navigation.navigate("cadastro");
                }}
                style={{ color: colors.secondary }}
              >
                Cadastro
              </Text>
            </Text>
          </View>
        </View>
      </SectionCenter>
    </Container>
  );
};

export default Bem_vindo;
