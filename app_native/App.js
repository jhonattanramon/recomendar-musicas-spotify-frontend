import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login_Page from "./src/pages/Login";
import Cadastro_page from "./src/pages/Cadastro";
import Bem_vindo from "./src/pages/Bem-vindo";
import { colors } from "./src/styles/colors";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bem-vindo"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{
            title: "Seu login",
            headerShown: false,
          }}
          name="login"
          component={Login_Page}
        />
        <Stack.Screen name="cadastro" component={Cadastro_page} />

        <Stack.Screen name="Bem-vindo" component={Bem_vindo} /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
