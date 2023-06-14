import { View, Text, StyleSheet, FlatList } from "react-native";
import { Container, TitleText } from "../../../styles/styled-components";
import Input_Component from "../../../components/InputComponent";
import { colors } from "../../../styles/colors";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../../services/requisições/req";
import Track from "../../../components/Track";
import Header from "../../../patterns/Header";

const AddMusicas = ({ navigation }) => {
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  console.log(resultadoPesquisa);

  const req = new Requisicoes();

  useEffect(() => {
    (async () => {
      if (textoPesquisa !== "") {
        const { data } = await req.pesquisaTrack(textoPesquisa);
        console.log(data);
        setResultadoPesquisa(data.tracks.items);
      }
    })();
  }, [textoPesquisa]);

  return (
    <Container>
      <Header navigation={navigation} />

      <View style={{ height: 100 }}>
        <Text> header</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Input_Component
          placeholderName="pesquise suas musicas"
          style={styles.input}
          contentStyle={styles.contentStyleInput}
          onChange={(text) => setTextoPesquisa(text)}
        />
      </View>
      <View>
        <FlatList
          data={resultadoPesquisa}
          renderItem={({ item, index, separators }) => (
            <Track
              key={item.id}
              id={item.id}
              titulo={item.name}
              artista={item.artists}
              tempoDeReproducao={item.duration_ms}
              imagem={item.album.images[1].url}
              album={item.album.name}
            />
          )}
        />
      </View>
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
