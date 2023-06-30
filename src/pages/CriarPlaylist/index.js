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
import SuccessCreatePlaylist from "../../patterns/successCrestePlaylist";

const CriarPlaylist = ({ navigation }) => {
  const [name, setNome] = useState("");
  const [description, setDescricao] = useState("");
  const [publicList, setPublica] = useState(true);
  const [collaborative, setColaborativa] = useState(true);
  const [image, setImage] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [ successCreatePlaylist, setSuccessCreatePlaylist] = useState(false)

  const data = {
    name: name,
    description: description,
    publicList: publicList,
    collaborative: collaborative,
    image: image,
  };

  const criarPlaylist = async (dataPlaylist) => {
    const { data: playlistSPF } = await req.criarPlaylistSPF(dataPlaylist);
    const { data: playlistAPP} = await req.createPlaylistAPP(dataPlaylist)
    
    if (playlistSPF.state || playlistAPP.state){
        setSuccessCreatePlaylist(true)
        setTimeout(() => {
         setSuccessCreatePlaylist(false);
          navigation.navigate("addMusicas")
       }, 1000);
      }else{

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
                setNome(text);
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
        

          <SeparadorVertical />

          <View
            style={{
              width: "100%",
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
                if (name !== "") {
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
      <SuccessCreatePlaylist setVisibiliteProp={successCreatePlaylist}/> 
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
