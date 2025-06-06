import { WebView } from "react-native-webview";
import React from "react";
import { Component } from "react";
import axios from "axios";

export default function AutenticacaoToken({navigation}) {

  const urlCallBackDev = "http://192.168.0.25:3004/api/callback"
  const urlLoginDev = "http://192.168.0.25:3004/api/login"
  const urlProduct = "https://appnative-backend.onrender.com/api/callback"

 function handleWebViewMenssage(event){
    console.log("redirect");
    const { navigationType, url } = event.nativeEvent
    const urlParams = {}
    url
  .slice(url.indexOf('?') + 1)
  .split('&')
  .forEach(param => {
    const [key, value] = param.split('=');
    urlParams[key] = decodeURIComponent(value);
  });
  const code = urlParams['code'];
  const state = urlParams["state"]
  console.log(code);


    (
      async () => {
         const data = await axios.get(urlCallBackDev, {
          headers:{
            code: code
          }
        }).then( res => res.data )
        console.log(data);
        if(data.state){
            navigation.navigate("home")
        }
      
      }

    )()

  
  }


    return (
      <WebView
        source={{ uri: urlLoginDev }}
        style={{ flex: 1 }}
        onLoadEnd={handleWebViewMenssage}
      
      />
    );

}

