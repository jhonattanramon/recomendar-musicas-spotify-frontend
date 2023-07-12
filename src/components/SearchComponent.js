import { useEffect, useState } from "react";
import InputComponent from "./InputComponent/InputComponent";
import { View, Text, SafeAreaView } from "react-native";
import { colors } from "../styles/colors";
import { FlatList } from "react-native";
import Track from "./TrackComponent";
import { Requisicoes } from "../services/requisições/req";
import { Button } from "./ButtonComponent";

const SearchComponent = () => {
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
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          gap: 10
        }}
      >
        <InputComponent
        
          placeholder="Buscar Playlist"
          style={{
            backgroundColor: colors.complement.secondary,
            flex: 1,
          }}
          onChange={(text) => {
            setTextoPesquisa(text);
          }}
        />
        <Button.Root onPress={buscarTrack}>
          <Button.Icon  icon={"search-outline"} color={colors.complement.secondary} />
        </Button.Root>
      </View>

      <View>
        <ResultTrack />
      </View>
    </View>
  );
};
export default SearchComponent;
