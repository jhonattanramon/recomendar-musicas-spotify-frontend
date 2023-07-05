import * as Styled from "../../styles/styled-components";
import { useEffect, useState } from "react";
import { Requisicoes, accessToken } from "../../services/requisições/req";
import { View } from "react-native";
import CampoDeDados from "../../patterns/CampoDeDados";
import SearchComponent from "../../components/SearchComponent";
import ButtonIcon from "../../components/ButtonIconComponent";
import { colors } from "../../styles/colors";

const HomePage = ({ navigation }) => {
  const [playlists, setPlaylists] = useState([]);
  const [artistas, setArtistas] = useState([]);

  console.log(playlists);

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
    <Styled.Container style={{}}>
      <Styled.ScrollContainer>
        <View>
          <SearchComponent />
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

        <View>
          <CampoDeDados
            title="conheça alguns artistas"
            array={artistas}
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
      </Styled.ScrollContainer>
    </Styled.Container>
  );
};

export default HomePage;
