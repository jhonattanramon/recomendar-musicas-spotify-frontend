import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Requisicoes } from "../../services/requisições/req";
import {
  Container,
  Section,
  SectionCenter,
  TitleText,
  TextDefault,
} from "../../styles/styled-components";
import ImagemComponent from "../../components/Imagem";
import TempoDeReproducao from "../../components/TempoDeReproducao";
import Loading from "../../components/loading";
import { colors } from "../../styles/colors";
import ButtonIcon from "../../components/ButtonIcon";
import Button_Component from "../../components/ButtonComponent";

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

  if (dataTrack.length !== 0) {
    return (
      <Container>
        <View style={styles.container}>
          <Section style={styles.sectionImg}>
            <View style={styles.viewImage}>
              <ImagemComponent />
            </View>
          </Section>

          <Section style={styles.sectionTitle}>
            <View>
              <TitleText> {dataTrack.name} </TitleText>
            </View>

            <View>
              <ButtonIcon icon="heart-box" size={33} />
            </View>
          </Section>

          <Section>
            <View style={styles.viewButtonOuvir}>
              <Button_Component title="OUVIR" />
            </View>
          </Section>

          <Section
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {dataTrack.artists.map(({ id, name }) => (
              <Section key={id} style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.textSegundary}>{name}</Text>
                </View>
              </Section>
            ))}

            <Section>
              <View style={styles.viewTime}>
                <ButtonIcon icon="clock-time-eight" size={20} />
                <Text style={styles.textSegundary}>2:00</Text>
              </View>
            </Section>
          </Section>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textDefault}>
                {dataTrack.album.album_type}
              </Text>
              <Text style={styles.textDefault}> • </Text>
              <Text style={styles.textDefault}>
                {dataTrack.album.release_date}
              </Text>
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
    flex: 1,
  },
  viewImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    backgroundColor: colors.complement.secondary,
  },
  textDefault: {
    color: colors.font.primary,
  },
  textSegundary: {
    color: colors.font.segundary,
  },
  sectionImg: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  viewButtonOuvir: {
    marginVertical: 10,
  },
  viewTime: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default TrackPage;
