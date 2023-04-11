import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaDeLogin from "./src/pages/Login"

const  App = () => {
  return(

    <View style={{backgroundColor:'black', flex:1}}> 

    
    <TelaDeLogin />

    
    </View>

  )
}

export default App