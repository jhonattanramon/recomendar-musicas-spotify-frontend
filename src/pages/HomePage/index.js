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
    (async () => {
      const requisicoes = new Requisicoes();
      const { data: dataPlaylists } = await requisicoes.playlistEmDestaque();
      const { data: dataArtistas } = await requisicoes.pesquisaGenere({
        genere: "pagode",
        type: "artist",
      });

      if (dataPlaylists) {
        setPlaylists(dataPlaylists.playlists.items);
      }
      if (dataArtistas) {
        setArtistas(dataArtistas.artists.items);
      }
    })();
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
