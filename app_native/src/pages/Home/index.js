import {
  Container,
  SectionCenter,
  Separador,
} from "../../styles/styled-components";
import React, { useEffect, useState } from "react";
import PlaylistCard from "../../patterns/playlists";
import Button_component from "../../components/Button_Component";
import Loading from "../../components/loading";
import axios from "axios";
import TopPlaylist from "../../patterns/TopPlaylist";

const Home = () => {
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
  return( 
  <Container>

    <TopPlaylist array={playlists}/> 

  </Container>
  )
};

export default Home;
