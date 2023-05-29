import {
  Container,
  SectionCenter,
  Separador,
} from "../../styles/styled-components";
import { useEffect, useState } from "react";
import PlaylistCard from "../../components/CardPlaylists";
import Button_component from "../../components/ButtonComponent";
import Loading from "../../components/loading";
import axios from "axios";
import TopPlaylist from "../../patterns/TopPlaylist";
import { Requisicoes, accessToken } from "../../services/requisições/req";

const Home = ({ navigation }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const requisicaoDeTeste = async () => {
      const requisicoes = new Requisicoes();
      const { data } = await requisicoes.playlistEmDestaque();

      console.log(data);

      if (data !== "") {
        setPlaylists(data.playlists.items);
      }
    };
    requisicaoDeTeste();
  }, []);
  return (
    <Container>
      <TopPlaylist array={playlists} navigation={navigation} />
    </Container>
  );
};

export default Home;
