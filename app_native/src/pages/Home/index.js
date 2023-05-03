import { View } from "react-native";
import { Button } from "react-native-paper";
import { Container, Separador } from "../../styles/styled-components";
import Button_Component from "../../components/Button_Component";
import { useState } from "react";
import { set } from "mongoose";
import React from "react";


const Home = () =>  {

  

  
    return (
      <Container>
        <View>
          <Button_Component
            title="auth"
            funcOnPress={() =>{
              this.testeDeFunçao()
              (window.location.href = "http://localhost:8887")
            }
            } 
              
          />

          <Separador />

          <Button_Component
            title="buscar tracks"
            funcOnPress={() => {
              this.topTracksLorde();
            }}
          />
          <Separador />

          <Button_Component
            title="teste router"
            funcOnPress={() => {
              this.useRouter();
            }}
          />
        </View>
      </Container>
    );
  }


export default Home;
