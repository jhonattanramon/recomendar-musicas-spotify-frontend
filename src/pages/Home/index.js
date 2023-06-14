import { View, StyleSheet } from "react-native";
import PesquisaComponent from "../../components/Pesquisa";
import { colors } from "../../styles/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage";
import CriarPlaylist from "../CriarPlaylist";
import ProfileComponent from "../Profile";

import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: () => <Ionicons name="home" size={17} />,
        }}
        name="Home"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="create" size={17} />,
        }}
        name="Criar Playlist"
        component={CriarPlaylist}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="person" size={17} />,
        }}
        name="Perfil"
        component={ProfileComponent}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    color: colors.primary,
    backgroundColor: colors.complement.secondary,
  },
});

export default Home;
