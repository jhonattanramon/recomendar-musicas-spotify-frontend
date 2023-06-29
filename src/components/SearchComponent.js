import { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, SafeAreaView } from "react-native";
import { colors } from "../styles/colors";
import ButtonIcon from "./ButtonIconComponent";
import { Section } from "../styles/styled-components";
import { FlatList } from "react-native";
import Track from "./TrackComponent";
import { Requisicoes } from "../services/requisições/req";

const PesquisaComponent = () => {
  const [textoPesquisa, setTextoPesquisa] = useState();
  const [tracks, setTraks] = useState(null);

  const req = new Requisicoes();

  const buscarTrack = async () => {
    const { data } = await req.pesquisa(textoPesquisa);
    setTraks(data);
  };

  const ResultTrack = () => {
    if (tracks != null) {
      console.log(tracks.tracks);
      return (
        <SafeAreaView style={{ height: 270 }}>
          <FlatList
            data={tracks.tracks.items}
            renderItem={({ item, index, seperators }) => (
              <Track
                id={item.id}
                imagem={item.album.images[0].url}
                titulo={item.name}
                artista={item.artists}
                tempoDeReproducao={item.duration_ms}
              />
            )}
          />
        </SafeAreaView>
      );
    } else {
      return;
    }
  };

  return (
    <View>
      <Section
        style={{
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          mode="outlined"
          outlineColor={colors.complement.secondary}
          activeOutlineColor={colors.complement.secondary}
          textColor={colors.complement.primary}
          placeholder="Buscar musica"
          selectionColor={colors.primary}
          style={{
            backgroundColor: colors.complement.secondary,
            flex: 1,
          }}
          onChangeText={(text) => {
            setTextoPesquisa(text);
          }}
        />

        <ButtonIcon
          icon="magnify"
          color={colors.complement.secondary}
          onFunc={() => {
            buscarTrack();
          }}
        />
      </Section>

      <Section>
        <ResultTrack />
      </Section>
    </View>
  );
};
export default PesquisaComponent;
