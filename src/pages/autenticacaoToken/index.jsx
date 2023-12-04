import { WebView } from "react-native-webview";
import React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store"

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
         const { dataToken} = await axios.get(urlCallBackDev, {
          headers:{
            code: code
          }
        }).then( res => res.data )
        
        console.log(dataToken);

        if( dataToken.state){
            await SecureStore.setItemAsync("refresh_token_app_native", dataToken.refresh_token)
            await SecureStore.setItemAsync("state_login_app_native", "logged")
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

