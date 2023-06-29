import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Requisicoes } from "../../services/requisições/req";
import { Container, Section, TitleText } from "../../styles/styled-components";
import ImagemComponent from "../../components/ImagemComponent";
import TempoDeReproducao from "../../components/PlaybackTimeComponent";
import Loading from "../../components/LoadingComponent";
import { colors } from "../../styles/colors";
import ButtonIcon from "../../components/ButtonIconComponent"
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
              <ImagemComponent url={dataTrack.album.images[0].url} />
            </View>
          </Section>

          <Section style={styles.sectionTitle}>
            <View>
              <TitleText> {dataTrack.name} </TitleText>
            </View>
          </Section>

          <Section style={{ flexDirection: "row", marginHorintal: 17 }}>
            <View style={styles.viewButtonOuvir}>
              <Button_Component title="OUVIR" />
            </View>

            <View style={styles.viewButtonIcon}>
              <ButtonIcon icon="heart-box" size={50} />
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
                <TempoDeReproducao tempoMs={dataTrack.duration_ms} />
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
  viewTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewButtonOuvir: {
    marginVertical: 10,
    flex: 12,
  },
  viewButtonIcon: {
    flex: 1,
  },
});
export default TrackPage;
