import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login_Page from "./src/pages/Login"
import Cadastro_page from './src/pages/Cadastro';

const  App = () => {
  return(

    <View style={{
      backgroundColor:'black',
       flex:1
       }}> 



      <Cadastro_page /> 
      

    
    </View>

  )
}

export default App