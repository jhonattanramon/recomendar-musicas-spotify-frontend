import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login_Page from "./src/pages/Login";
import Cadastro_page from "./src/pages/Cadastro";

const App = () => {

    const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>

        <Stack.Navigator> 
            <Stack.Screen name="login" component={Login_Page} /> 
        </Stack.Navigator>
      
  
      
    </NavigationContainer>
  );
};

export default App;
