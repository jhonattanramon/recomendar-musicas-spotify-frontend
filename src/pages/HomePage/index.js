import { Container } from "../../styles/styled-components";
import { useEffect, useState } from "react";
import { Requisicoes, accessToken } from "../../services/requisições/req";
import { View } from "react-native";
import CampoDeDados from "../../patterns/CampoDeDados";
import PesquisaComponent from "../../components/Pesquisa";
import ButtonIcon from "../../components/ButtonIcon";
import { colors } from "../../styles/colors";

const HomePage = ({ navigation }) => {
  const [playlists, setPlaylists] = useState([]);
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    const requisicaoDeTeste = async () => {
      const requisicoes = new Requisicoes();
      const { data } = await requisicoes.playlistEmDestaque();
      const { data: artistas } = await requisicoes.pesquisaGenere({
        genere: "pagode",
        type: "artist",
      });

      console.log(artistas);
      if (data !== "") {
        setPlaylists(data.playlists.items);
      } else if (artistas !== "") {
        setArtistas(artistas.artists.items);
      }
    };
    requisicaoDeTeste();
  }, []);
  return (
    <Container style={{}}>
      <View>
        <ButtonIcon
          icon="face-man-outline"
          color={colors.complement.secondary}
          size={30}
          styleComp={{ backgroundColor: colors.primary }}
          onFunc={() => {
            navigation.navigate("profile");
          }}
        />
      </View>
      <View style={{}}>
        <PesquisaComponent />
      </View>

      <View style={{}}>
        <CampoDeDados
          title="Tops Playlists"
          array={playlists}
          navigation={navigation}
        />
      </View>

      <View>
        <CampoDeDados
          title="conheça alguns artistas"
          array={artistas}
          navigation={navigation}
        />
      </View>
    </Container>
  );
};

export default HomePage;
