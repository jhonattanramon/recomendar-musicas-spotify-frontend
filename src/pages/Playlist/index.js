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
import Loading from "../../components/loading";

import { useEffect, useState } from "react";
import Track from "../../components/Track";
import { SafeAreaView } from "react-native-safe-area-context";

import { Requisicoes } from "../../services/requisições/req";

const Playlist = ({ route }) => {
  const [tracks, setTracks] = useState([]);

  const requisicoes = new Requisicoes();

  const TracksArea = () => {
    if (tracks.length > 0) {
      return (
        <SafeAreaView style={{ flex: 1, width: "100%" }}>
          <FlatList
            data={tracks}
            renderItem={({ item }) => (
              <Track
                id={item.id}
                item={item}
                imagem={item.track.album.images[1].url}
                titulo={item.track.name}
                album={item.track.album.name}
                artista={item.track.artists}
                tempoDeReproducao={item.track.duration_ms}
                navigation={route.params.data.navigation}
              />
            )}
          />
        </SafeAreaView>
      );
    } else {
      return <Loading />;
    }
  };

  useEffect(() => {
    const load = async () => {
      const { data } = await requisicoes.tracksPlaylist(
        route.params.data.item.tracks.href
      );
      setTracks(data.items);
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
          <TitleText>{route.params.data.titulo}</TitleText>
        </View>
      </View>

      <View style={styles.containerTracks}>
        <TracksArea />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerImagem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
  },
  viewDeImagem: {
    width: 250,
    height: 250,
    borderRadius: 7,
  },

  containerTracks: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  viewTituloPlaylist: {
    padding: 7,
  },
});

export default Playlist;
