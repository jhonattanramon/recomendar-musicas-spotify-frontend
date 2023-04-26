import { View } from "react-native";
import { Button } from "react-native-paper";
import { Container } from "../../styles/styled-components";
import Button_Component from "../../components/Button_Component";
import { useState } from "react"
import { set } from "mongoose";

import React from "react";

class App extends React.Component {
 

  constructor(props){
    super(props)
    const parametros = this.getHashParams()
    const token = parametros.access_token
  }
  
  getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      
      return hashParams;
  }


  fazerLogin(){
    window.location.href = "http://localhost:8888"
  }

  
  


  render(){

    return(

      <Container> 
        <View> 
          <Button_Component title="teste" funcOnPress={ () => fazerLogin()} /> 
        </View>
        </Container>
      
    )
  }



}

export default App