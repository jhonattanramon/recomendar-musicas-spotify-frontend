import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import { colors } from "../../styles/colors";
import {
  Container,
  Section,
  SubText,
  TitleText,
  TextDefault,
  SeparadorVertical,
} from "../../styles/styled-components";
import Input_Component from "../../components/InputComponent";
import { Requisicoes } from "../../services/requisições/req";
import { useEffect, useState } from "react";
import Track from "../../components/TrackComponent";
import ButtonIcon from "../../components/ButtonIconComponent";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Dimencoes } from "../../styles/dimencoes";
import ButtonBasic from "../../components/ButtonBasicComponent";

const CriarPlaylist = ({ navigation }) => {
  const [generos, setGeneros] = useState();
  const [nameTracker, setNameTracker] = useState("");
  const [tracks, setTracks] = useState([]);

  const [namePlaylist, setNomePlaylist] = useState("");
  const [description, setDescricao] = useState("");
  const [publicList, setPublica] = useState(false);
  const [collaborative, setColaborativa] = useState(false);
  const [image, setImage] = useState("");
  const [errorName, setErrorName] = useState(false);

  const data = {
    name: namePlaylist,
    description: description,
    publicList: publicList,
    collaborative: collaborative,
    image: image,
  };

  const criarPlaylist = async (dataPlaylist) => {
    const { data: playlistSPF } = await req.criarPlaylistSPF(dataPlaylist);
    const { data: playlistAPP} = await req.createPlaylistAPP(dataPlaylist)
    
     console.log(playlistAPP);
 
     if (playlistSPF.state || playlistAPP.state) {
 
       setDataPlaylistCriada(playlistAPP.response);
       setStateResponsePlaylist(playlistAPP.state);
       setTimeout(() => {
         console.log("timout");
         setModalActive(!playlistAPP.state);
       }, 1000);
      }
   };
  



  return (
    <Container>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <TitleText> Crie sua Playlist </TitleText>
        </View>

    <View
      style={{
      justifyContent: "center",
      marginVertical: "40%",
      paddingHorizontal: 10,
      }}
        >
          <View style={{}}>
            <TextDefault>Nome da Playlist</TextDefault>
            <Input_Component
              error={errorName}
              placeholderName={"Nome Playlist"}
              onChange={(text) => {
                setErrorName(false);
                setNomePlaylist(text);
              }}
            />
          </View>

          <SeparadorVertical />

          <View>
            <TextDefault> Descrição</TextDefault>
            <Input_Component
              placeholderName={"Descrição"}
              onChange={(text) => {
                setDescricao(text);
              }}
            />
          </View>

          <SeparadorVertical />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 0,
              }}
            >
              <BouncyCheckbox
              style={{ 
                padding: 7,
                width: 30,
                justifyContent:"center",
                alignItems:"center"
              }}
                onPress={(inCheck) => {
                  setPublica(inCheck);
                }}
                
                fillColor={colors.primary}
                iconStyle={{
                  height: 30,
                  width: 30,
                }}
                innerIconStyle={{
                  color: colors.primary,
                  width: 30,
                  height: 30,
                }}
              />
              <TextDefault>Playlist Pública</TextDefault>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BouncyCheckbox
              style={{ 
                padding: 7,
                width: 30,
                justifyContent:"center",
                alignItems:"center"
              }}
                onPress={(inCheck) => {
                  setColaborativa(inCheck);
                }}
                size={27}
                fillColor={colors.primary}
                iconStyle={{
                  height: 30,
                  width: 30,
                }}
                innerIconStyle={{
                  color: colors.primary,
                  width: 30,
                  height: 30,
                }}
              />
              <TextDefault>Playlist Colaborativa</TextDefault>
            </View>
          </View>

          <SeparadorVertical />

          <View
            style={{
              width: "100%",
              margin: 10,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <ButtonBasic
              onPress={() => {
                setModalActive(!modalActive);
                navigation.goBack("criarPlaylist");
              }}
              title="Cancelar"
              style={{
                paddingHorizontal: 40,
                paddingVertical: 8,
                borderColor: colors.primary,
                borderRadius: 7,
                backgroundColor: colors.complement.secondary,
              }}
            />

            <ButtonBasic
              style={{
                paddingHorizontal: 40,
                paddingVertical: 8,
                borderColor: colors.primary,
                borderRadius: 7,
                backgroundColor: colors.primary,
              }}
              titleStyle={{
                color: colors.complement.secondary,
                fontSize: 14,
                fontWeight: "600",
              }}
              onPress={() => {
                if (namePlaylist !== "") {
                  criarPlaylist(data);
                } else {
                  setErrorName(true);
                }
              }}
              title="Criar Playlist"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: colors.blur.primary,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPlus: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default CriarPlaylist;
