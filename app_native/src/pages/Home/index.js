import {
  Container,
  SectionCenter,
  Separador,
} from "../../styles/styled-components";
import React, { useEffect, useState } from "react";
import PlaylistCard from "../../patterns/playlists";
import Button_component from "../../components/Button_Component"
import axios from "axios";

import {Requests, tokenTst } from "../../services/Requests"

const Home = () => {



  const req = new Requests()  

  const [responseApi, setResponseApi] = useState()

  console.log(responseApi);

  const teste = responseApi ? responseApi.images[0].url : responseApi

  useEffect(
    () => {
     const requisicaoDeTeste = async () => {
        const playlistDeTeste  = await req.playlist()
        console.log(playlistDeTeste);
        setResponseApi(playlistDeTeste.data)
      }

    requisicaoDeTeste()
      
    },[]
  )
 




  return (
    <Container>
      <SectionCenter>

          
        <PlaylistCard url={teste} />

        <Button_component title="buscar" funcOnPress={ () => {
          
        
        }}/> 
      
      </SectionCenter>
    </Container>
  );
};

export default Home;
