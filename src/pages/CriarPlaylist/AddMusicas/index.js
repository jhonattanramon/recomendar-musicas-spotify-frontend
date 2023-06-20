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
import axios from "axios";

const AddMusicas = ({ navigation }) => {
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);

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
      <ParamsPlaylist
        navigation={navigation}
      />
      <Section style={{flex:1}}>
        <Header navigation={navigation} />
        <View style={{}}>
          <TitleText>{}</TitleText>
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
        <View style={{ position: "absolute", bottom:"5%", width:"100%", padding: 7}}>
          <Button_Component
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
