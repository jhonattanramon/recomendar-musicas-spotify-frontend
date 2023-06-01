import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Pages
import Login_Page from "./src/pages/Login";
import Cadastro_page from "./src/pages/Cadastro";
import Bem_vindo from "./src/pages/Bem-vindo";
import HomePage from "./src/pages/Home";
import ProfilePage from "./src/pages/Profile";
import pageDeTestes from "./src/pages/pageDeTestes";
import PlaylistPage from "./src/pages/Playlist";
import Track from "./src/pages/AlbumTrack";

//
import { MyTheme } from "./src/styles/theme";
import AutenticacaoToken from "./src/pages/autenticacaoToken";
import CriarPlaylist from "./src/pages/Criar playlist";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="bem-vindo"
          component={Bem_vindo}
          options={{
            header: {},

            headerShown: false,
          }}
        />
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
          name="home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="profile"
          component={ProfilePage}
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

        <Stack.Screen
          name="criarPlaylist"
          component={CriarPlaylist}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="auth"
          component={AutenticacaoToken}
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