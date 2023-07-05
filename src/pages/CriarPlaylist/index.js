import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import { colors } from "../../styles/colors";
import * as Styled from "../../styles/styled-components";
import Input_Component from "../../components/InputComponent";
import { Requisicoes } from "../../services/requisições/req";
import { useEffect, useState } from "react";
import { Dimencoes } from "../../styles/dimencoes";
import ButtonBasic from "../../components/ButtonBasicComponent";
import SuccessCreatePlaylist from "../../patterns/successCrestePlaylist";

const CriarPlaylist = ({ navigation }) => {
  const [name, setNome] = useState("");
  const [description, setDescricao] = useState("");
  const [publicList, setPublica] = useState(true);
  const [collaborative, setColaborativa] = useState(true);
  const [image, setImage] = useState("https://i.pinimg.com/564x/08/54/fd/0854fde5bae64e078a68d37b9afec716.jpg");

  const [errorName, setErrorName] = useState(false);
  const [successCreatePlaylist, setSuccessCreatePlaylist] = useState(false);

  const data = {
    name: name,
    description: description,
    publicList: publicList,
    collaborative: collaborative,
    images: image,
  };

  const req = new Requisicoes();

  const criarPlaylist = async (dataPlaylist) => {
    const { data: playlistSPF } = await req.criarPlaylistSPF(dataPlaylist);
    const { data: playlistAPP } = await req.createPlaylistAPP(dataPlaylist);

    if (playlistSPF.state || playlistAPP.state) {
      setSuccessCreatePlaylist(true);
      setTimeout(() => {
        setSuccessCreatePlaylist(false);
        navigation.navigate("addMusicas");
      }, 1000);
    } else {
    }
  };

  return (
    <Styled.Container>
      <Styled.ScrollContainer>
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
            <Styled.TitleText> Crie sua Playlist </Styled.TitleText>
          </View>

          <View
            style={{
              justifyContent: "center",
              marginVertical: "40%",
              paddingHorizontal: 10,
            }}
          >
            <View style={{}}>
              <Styled.TextDefault>Nome da Playlist</Styled.TextDefault>
              <Input_Component
                error={errorName}
                placeholderName={"Nome Playlist"}
                onChange={(text) => {
                  setErrorName(false);
                  setNome(text);
                }}
              />
            </View>

            <Styled.SeparadorVertical />

            <View>
              <Styled.TextDefault> Descrição</Styled.TextDefault>
              <Input_Component
                placeholderName={"Descrição"}
                onChange={(text) => {
                  setDescricao(text);
                }}
              />
            </View>

            <Styled.SeparadorVertical />

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
        <SuccessCreatePlaylist setVisibiliteProp={successCreatePlaylist} />
      </Styled.ScrollContainer>
    </Styled.Container>
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
