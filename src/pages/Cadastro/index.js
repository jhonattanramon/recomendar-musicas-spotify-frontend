import { View, Text, Alert } from "react-native";
import {
  Container,
  NewText,
  Section,
  SectionCenter,
  Separador,
  SeparadorVertical,
  Title,
  TitleText,
} from "../../styles/styled-components";
import Button_Component from "../../components/ButtonComponent";
import Input_Component from "../../components/InputComponent";
import TextButton from "../../components/TextButton";
import { useState } from "react";
import { colors } from "../../styles/colors";

import axios from "axios";

const Cadastro_page = ({ navigation }) => {
  //states
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onAddName = (valueName) => setName(valueName);
  const onAddSobrenome = (valueSobrenome) => setSobrenome(valueSobrenome);
  const onAddEmail = (valueEmail) => setEmail(valueEmail);
  const onAddSenha = (valueSenha) => setSenha(valueSenha);
  const onConfirmPassword = (valuePassword) =>
    setConfirmPassword(valuePassword);

  const valueRegisterUser = {
    name: name,
    sobrenome: sobrenome,
    email: email,
    password: senha,
    confirmPassword: confirmPassword,
  };

  const ValueUserJson = JSON.stringify(valueRegisterUser);

  const checkForm = async () => {
    if (
      !valueRegisterUser.name ||
      !valueRegisterUser.sobrenome ||
      !valueRegisterUser.email ||
      !valueRegisterUser.password ||
      !valueRegisterUser.confirmPassword
    ) {
      Alert.alert("Campo vazio! preencha as informações antes prosseguir");

      alert('"Campo vazio! preencha as informações antes prosseguir"');
      return;
    }

    if (valueRegisterUser.email) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if (!reg.test(valueRegisterUser.email)) {
        Alert.alert("Email inválido! preencha corretamente");
        alert('"Email inválido! preencha corretamente"');
        return;
      }
    }

    if (valueRegisterUser.password !== valueRegisterUser.confirmPassword) {
      Alert.alert("Senhas não são iguais! check o campo de senhas.");
      alert("Senhas não são iguais! check o campo de senhas.");
      return;
    }

    const baseUrlUser = "http://localhost:3001";

    await axios
      .post(`${baseUrlUser}/api/users`, {
        name: valueRegisterUser.name,
        sobrenome: valueRegisterUser.sobrenome,
        email: valueRegisterUser.email,
        password: valueRegisterUser.password,
      })
      .then(() => {
        console.log("user registration");
        Alert.alert("usuario registrado");
      });


      fetch("url",
      {
        method: "POST",
        body:{
          titulo: titulo
        }
      })


    
  };

  return (
    <Container>
      <SectionCenter>
        <Section>
          <View>
            <NewText>Realize seu</NewText>
            <TitleText style={{ color: colors.complement.secondary }}>
              CADASTRO
            </TitleText>
          </View>

          <View>
            <Input_Component
              labelName="Nome"
              inputMode="text"
              onChange={(valueText) => {
                onAddName(valueText);
              }}
            />

            <Input_Component
              labelName="Sobrenome"
              inputMode="text"
              onChange={(valueText) => {
                onAddSobrenome(valueText);
              }}
            />
          </View>

          <View>
            <Input_Component
              labelName="Email"
              inputMode="email"
              onChange={(valueText) => {
                onAddEmail(valueText);
              }}
            />
          </View>

          <View>
            <Input_Component
              labelName="Senha"
              textAffix={true}
              secureTextEntry={true}
              onChange={(valueText) => {
                onAddSenha(valueText);
              }}
            />
          </View>

          <View>
            <Input_Component
              labelName="Confirme Senha"
              secureTextEntry={true}
              onChange={(valueText) => {
                onConfirmPassword(valueText);
              }}
            />
          </View>
        </Section>

        <SeparadorVertical />

        <Section>
          <View>
            <Button_Component
              funcOnPress={() => {
                checkForm(titulo, desc);
              }}
              title="Realizar Cadastro"
            />
          </View>
        </Section>

        <View style={{ marginTop: 13 }}>
          <TextButton
            title="Login"
            onPressFunc={() => {
              navigation.navigate("login");
            }}
          />
        </View>
      </SectionCenter>
    </Container>
  );
};

export default Cadastro_page;
