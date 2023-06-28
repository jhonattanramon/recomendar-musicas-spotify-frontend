import {
  View,
  Text,
  Image,
  ImageComponent,
  FlatList,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";
import { useEffect, useState } from "react";
import { Container } from "../../styles/styled-components";
import { TitleText } from "../../styles/styled-components";
import ImagemComponent from "../../components/ImagemComponent";
import Loading from "../../components/LoadingComponent";
import Track from "../../components/TrackComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { Requisicoes } from "../../services/requisições/req";
import Button_Component from "../../components/ButtonComponent";
import Header from "../../patterns/Header";

const Playlist = ({ route }) => {
  const [tracks, setTracks] = useState([]);
  const requisicoes = new Requisicoes();

  console.log("track", tracks);

  const TracksArea = () => {
    if (tracks?.length > 0) {
      return (
        <SafeAreaView style={{ flex: 1, width: "100%" }}>
          <TitleText>Faixas</TitleText>
          <FlatList
            data={tracks}
            renderItem={({ item }) => (
              <Track
                key={item.track.id}
                item={item}
                imagem={item.track.album.images[1].url}
                titulo={item.name}
                album={item.track.albumname}
                artista={item.track.artists}
                tempoDeReproducao={item.duration_ms}
                navigation={route.params.navigation}
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
    (async () => {
      const { data } = await requisicoes.tracksPlaylist(route.params.href);
      console.log(data);
      setTracks(data?.items);
    })();
  }, []);

  const ouvirSpotify = (url) => {
    Linking.openURL(`${url}`);
  };

  return (
    <Container>
      <Header navigation={route.params.navigation} />
      <View style={styles.containerImagem}>
        <View style={styles.viewDeImagem}>
          <ImagemComponent url={route.params.url} />
        </View>

        <View style={styles.viewTituloPlaylist}>
          <TitleText>{route.params.data.titulo}</TitleText>
        </View>
        <View style={{ width: "100%" }}>
          <Button_Component
            funcOnPress={() => {
              ouvirSpotify(route.params.href);
            }}
            title="ouvir"
          />
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
