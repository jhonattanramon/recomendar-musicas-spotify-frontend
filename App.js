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
import pageDeTestes from "./src/pages/pageDeTestes";
import PlaylistPage from "./src/pages/Playlist";
import Track from "./src/pages/Track";

//
import { colors } from "./src/styles/colors";
import { MyTheme } from "./src/styles/theme";
import { GlobalStyle } from "./src/styles/styled-components";

const App = () => {
  const Stack = createNativeStackNavigator();

  const varivelDeDesenvolvimento = "teste";

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: true,
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
        <Stack.Screen
          name="cadastro"
          component={Cadastro_page}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="bem-vindo"
          component={Bem_vindo}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="playlist"
          component={PlaylistPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="track"
        component={Track}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="pageDeTeste" component={pageDeTestes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
