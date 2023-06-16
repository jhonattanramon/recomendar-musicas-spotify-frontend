import { View, Text, StyleSheet, FlatList, Modal } from "react-native";
import { Container, TitleText, Section } from "../../../styles/styled-components";
import Input_Component from "../../../components/InputComponent";
import { colors } from "../../../styles/colors";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../../services/requisições/req";
import Track from "../../../components/Track";
import Header from "../../../patterns/Header";
import NomePlaylist from "../NomePlaylist";
import { Dimencoes } from "../../../styles/Dimencoes";
const AddMusicas = ({ navigation }) => {
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [ nomePlaylist, setNomePlaylist] = useState("")
  const [ modalNomePlaylist, setModalNomePlaylist ] = useState(false)

  console.log("teste");
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


  const NomePlaylist = ({ navigation, visibilite , setVisibilite }) => {
    const [modalActive, setModalActive] = useState(true);
    const [ textPlaylist, setTextPlaylist ] = useState("")
  
    console.log("teste nome playlist");
    return (
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalActive}
      onRequestClose={ () => {
        alert("modal seta fechado")
        setModalActive(false)
      }   
    }
      >
        <View
        style={{
          marginVertical: "50%",
          marginHorizontal:"10%",
          backgroundColor:colors.complement.primary,
          height: 200,
          borderRadius: Dimencoes.borderRadius,
        }} 
        >
          <Section style={{ 
            flex:1,
            padding:10,
            justifyContent:"center",
            alignItems:"center",
            }}>
            <View style={{  }}>
              <TitleText> Dê um nome á sua playlist </TitleText>
              <Input_Component
                onChange={(text) => {
                  setTextPlaylist(text);
                }}
                style={styles.input}
              />
              <View
                style={{
                  flexDirection: "row",
                  margin: 7,
                  justifyContent: "space-around",
                }}
              >
                <ButtonBasic
                  funcOnPress={() => {
                    navigation.navigate("criarPlaylist");
                  }}
                  title="Cancelar"
                />
  
                <ButtonBasic
                  funcOnPress={() => {
                    if (textPlaylist !== "") {
                      setModalActive(!modalActive)
                    } else {
                      alert("de um nome a sua playlist")
                      Alert.alert("de um nome a sua Playlist");
                    }
                  }}
                  title="Avançar"
                />
              </View>
            </View>
          </Section>
        </View>
      </Modal>
    );
  };

  return (
    <Container>
      
      <NomePlaylist 
      setVisibilite={setModalNomePlaylist}
      visibilite={modalNomePlaylist}
      setNomePlaylist={setNomePlaylist} />

      <Header navigation={navigation} />

      

      <View style={{ height: 100 }}>
        <Text>{nomePlaylist}</Text>
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
            <NomePlaylist />
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
