import { Container } from "../../styles/styled-components";
import { useEffect, useState } from "react";
import { Requisicoes, accessToken } from "../../services/requisições/req";
import { View, StyleSheet } from "react-native";
import CampoDeDados from "../../patterns/CampoDeDados";
import PesquisaComponent from "../../components/Pesquisa";
import ButtonIcon from "../../components/ButtonIcon";
import { colors } from "../../styles/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage";
import CriarPlaylist from "../Criar playlist";
import ProfileComponent from "../Profile";

import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  // const [playlists, setPlaylists] = useState([]);
  // const [artistas, setArtistas] = useState([]);

  // useEffect(() => {
  //   const requisicaoDeTeste = async () => {
  //     const requisicoes = new Requisicoes();
  //     const { data } = await requisicoes.playlistEmDestaque();
  //     const { data: artistas } = await requisicoes.pesquisaGenere({
  //       genere: "pagode",
  //       type: "artist",
  //     });

  //     console.log(artistas);
  //     if (data !== "") {
  //       setPlaylists(data.playlists.items);
  //     } else if (artistas !== "") {
  //       setArtistas(artistas.artists.items);
  //     }
  //   };
  //   requisicaoDeTeste();
  // }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabIcon,
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
    position: "absolute",
    color: colors.primary,
    backgroundColor: colors.complement.secondary,
  },
  tabIcon: {
    fontSize: 17,
  },
});

export default Home;
