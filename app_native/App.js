import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login_Page from "./src/pages/Login";
import Cadastro_page from "./src/pages/Cadastro";
import { colors } from "./src/styles/colors";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="cadastro"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.complement.secondary,
        }}
      >
        <Stack.Screen
          options={{
            title: "Seu login",
          }}
          name="login"
          component={Login_Page}
        />
        <Stack.Screen
         name="cadastro"
         component={Cadastro_page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
