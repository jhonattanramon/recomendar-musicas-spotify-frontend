import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
//Pages
import Login_Page from "./src/pages/Login";
import Cadastro_page from "./src/pages/Cadastro";
import Bem_vindo from "./src/pages/Bem-vindo";
import Home from "./src/pages/Home";
import ProfilePage from "./src/pages/Profile";
import pageDeTestes from "./src/pages/pageDeTestes";
import PlaylistPage from "./src/pages/Playlist";
import Track from "./src/pages/AlbumTrack";

//
import { MyTheme } from "./src/styles/theme";
import AutenticacaoToken from "./src/pages/autenticacaoToken";
import CriarPlaylist from "./src/pages/CriarPlaylist";
import Biblioteca from "./src/pages/Bibliteca";
import AddMusicas from "./src/pages/AddMusicas";
import {  StatusBar } from "react-native";
import { colors } from "./src/styles/colors";
import Settings from "./src/pages/settings";
import ButtonIcon from "./src/components/ButtonIconComponent";

const App = () => {
  const Stack = createNativeStackNavigator();


  return (
    <>
      <StatusBar networkActivityIndicatorVisible={true} barStyle={"dark-content"} backgroundColor={colors.primary} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name="bemvindo"
              component={Bem_vindo}
              options={{
              }}
            />
            <Stack.Screen
              options={{
                title: "Seu login",
              }}
              name="login"
              component={Login_Page}
            />
            <Stack.Screen
              name="cadastro"
              component={Cadastro_page}
              options={{
              }}
            />

            <Stack.Screen
              name="home"
              component={Home}
              options={{
              }}
            />

            <Stack.Screen
              name="profile"
              component={ProfilePage}
              options={{
              }}
            />

            <Stack.Screen
              name="playlist"
              component={PlaylistPage}
              options={{
              }}
            />
            <Stack.Screen
              name="track"
              component={Track}
              options={{
              }}
            />

            <Stack.Screen
              name="criarPlaylist"
              component={CriarPlaylist}
             
            />

            <Stack.Screen
              name="biblioteca"
              component={Biblioteca}
              options={{
              }}
            />

            <Stack.Screen
              name="addMusicas"
              component={AddMusicas}
              options={{
              }}
            />
            <Stack.Screen
              name="auth"
              component={AutenticacaoToken}
              options={{
              }}
            />

            <Stack.Screen 
            name="settings"
            component={Settings}
            options={{
              animation:'slide_from_right'
            }}
            /> 
          </Stack.Group>

          <Stack.Group
            screenOptions={{
              presentation: "modal",
            }}
          >
         
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
