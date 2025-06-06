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

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar
        networkActivityIndicatorVisible={true}
        barStyle={"dark-content"}
        backgroundColor={colors.primary}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="settings"
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

            <Stack.Screen 
            name="home"
            component={Home}
            options={{}} />

            <Stack.Screen
            name="profile"
            component={ProfilePage}
            options={{}} />

            <Stack.Screen
            name="playlist"
            component={PlaylistPage}
            options={{
            }}/>

            <Stack.Screen 
            name="track"
            component={Track}
            options={{}} />

            <Stack.Screen 
            name="criarPlaylist"
            component={CriarPlaylist} />
           
            <Stack.Screen
            name="addMusicas"
            component={AddMusicas}
            options={{}} />

            <Stack.Screen
            name="auth"
            component={AutenticacaoToken}
            options={{}}/>

            <Stack.Screen
            name="settings"
            component={Settings}
            options={{
            animation: "slide_from_right",
            }}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
