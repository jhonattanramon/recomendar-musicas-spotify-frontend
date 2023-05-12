import {
  Container,
  SectionCenter,
  Separador,
} from "../../styles/styled-components";
import React, { useEffect, useState } from "react";
import PlaylistCard from "../../patterns/playlists";
import Button_component from "../../components/Button_Component"
import axios from "axios";


const Home = () => {

  useEffect(
    () => {
     const requisicaoDeTeste = async () => {

      await axios
      .get(`http://localhost:3001/apiSpotify/obterGeneros`)
      .then((res) => console.log(res));
      }


      

    requisicaoDeTeste()
      
    },[]
  )
 




  return (
    <Container>
      <SectionCenter>

          
        <PlaylistCard  />

        <Button_component title="buscar" funcOnPress={ () => {
          
        
        }}/> 
      
      </SectionCenter>
    </Container>
  );
};

export default Home;
