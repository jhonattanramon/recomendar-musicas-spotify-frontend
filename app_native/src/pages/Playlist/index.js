import {
  View,
  Text,
  Image,
  ImageComponent,
  FlatList,
  ScrollView,
  StyleSheet
} from "react-native";
import { Container } from "../../styles/styled-components";
import { TitleText } from "../../styles/styled-components";

import ImagemComponent from "../../components/Imagem";
import axios from "axios";
import { useEffect, useState } from "react";
import Track from "../../components/Track";
import { SafeAreaView } from "react-native-safe-area-context";

const Playlist = ({ route }) => {
  const [tracks, setTracks] = useState([]);
  console.log(tracks);
  useEffect(() => {
    const load = async () => {
     const result =  await  axios
        .get("http://localhost:3001/apispotify/tracksplaylist", {
          headers: {
            hrefTracks: route.params.data.item.tracks.href,
          },
        })
        .then(({ data }) => setTracks(data.items));

        console.log(result);
      };



    load();
  }, []);

  return (
    <Container>
      <View style={styles.containerImagem}>
        <View style={styles.viewDeImagem}>
          <ImagemComponent url={route.params.data.url} />
        </View>

        <View style={styles.viewTituloPlaylist}>
          <TitleText >{route.params.data.titulo}</TitleText>
        </View>
      </View>

      <SafeAreaView style={styles.containerTracks}>
        <ScrollView >
          <FlatList
            data={tracks}
            renderItem={({ item }) => (
              <Track
                imagem={item.track.album.images[1].url}
                titulo={item.track.name}
                album={item.track.album.name}
                artista={item.track.artists}
                tempoDeReproducao={item.track.duration_ms}
              />
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};


const styles = StyleSheet.create({

  containerImagem:{
    flex: 1,
    alignItems:"center",
    justifyContent:'center',
    padding:7

  }
,
  viewDeImagem:{
    width: 250,
     height: 250,
     borderRadius:7 
  },

  containerTracks:{
    flex: 1,
     paddingHorizontal: 10 
  },
  viewTituloPlaylist:{
      padding:7
  }
})

export default Playlist;
