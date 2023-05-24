import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Requisicoes } from "../../services/requisições/req";
import {
  Container,
  SectionCenter,
  TitleText,
} from "../../styles/styled-components";
import ImagemComponent from "../../components/Imagem";
import TempoDeReproducao from "../../components/TempoDeReproducao";
import Loading from "../../components/loading";

const TrackPage = ({ route, navigation }) => {
  const [dataTrack, setDataTrack] = useState([]);
  console.log(dataTrack);
  const requisicoes = new Requisicoes();

  useEffect(() => {
    const load = async () => {
      console.log(route.params.url);
      const { data } = await requisicoes.track(route.params.url);
      setDataTrack(data);
    };

    load();
  }, []);

  if (dataTrack.length != 0) {
    return (
      <Container>
        <View style={styles.container}>
          <View style={{ width: 100, height: 100 }}>
            <ImagemComponent url={dataTrack.album.images[0].url} />
          </View>

          <View>
            {/* <TitleText> {dataTrack.name} </TitleText> */}
            <TitleText> Middle Ground </TitleText>
          </View>

          <View>
            {/* <TempoDeReproducao tempoMs={dataTrack.duration_ms} /> */}
            <Text> 2:00</Text>
          </View>

          <View>
            {/* {dataTrack.artists.map(({ id, name }) => (
              <View key={id}>
                <Text>{name}</Text>
              </View>
            ))} */}

            <View>
              <Text>Marron5</Text>
            </View>
          </View>
        </View>
      </Container>
    );
  } else {
    return <Loading />;
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default TrackPage;
