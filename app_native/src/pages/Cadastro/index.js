import { View, Text } from "react-native";
import {
  Container,
  Section,
  SectionCenter,
  Separador,
} from "../../styles/styled-components";
import { TextInput } from "react-native-paper";
import Button_Component from "../../components/Button_Component";
import Input_Component from "../../components/Input_Component";
import { useState } from "react";

const Cadastro_page = () => {
  //states
  const [name, setName] = useState()
  const [sobrenome, setSobrenome]= useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()



  const onAddName = (valueName) => setName(valueName)
  const onAddSobrenome = (valueSobrenome) => setSobrenome(valueSobrenome)
  const onAddEmail = (valueEmail) => setEmail(valueEmail)
  const onAddSenha = (valueSenha) => setSenha(valueSenha)


  const valueRegisterUser = {
    name: name,
    sobrenome: sobrenome,
    email: email,
    senha: senha
  }


  console.log(valueRegisterUser);

  return (
    <Container>
      <SectionCenter>
        <Section>
          <View>
            <Input_Component
            
            
             labelName="Nome"
             onChange={ (valueText) =>{
                  onAddName(valueText)
             } }
             
             />

            <Input_Component
             labelName="Sobrenome"
             onChange={ (valueText) => {
                  onAddSobrenome(valueText)
             }} />
          </View>

          <View>
            <Input_Component 
            labelName="Email"
            onChange={ (valueText) => {
              onAddEmail(valueText)
            }} />
          </View>

          <View>
            <Input_Component
             labelName="Senha"
            textAffix={true}
            secureTextEntry={true}
            onChange={ (valueText) => {
              onAddSenha(valueText)
            }}
            />
          </View>
        </Section>

        <Separador />

        <Section>
          <View>
            <Button_Component
             title="Realizar Cadastro"
             
             />
          </View>
        </Section>
      </SectionCenter>
    </Container>
  );
};

export default Cadastro_page;
