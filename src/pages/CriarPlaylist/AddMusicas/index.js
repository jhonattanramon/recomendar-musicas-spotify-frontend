import { View, Text, StyleSheet, FlatList, Modal } from "react-native";
import {
  Container,
  TitleText,
  Section,
} from "../../../styles/styled-components";
import Input_Component from "../../../components/InputComponent";
import { colors } from "../../../styles/colors";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../../services/requisições/req";
import Track from "../../../components/Track";
import Header from "../../../patterns/Header";
import ParamsPlaylist from "../paramsPlaylist";
import { Dimencoes } from "../../../styles/dimencoes";
import ButtonBasic from "../../../components/ButtonBasic";
import Button_Component from "../../../components/ButtonComponent";
import ButtonIcon from "../../../components/ButtonIcon";

const AddMusicas = ({ navigation }) => {
  const req = new Requisicoes();

  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [dataPlaylistCriada, setDataPlaylistCriada] = useState([]);
  const [resMusicaAdicionada, setResMusicasAdicionada] = useState({});
  console.log(dataPlaylistCriada);

  useEffect(() => {
    (async () => {
      console.log("requisicao");
      if (textoPesquisa !== "") {
        const { data } = await req.pesquisaTrack(textoPesquisa);
        console.log(data);
        setResultadoPesquisa(data.tracks.items);
      }
    })();
  }, [textoPesquisa]);

  const adicionarMusicas = async (item) => {
    const { musicaAdicionada, playlist } = await req.adicionarMusicasPlaylist({
      id: dataPlaylistCriada.id,
      item: item,
    });
    console.log(musicaAdicionada, playlist);
    setResMusicasAdicionada(res);
  };

  return (
    <Container>
      <ParamsPlaylist
        navigation={navigation}
        setDataPlaylistCriada={setDataPlaylistCriada}
      />
      <Section style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: colors.complement.secondary,
            }}
          >
            {" "}
            Adicione suas Musicas{" "}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: colors.complement.tertiary,
            }}
          >
            Nome da Playlist
          </Text>
          <TitleText>{dataPlaylistCriada?.name}</TitleText>
        </View>
        <View style={{ padding: 10 }}>
          <Input_Component
            placeholderName="pesquise suas musicas"
            style={styles.input}
            contentStyle={styles.contentStyleInput}
            onChange={(text) => setTextoPesquisa(text)}
          />
        </View>
        <View style={{ height: 300, backgroundColor: colors.blur }}>
          {resultadoPesquisa.length > 0 ? (
            <FlatList
              data={resultadoPesquisa}
              renderItem={({ item, index, separators }) => (
                <>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Track
                      key={item.id}
                      id={item.id}
                      titulo={item.name}
                      artista={item.artists}
                      tempoDeReproducao={item.duration_ms}
                      imagem={item.album.images[1].url}
                      album={item.album.name}
                    />
                    <ButtonIcon
                      key={index}
                      color={colors.primary}
                      icon={"plus"}
                      onFunc={() => {
                        adicionarMusicas(item);
                      }}
                    />
                  </View>
                </>
              )}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: colors.complement.secondary,
                  textAlign: "center",
                }}
              >
                Pesquise por suas Musicas Favoritas!
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            position: "relative",
            width: "100%",
            padding: 7,
            justifyContent: "center",
            alignItems: "center",
            margin: 15,
          }}
        >
          <Button_Component
            style={{
              width: "100%",
              backgroundColor: colors.primary,
              padding: 12,
              borderRadius: 4,
            }}
            funcOnPress={() => criarPlaylist()}
            title={"Criar Playlist"}
          />
        </View>
      </Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "none",
  },
  contentStyleInput: {
    color: colors.complement.secondary,
  },
});
export default AddMusicas;
