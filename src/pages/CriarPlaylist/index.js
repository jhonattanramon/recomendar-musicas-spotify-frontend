import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import { colors } from "../../styles/colors";
import {
  Container,
  Section,
  SubText,
  TitleText,
} from "../../styles/styled-components";
import Input_Component from "../../components/InputComponent";
import { Requisicoes } from "../../services/requisições/req";
import { useEffect, useState } from "react";
import Track from "../../components/Track";
import ButtonIcon from "../../components/ButtonIcon";

const CriarPlaylist = ({ navigation }) => {
  const [generos, setGeneros] = useState();
  const [nameTracker, setNameTracker] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    (async () => {
      const req = new Requisicoes();
      const { data } = await req.getGeneros();
      console.log(data);
      setGeneros(data);
    })();
  }, []);

  const reqMusica = async (nameTracker) => {
    const req = new Requisicoes();
    const { data } = await req.pesquisaTrack(nameTracker);
    setTracks(data);
  };

  const AddTracks = () => {
    return (
      <View>
        <Section>
          <Input_Component
            style={{
              backgroundColor: "none",
              flex: 2,
            }}
            onChange={(text) => {
              setNameTracker(text);
              setTimeout(() => reqMusica(text), 1000);
            }}
          />
        </Section>

        <Section>
          {tracks?.tracks?.items?.map((item) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <Track
                  id={item.id}
                  imagem={item.album.images[0].url}
                  titulo={item.name}
                  artista={item.artists}
                  tempoDeReproducao={item.duration_ms}
                />
                <ButtonIcon onFunc={() => {}} icon="plus" />
              </View>
            );
          })}
        </Section>
      </View>
    );
  };

  return (
    <Container>
      <View
        style={{
          padding: 15,
          borderBottomWidth: 1,
          borderBottomColor: colors.complement.secondary,
        }}
      >
        <SubText>Crie sua Playlist</SubText>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 200,
            width: 200,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonIcon
            onFunc={() => {
              navigation.navigate("AddMusicas");
            }}
            icon="plus"
            size={150}
            color={colors.primary}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: colors.blur.primary,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPlus: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default CriarPlaylist;
