import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage";
import CriarPlaylist from "../CriarPlaylist";
import ProfileComponent from "../Profile";
import Library from "../Library"


import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    sceneContainerStyle={styles.tabBar}
    backBehavior={
      "initialRoute"
    }
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
           size={26} />,
        }}
        name="Home"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Ionicons color={colors.complement.secondary}
          name="add"
          size={38} />,
        }}
        name="Criar Playlist"
        component={CriarPlaylist}
      />
      <Tab.Screen
        options={{
          tabBarLabel:"",
          tabBarIcon: ()=> <Ionicons 
          color={colors.complement.secondary}
          name={"albums"}
          size={26}
          />

         }} 
        component={Library}
        name="library"
        />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Ionicons 
          color={colors.complement.secondary}
          name="person"
          size={26} />,
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
    height: 75,
    border: "none"
  },
});

export default Home;
