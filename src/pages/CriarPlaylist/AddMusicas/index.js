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
import NomePlaylist from "../NomePlaylist";
import { Dimencoes } from "../../../styles/dimencoes";
import ButtonBasic from "../../../components/ButtonBasic";
import Button_Component from "../../../components/ButtonComponent";
import ButtonIcon from "../../../components/ButtonIcon";

const AddMusicas = ({ navigation }) => {
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [nomePlaylist, setNomePlaylist] = useState("");
  const [modalNomePlaylist, setModalNomePlaylist] = useState(false);

  const req = new Requisicoes();

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

  return (
    <Container>
      <NomePlaylist navigation={navigation} setNomePlaylist={setNomePlaylist} />
      <Header navigation={navigation} />
      <View style={{}}>
        <TitleText>{nomePlaylist}</TitleText>
      </View>
      <View style={{ padding: 10 }}>
        <Input_Component
          placeholderName="pesquise suas musicas"
          style={styles.input}
          contentStyle={styles.contentStyleInput}
          onChange={(text) => setTextoPesquisa(text)}
        />
      </View>
      <View style={{ height: "70%", backgroundColor: colors.blur }}>
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
                <ButtonIcon color={colors.primary} icon={"plus"} />
              </View>
            </>
          )}
        />
      </View>

      <Button_Component title="criar" />
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
