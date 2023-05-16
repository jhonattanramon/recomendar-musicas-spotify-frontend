import {
  Container,
  SectionCenter,
  Separador,
} from "../../styles/styled-components";
import { useEffect, useState } from "react";
import PlaylistCard from "../../components/CardPlaylists";
import Button_component from "../../components/Button_Component";
import Loading from "../../components/loading";
import axios from "axios";
import TopPlaylist from "../../patterns/TopPlaylist";

const Home = ({ navigation }) => {
  const [playlists, setPlaylists] = useState([]);
  console.log(playlists);
  useEffect(() => {
    const requisicaoDeTeste = async () => {
      await axios
        .get("http://localhost:3001/apispotify/playlistsEmDestaque")
        .then(({ data, message }) => setPlaylists(data.playlists.items));
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
