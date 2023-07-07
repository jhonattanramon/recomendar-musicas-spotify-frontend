import * as Styled from "../../styles/styled-components";
import { useEffect, useState } from "react";
import { Requisicoes} from "../../services/requisições/req";
import { View } from "react-native";
import CampoDeDados from "../../patterns/CampoDeDados";
import SearchComponent from "../../components/SearchComponent";
import ButtonIcon from "../../components/ButtonIconComponent";
import { colors } from "../../styles/colors";

export default function HomePage ({ navigation })  {
  const [playlists, setPlaylists] = useState([]);
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    (async () => {
      const requisicoes = new Requisicoes();
      const { data: dataPlaylists } = await requisicoes.playlistEmDestaque();

      if (dataPlaylists) {
        setPlaylists(dataPlaylists.playlists.items);
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
      </Styled.ScrollContainer>
    </Styled.Container>
  );
};

