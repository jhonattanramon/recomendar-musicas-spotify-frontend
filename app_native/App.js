import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Pages 
import Login_Page from "./src/pages/Login";
import Cadastro_page from "./src/pages/Cadastro";
import Bem_vindo from "./src/pages/Bem-vindo";
import HomePage from "./src/pages/Home";
import Profile from "./src/pages/Profile";
//
import { colors } from "./src/styles/colors";
import { MyTheme } from "./src/styles/theme";


const App = () => {

  class access_token{
    constructor(token){
      this.token = token
    }

    
    reqService(){
      (window.location.href = "http://localhost:8887")
    }
  }

  const Stack = createNativeStackNavigator();

  


  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
<<<<<<< Updated upstream
        initialRouteName=""
=======
        initialRouteName="profile"
>>>>>>> Stashed changes
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          options={{
            title: "Seu login",
            headerShown:false
          }}
          name="login"
          component={Login_Page}
        />
        <Stack.Screen 
        name="cadastro"
        component={Cadastro_page}
        options={
          {
           headerShown:false
          }
        }
        />

        <Stack.Screen 
        name="bem-vindo"
         component={Bem_vindo}
         options={
          {
            headerShown:false
          }
         } />

         <Stack.Screen 
         name='home'
         component={HomePage}
         options={
          {
            headerShown:false
          }

        }
         />

         <Stack.Screen 
         name="profile"
         component={Profile} 
         options={ 
          {
            headerShown:false
          }
         }
         
         />

         </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
