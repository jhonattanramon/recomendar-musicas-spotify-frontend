
import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview'



class Auth extends React.Component {
  constructor(props) {
    super(props);
    const parametros = this.getHashParams();
    this.token = parametros.access_token;
    console.log(this.token);
    
    
    
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.log(this.token);
    
    return hashParams;


    
  }


  render(){

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <WebView
          source={
            { 
        uri: "http://localhost:8080"
        }}/> 
      </SafeAreaView>
      )
  }

 

    
  
}

export default Auth;
