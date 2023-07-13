import { useEffect, useState } from "react";
import InputComponent from "./InputComponent/InputComponent";
import { View, Text } from "react-native";
import { colors } from "../styles/colors";
import { FlatList } from "react-native";
import { Requisicoes } from "../services/requisições/req";
import { Button } from "./ButtonComponent";

const SearchComponent = () => {
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [playlists, setPlaylists] = useState(null);
  const req = new Requisicoes();

  useEffect( () => {  
    (  async() => {
         const playlists = await req.pesquisa(textoPesquisa);
         console.log(playlists);
      setPlaylists(playlists);
    }

    )()
  },[textoPesquisa])
  
 const ResultTrack = () => {
   if (playlists != null) {
       return (
         <View style={{backgroundColor:"red", height: 270 }}>
           <FlatList
             data={playlists}
             renderItem={({ item, index, seperators }) => (
              <View> <Text>{item.message} </Text></View>
             )}
           />
       </View>
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
        {/* <Button.Root onPress={buscarTrack}>
          <Button.Icon  icon={"search-outline"} color={colors.complement.secondary} />
        </Button.Root> */}
      </View>

      <View>
        <ResultTrack /> 
      </View>
    </View>
  );
};
export default SearchComponent;
