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
import { Container, ScrollContainer } from "../../styles/styled-components";
import { TitleText } from "../../styles/styled-components";
import ImagemComponent from "../../components/ImagemComponent";
import Loading from "../../components/LoadingComponent";
import Track from "../../components/TrackComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { Requisicoes } from "../../services/requisições/req";
import Button_Component from "../../components/ButtonComponent/ButtonRoot";
import Header from "../../patterns/Header";
import { Dimencoes } from "../../styles/dimencoes";
import { Button } from "../../components/ButtonComponent";

export default function Playlist  ({ route })  {
  const [tracks, setTracks] = useState([]);
  const [tracksPlalistUser, setTracksPlalistUser] = useState([]);
  const [data, setData] = useState(null);
  const requisicoes = new Requisicoes();

  useEffect(() => {
    (async () => {
      const { data } = await requisicoes.tracksPlaylist(route.params.href);
      setData(data);
      setTracksPlalistUser(data.items);
      setTracks(data?.tracks?.items);
    })();
  }, []);

  const ouvirSpotify = (url) => {
    
  };

  const TracksArea = () => {
    if (tracks?.length > 0 || tracksPlalistUser?.length > 0) {
      return (
        <View
          style={{
            width: "100%",
          }}
        >
          <TitleText>Faixas</TitleText>
          {(tracks || tracksPlalistUser).map((item) => (
            <Track
              key={item.track.id}
              item={item}
              imagem={item.track.album.images[1].url}
              titulo={item.track.name}
              album={item.track.album.name}
              artista={item.track.artists}
              tempoDeReproducao={item.track.duration_ms}
              href={item.track.href} 
              external_url = {item.track.external_urls.spotify }
              navigation={route.params.navigation}
            />
          ))}
        </View>
      );
    } else {
      return <Loading />;
    }
  };

  return (
    <Container>
      <ScrollContainer>
        <Header navigation={route.params.navigation} />
        <View style={styles.containerImagem}>
          <View style={styles.viewDeImagem}>
            <ImagemComponent url={route.params.image} />
          </View>
          <View style={styles.viewTituloPlaylist}>
            <TitleText>{route.params.title}</TitleText>
          </View>
          <View style={{ width: Dimencoes.widthButton }}>
            <Button.Root onPress={() => { Linking.openURL(route.params.externalUrl)}}
            >
              <Button.Content text={"OUVIR"}/>
              </Button.Root>
          </View>
        </View>

        <View style={styles.containerTracks}>
          <TracksArea />
        </View>
      </ScrollContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerImagem: {
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
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  viewTituloPlaylist: {
    padding: 7,
  },
});
