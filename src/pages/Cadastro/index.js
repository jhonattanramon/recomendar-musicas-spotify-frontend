import { View, Text, Alert } from "react-native";
import * as Styled from "../../styles/styled-components";
import Button_Component from "../../components/ButtonComponent";
import Input_Component from "../../components/InputComponent";
import TextButton from "../../components/TextButtonComponent";
import { useState } from "react";
import { colors } from "../../styles/colors";

import axios from "axios";
import PopUpError from "../../components/PopUpErrorComponent";

const Cadastro_page = ({ navigation }) => {
  //states
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [menssageError, setMenssageError] = useState("");
  const [visibiliteError, setVisibiliteError] = useState(false);
  const [ loading, setLoading ] = useState(false)

  //states error
  const [ nameError, setNameError ] = useState(false)
  const [ surnameError, setSurnameError ] = useState(false)
  const [ emailError, setEmailError ] = useState(false)
  const [ passwordError, setPasswordError ] = useState(false)
  const [ confirmPasswordError, setConfirmPasswordError ] = useState(false)



  const baseUrlUser = "http://localhost:3004";


  const valueRegisterUser = {
    name: name,
    surname: surname,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  console.log(valueRegisterUser);

  const checkForm = async () => {
    const displayMenssageError = () =>  {
      setVisibiliteError(true)
      setTimeout( () => setVisibiliteError(false), 1500)    
    }

    if (
      !valueRegisterUser.name ||
      !valueRegisterUser.surname ||
      !valueRegisterUser.email ||
      !valueRegisterUser.password ||
      !valueRegisterUser.confirmPassword
    ) {
      setMenssageError("Campo vazio! preencha as informações antes prosseguir")
      displayMenssageError()
      setLoading(false)
      return;
    }

    if (email) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!reg.test(valueRegisterUser.email)) {
        setMenssageError("Email inválido! preencha corretamente")
        displayMenssageError()
        setLoading(false)
        return;
      }
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true)
      setPasswordError(true)
      setMenssageError("Senhas não são iguais! check o campo de senhas.")
      displayMenssageError()
      setLoading(false)
      return;
    }

    const response = await axios
      .post(`${baseUrlUser}/api/createuser`, {
        name: valueRegisterUser.name.toLowerCase(),
        surname: valueRegisterUser.surname.toLowerCase(),
        email: valueRegisterUser.email.toLowerCase(),
        password: valueRegisterUser.password,
      })
      .then((res) => res).finally( () => setLoading(false));

      console.log(response);
    setMenssageError(response.data.menssage);

    if(response.data.stateMenssage)
        displayMenssageError()
    
  };

  return (
    <Styled.Container>
      <PopUpError 
      menssage={menssageError}
      stateMenssage={visibiliteError} />
      <Styled.SectionCenter>
        <View>
          <View>
            <NewText>Realize seu</NewText>
            <TitleText style={{ color: colors.complement.secondary }}>
              CADASTRO
            </TitleText>
          </View>

          <View>
            <Input_Component
              error={nameError}
              placeholderName={"Nome"}
              inputMode="text"
              onChange={(valueText) => {
                setNameError(false)
                setName(valueText);
              }}
            />

            <Input_Component
              error={surnameError}
              placeholderName={"Sobrenome"}
              inputMode="text"
              onChange={(valueText) => {
                setSurnameError(false)
                setSurname(valueText);
              }}
            />
          </View>

          <View>
            <Input_Component
              error={emailError}
              placeholderName={"Email"}
              inputMode="email"
              onChange={(valueText) => {
                setEmailError(false)
                setEmail(valueText);
              }}
            />
          </View>

          <View>
            <Input_Component
              error={passwordError}
              placeholderName={"Senha"}
              textAffix={true}
              secureTextEntry={true}
              onChange={(valueText) => {
                setPasswordError(false)
                setPassword(valueText);
              }}
            />
          </View>

          <View>
            <Input_Component
              error={confirmPasswordError}
              placeholderName={"Confirmar Senha"}
              secureTextEntry={true}
              onChange={(valueText) => {
                setConfirmPasswordError(false)
                setConfirmPassword(valueText);
              }}
            />
          </View>
        </View>

        <Styled.SeparadorVertical />

        <View>
          <View>
            <Button_Component
              loading={loading}
              funcOnPress={() => {
                setLoading(true)
                checkForm();
              }}
              title="Realizar Cadastro"
            />
          </View>
        </View>

        <View style={{ marginTop: 13 }}>
          <TextButton
            title="Login"
            onPressFunc={() => {
              navigation.navigate("login");
            }}
          />
        </View>
      </Styled.SectionCenter>
    </Styled.Container>
  );
};

export default Cadastro_page;
