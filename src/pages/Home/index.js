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
    sceneContainerStyle={styles.tabBar}
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
        
      }}

    >
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Ionicons
          color={colors.complement.secondary} 
          name="home"
           size={21} />,
        }}
        name="Home"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Ionicons color={colors.complement.secondary}   name="create" size={21} />,
        }}
        name="Criar Playlist"
        component={CriarPlaylist}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Ionicons 
          color={colors.complement.secondary}
          name="person"
          size={21} />,
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
    backgroundColor: colors.complement.primary,
    opacity: 500,
    height: 60,
    border: "none"
  },
});

export default Home;
