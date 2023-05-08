import { View } from "react-native";
import { Button } from "react-native-paper";
import { Container, Separador } from "../../styles/styled-components";
import Button_Component from "../../components/Button_Component";
import { useState } from "react";
import { set } from "mongoose";
import React from "react";
import axios from "axios";


const Home = () =>  {

  

  
    return (
      <Container>
      <Button_Component funcOnPress={ () => { 

        axios.get("http://localhost:8887/apiSpotify/artists", {
          
        })
      }} /> 
       
      </Container>
    );
  }


export default Home;
