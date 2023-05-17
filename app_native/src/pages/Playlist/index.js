import { View, Text, Image, ImageComponent, FlatList } from "react-native";
import { Container } from "../../styles/styled-components";
import { TitleText } from "../../styles/styled-components";

import ImagemComponent from "../../components/Imagem";
import axios from "axios";
import { useEffect, useState } from "react";
import Track from "../../components/Track";

const Playlist = ({ route }) => {

  const [tracks, setTracks] =useState([])
  console.log(tracks);
   useEffect( () => {
      const load = async() => {

        await axios.get("http://localhost:3001/apispotify/tracksplaylist", {
          headers:{
            hrefTracks: route.params.data.item.tracks.href
          }
        }).then( ({data}) => setTracks(data))

      
      }



    load()

   },[])

  

  return (
    <Container>
      <View style={{flex: 1,  }}>
        <View style={{  width: 300, height: 300 }}>
          <ImagemComponent url={route.params.data.url} />
        </View>

        <View>
          <TitleText>{route.params.data.titulo}</TitleText>
        </View>
      </View>

      <View> 
          
          <FlatList 
          data={tracks}
          renderItem={({item}) => (
            <Track />
          )}
          /> 
            
        

      </View>
    </Container>
  );
};

export default Playlist;
