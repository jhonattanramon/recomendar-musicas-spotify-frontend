import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
//Pages
import LoginPage from "./src/pages/Login";
import Home from "./src/pages/Home";
import ProfilePage from "./src/pages/Profile";
import PlaylistPage from "./src/pages/Playlist";
import Track from "./src/pages/Track";

//
import AutenticacaoToken from "./src/pages/autenticacaoToken";
import CriarPlaylist from "./src/pages/CriarPlaylist";
import AddMusicas from "./src/pages/AddMusicas";
import { StatusBar } from "react-native";
import { colors } from "./src/styles/colors";
import Settings from "./src/pages/settings";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    (async () => {
      const stateLogin = await SecureStore.getItemAsync(
        "state_login_app_native"
      );
      console.log(stateLogin);
      if (stateLogin === "logged") {
        const refresh_token = await SecureStore.getItemAsync(
          "refresh_token_app_native"
        );
        console.log(refresh_token);
        const newToken = await axios
          .post(`http://192.168.0.25:3004/api/refreshtoken`, {
            refresh_token: refresh_token,
          })
          .then((res) => res);
      }
    })();
  }, []);

  return (
    <>
      <StatusBar
        networkActivityIndicatorVisible={true}
        barStyle={"dark-content"}
        backgroundColor={colors.primary}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name="login"
              component={LoginPage}
              options={{
                title: "Seu login",
              }}
            />

            <Stack.Screen name="home" component={Home} options={{}} />

            <Stack.Screen name="profile" component={ProfilePage} options={{}} />

            <Stack.Screen
              name="playlist"
              component={PlaylistPage}
              options={{}}
            />

            <Stack.Screen name="track" component={Track} options={{}} />

            <Stack.Screen name="criarPlaylist" component={CriarPlaylist} />

            <Stack.Screen
              name="addMusicas"
              component={AddMusicas}
              options={{}}
            />

            <Stack.Screen
              name="auth"
              component={AutenticacaoToken}
              options={{}}
            />

            <Stack.Screen
              name="settings"
              component={Settings}
              options={{
                animation: "slide_from_right",
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
