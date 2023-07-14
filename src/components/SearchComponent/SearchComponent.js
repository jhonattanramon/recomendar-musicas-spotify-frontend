import { useEffect, useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { View, Text, ScrollView, Image, VirtualizedList } from "react-native";
import { colors } from "../../styles/colors";
import { FlatList } from "react-native";
import { Requisicoes } from "../../services/requisições/req";
import { Button } from "../ButtonComponent";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FaixaPlaylist } from "../FaixaPlaylistComponent";

const SearchComponent = () => {
  const navigation = useNavigation()
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [playlists, setPlaylists] = useState(null);
  console.log(playlists);
  const req = new Requisicoes();

  useEffect(() => {
    (async () => {
      const { data } = await req.pesquisa(textoPesquisa);
      setPlaylists(data?.playlists?.items);
    })();
  }, [textoPesquisa]);

  const ResultTrack = () => {
    if (playlists != null && textoPesquisa != "") {
      return (
        <View style={{ flexDirection: "column", gap: 10}}> 
        <FlatList
        data={playlists}
        renderItem={ 
          ({item,index,separators}) => {
            return (
              <FaixaPlaylist.Root 
              style={{
                width:"100%",
                height: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems:"center",
                paddingHorizontal:5,
                paddingVertical:10,
                backgroundColor: colors.complement.secondary,
                marginVertical: 5
              }}
                onPress={ () => {
                  navigation.navigate("playlist", { href:item.href, external_urls: item.external_urls?.spotify,image: item.images[0].url, title:item.name,  } )
                }}
                > 
                <FaixaPlaylist.Image uri={item?.images[0]?.url}/>
                <FaixaPlaylist.Content text={item?.name} />
                <FaixaPlaylist.User text={item?.owner?.display_name}/> 
              </FaixaPlaylist.Root>
            );
          }}
          />
          </View>
      );
    } else {
      return;
    }
  };

  return (
    <View style={{
      padding: 10,
      justifyContent: "center",
    }}>
      <View>
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
      </View>
        <ResultTrack />
    </View>
  );
};
export default SearchComponent;
