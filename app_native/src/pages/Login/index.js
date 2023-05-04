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
} from "../../styles/styled-components";
<<<<<<< Updated upstream
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> Stashed changes

const Login_Page = ({ navigation}) => {

<<<<<<< Updated upstream
  const [teste, setTeste] = useState()
 

  useEffect( () => {

    const load = () => {
      
    }

    load()

  }, [])

  
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
          />

          <Input_Component
            placeholderName="Senha"
            color={"#00000"}
            secureTextEntry={true}
            textAffix={true}
          />
        </View>

        <Separador />

        <View>
          <Button_Component funcOnPress={() => {
            (window.location.href = "http://localhost:8887")
          }} title="Login" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 2,
=======
  const [ visibleModal , setVisibleModal] = useState(false)
  


      return (

    
        <Container>
          <SectionCenter>
          <Provider> 

        <Portal> 

          <Modal 
          visible={visibleModal}
          onDismiss={!visibleModal}
          contentContainerStyle={{
            backgroundColor:"white",
            flex:1,
            justifyContent: "center",
            alignItems: "center",

>>>>>>> Stashed changes
          }}
          >
            <Auth /> 

          </Modal>
        </Portal>
            <View>
              <NewText>Seu login</NewText>
              <TitleText>Login</TitleText>
            </View>
    
            <View>
              <Input_Component
                placeholderName="Email"
                color={"#00000"}
                inputMode="email"
              />
    
              <Input_Component
                placeholderName="Senha"
                color={"#00000"}
                secureTextEntry={true}
                textAffix={true}
                />
            </View>
    
            <Separador />
    
            <View>
              <Button_Component funcOnPress={ () => {
               ( window.location.href = "http://localhost:8887")
                setVisibleModal(true);
              }} title="Login" />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 2,
              }}
              >
              <TextButton
                title="Cadastro"
                onPressFunc={() => navigation.navigate("cadastro")}
              />
              <TextButton title="Esqueceu a Senha ?" />
            </View>
          </Provider>
          </SectionCenter>
        </Container>
      );
    }

 

export default Login_Page;
