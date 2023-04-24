import { View, Text, Alert } from "react-native";
import {
  Container,
  NewText,
  Section,
  SectionCenter,
  Separador,
  Title,
  TitleText
} from "../../styles/styled-components";
import Button_Component from "../../components/Button_Component";
import Input_Component from "../../components/Input_Component";
import TextButton from "../../components/TextButton";
import { useState } from "react";
import { colors } from "../../styles/colors";
import HeaderComponent from "../../patterns/header";
import { RegisterUser } from "../../services/models/RegisterUser";

const Cadastro_page = ({navigation}) => {
  //states
  const [name, setName] = useState()
  const [sobrenome, setSobrenome]= useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [ confirmPassword, setConfirmPassword ] = useState()

  const onAddName = (valueName) => setName(valueName)
  const onAddSobrenome = (valueSobrenome) => setSobrenome(valueSobrenome)
  const onAddEmail = (valueEmail) => setEmail(valueEmail)
  const onAddSenha = (valueSenha) => setSenha(valueSenha)
  const onConfirmPassword = (valuePassword) => setConfirmPassword(valuePassword)

  const valueRegisterUser = {
    name: name,
    sobrenome: sobrenome,
    email: email,
    password: senha,
    confirmPassword: confirmPassword
  }


  const checkForm = () =>{

    if(!valueRegisterUser.name || !valueRegisterUser.sobrenome || !valueRegisterUser.email || !valueRegisterUser.password || !valueRegisterUser.confirmPassword){ 
      console.log('campo em branco');
      return
    }

    if(valueRegisterUser.password !== valueRegisterUser.confirmPassword){
      console.log('senhas não são iguais')
      Alert.alert('Please enter your password', "alert-warning")
      return
       
    }

    navigation.navigate('login')

  }


  

  return (
    <Container>
      <SectionCenter>
        <Section>
 

        <View> 
          <NewText>Realize seu</NewText>
          <TitleText style={{color:colors.complement.secondary }}> 
             CADASTRO
          </TitleText>

    
        </View>

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

          <View> 
            <Input_Component 
            labelName='Confirme Senha'
            secureTextEntry={true}
            onChange={ (valueText) => {
              onConfirmPassword(valueText)
            }}
            /> 
          </View>
        </Section>

        <Separador />

        <Section>
          <View>
            <Button_Component
              funcOnPress={ () => {
                checkForm()
            }}
             title="Realizar Cadastro"
             
             />
          </View>
        </Section>

      <View> 
      <TextButton title='Login' onPressFunc={ () => {
          
          }
      }   />
      </View>


        
      </SectionCenter>
    </Container>
  );
};

export default Cadastro_page;
