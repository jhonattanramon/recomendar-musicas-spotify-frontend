import { View, Text, StyleSheet, FlatList, Modal } from "react-native";
import * as Styled from "../../styles/styled-components";
import Input_Component from "../../components/InputComponent";
import { colors } from "../../styles/colors";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../services/requisições/req";
import Track from "../../components/TrackComponent";
import Header from "../../patterns/Header";
import Button_Component from "../../components/ButtonComponent";
import ButtonIcon from "../../components/ButtonIconComponent";

const AddMusicas = ({ navigation }) => {
  const req = new Requisicoes();

  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [dataPlaylistCriada, setDataPlaylistCriada] = useState([]);
  const [idsTrackPlaylist, setIdsTrackPlaylist ] = useState([])


  useEffect(() => {
    (async () => {
      if (textoPesquisa !== "") {
        const { data } = await req.pesquisaTrack(textoPesquisa);
        setResultadoPesquisa(data.tracks.items);
      }
    })();
  }, [textoPesquisa]);

  const adicionarMusicas = async (item) => {
     const {playlist} = await req.adicionarMusicasPlaylist({
      id: dataPlaylistCriada.id,
       item : item})
        playlist?.data?.tracks?.items?.map( ({track}) =>  {       
        let playlistIsIncluidTrack = idsTrackPlaylist.includes(track.id)
        if( !playlistIsIncluidTrack ){
          setIdsTrackPlaylist([...idsTrackPlaylist, track.id])
          return track.id
        }
       })
  }

  return (
    <Styled.Container>
    
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} title={"Adicione suas musicas"} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 25,
          }}
        ></View>
        <View style={{}}>
          <Text
            style={{
              color: colors.complement.tertiary,
            }}
          >
            Nome da Playlist
          </Text>
          <Styled.TitleText>{dataPlaylistCriada?.name}</Styled.TitleText>
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
          {resultadoPesquisa.length > 0 ? (
            <>
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
                      theme={{
                        colors: {
                          onSurfaceDisabled: colors.primary,
                          onSurfaceVariant: colors.primary,
                          primary: colors.primary,
                          onSurfaceVariant: colors.primary,
                        },
                      }}
                      color={colors.primary}
                      icon={
                        idsTrackPlaylist.includes(item.id) ? "check" : "plus"
                      }
                      disabled={idsTrackPlaylist.includes(item.id)}
                      onFunc={() => {
                        adicionarMusicas(item);
                      }}
                    />
                  </View>
                </>
              )}
            />
            <Button_Component 
            funcOnPress={ () => {
              navigation.navigate("criarPlaylist")
            }}
            title={"Finalizar"}/> 
            </>
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
        ></View>
      </View>
    </Styled.Container>
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
