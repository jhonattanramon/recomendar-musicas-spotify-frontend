import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Requisicoes } from "../../services/requisições/req";
import * as Styled from "../../styles/styled-components";
import ImagemComponent from "../../components/ImagemComponent";
import TempoDeReproducao from "../../components/PlaybackTimeComponent";
import Loading from "../../components/LoadingComponent";
import { colors } from "../../styles/colors";
import ButtonIcon from "../../components/ButtonIconComponent";
import Button_Component from "../../components/ButtonComponent";
import { ScreenContainer } from "react-native-screens";

const TrackPage = ({ route, navigation }) => {
  const [dataTrack, setDataTrack] = useState([]);


  const requisicoes = new Requisicoes();

  useEffect(() => {
    const load = async () => {
      const { data } = await requisicoes.track(route.params.href);
      setDataTrack(data);
    };

    load();
  }, []);

  if (dataTrack.length !== 0) {
    return (
      <Styled.Container>
        <Styled.ScrollContainer>
          <View style={styles.container}>
            <View style={styles.sectionImg}>
              <View style={styles.viewImage}>
                <ImagemComponent url={dataTrack.album.images[0].url} />
              </View>
            </View>

            <View style={styles.sectionTitle}>
              <View>
                <TitleText> {dataTrack.name} </TitleText>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginHorintal: 17,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.viewButtonOuvir}>
                <Button_Component
                  onPress={() => Linking.openURL(route.params.external_url)}
                  title="OUVIR"
                />
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems:"center",
                flexDirection: "row",
              }}
            >
              <View style={{}}>
                <SubText>Artistas:</SubText>
                <View
                  style={{
                    flexDirection: "row",
                    width: 400,
                    flexWrap: "wrap",
                  }}
                >
                  {dataTrack.artists.map(({ id, name, index }) => (
                    <TextDefault key={id}>{name},</TextDefault>
                  ))}
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ButtonIcon
                styleBackground={{
                  margin: 0
                }}
                  icon="clock-time-eight"
                  size={24}
                  color={colors.primary}
                />
                <TempoDeReproducao tempoMs={dataTrack.duration_ms} />
              </View>
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <TextDefault>{dataTrack.album.album_type}</TextDefault>
                <TextDefault> • </TextDefault>
                <TextDefault>
                  {dataTrack.album.release_date.replaceAll("-", "/")}
                </TextDefault>
              </View>
            </View>
          </View>
        </Styled.ScrollContainer>
      </Styled.Container>
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
    width: 300,
    marginTop: 15,
    justifyContent: "center",
  },
  viewButtonIcon: {},
});
export default TrackPage;
