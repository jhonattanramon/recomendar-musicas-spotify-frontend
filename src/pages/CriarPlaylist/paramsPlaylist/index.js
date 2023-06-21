import { View, StyleSheet, Text, Button, Modal, Alert } from "react-native";
import {
  Section,
  Container,
  TitleText,
  TextDefault,
} from "../../../styles/styled-components";
import Input_Component from "../../../components/InputComponent";
import ButtonBasic from "../../../components/ButtonBasic";
import { useEffect, useState } from "react";
import { colors } from "../../../styles/colors";
import { Dimencoes } from "../../../styles/dimencoes";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button_Component from "../../../components/ButtonComponent";
import { Requisicoes } from "../../../services/requisições/req";
import ButtonIcon from "../../../components/ButtonIcon";

const ParamsPlaylist = ({ navigation, setDataPlaylistCriada }) => {
  const req = new Requisicoes();
  const [modalActive, setModalActive] = useState(true);
  const [stateResponsePlaylist, setStateResponsePlaylist] = useState(false);

  const criarPlaylist = async (dataPlaylist) => { 
    const { data } = await req.criarPlaylist(dataPlaylist);
    setDataPlaylistCriada(data.response)    
    if( data.state){
      setStateResponsePlaylist(data.state);
      setTimeout(() => {
        console.log("timout");
        setModalActive(!data.state)
      }, 1000 )
    }
  };

  const FormularioPlaylist = ({}) => {
    const [nomePlaylist, setNomePlaylist] = useState("");
    const [publica, setPublica] = useState(false);
    const [colaborativa, setColaborativa] = useState(false);
    const [descricao, setDescricao] = useState("");

    const data = {
      name: nomePlaylist,
      public: publica,
      collaborative: colaborativa,
      description: descricao,
    };
    return (
      <View
        style={{
          backgroundColor: colors.complement.primary,
          height: "100%",
        }}
      >
        <Section
          style={{
            flex: 1,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{}}>
            <TitleText> Dê um nome á sua playlist </TitleText>
            <Input_Component
              onChange={(text) => {
                setNomePlaylist(text);
              }}
              style={styles.input}
            />
            <View
              style={{
                flexDirection: "row",
                margin: 7,
                justifyContent: "space-around",
              }}
            ></View>
          </View>

          <View>
            <View>
              <TitleText>Opções da playlist</TitleText>
            </View>

            <View>
              <TextDefault> Descrição</TextDefault>
              <Input_Component
                onChange={(text) => {
                  setDescricao(text);
                }}
                style={{ backgroundColor: "none" }}
                multiline={true}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                columnGap: 10,
                marginVertical: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <TextDefault>Playlist Publica</TextDefault>
                <BouncyCheckbox
                  onPress={(inCheck) => {
                    setPublica(inCheck);
                  }}
                  size={21}
                  unfillColor="none"
                  fillColor={colors.complement.secondary}
                />
              </View>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <TextDefault>Playlist Colaborativa</TextDefault>
                <BouncyCheckbox
                  onPress={(inCheck) => {
                    setColaborativa(inCheck);
                  }}
                  size={25}
                  unfillColor="none"
                  fillColor={colors.complement.secondary}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              margin: 10,
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "space-around",
            }}
          >
            <ButtonBasic
              funcOnPress={() => {
                setModalActive(!modalActive);
                navigation.goBack("criarPlaylist");
              }}
              title="Cancelar"
            />

            <ButtonBasic
              style={{
                borderWidth: 1.4,
                borderColor: colors.complement.secondary,
                borderRadius: Dimencoes.borderRadius,
                backgroundColor: colors.primary,
              }}
              titleStyle={{
                color: colors.complement.secondary,
                fontSize: 12,
                paddingHorizontal: 13,
                paddingVertical: 5,
                fontWeight: "bold",
              }}
              funcOnPress={() => {
                if (nomePlaylist !== "") {
                  criarPlaylist(data);
                } else {
                  alert("de um nome a sua playlist");
                  Alert.alert("de um nome a sua Playlist");
                }
              }}
              title="Criar Playlist"
            />
          </View>
        </Section>
      </View>
    );
  };

  const ResPlaylsitCriada = () => {
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <View
          style={{
            width: 300,
            height: 300,
            borderRadius: 150,
            backgroundColor: colors.complement.secondary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonIcon color={colors.primary} size={100} icon={"check-bold"} />
        </View>
        <View>
          <Text
            style={{
              color: colors.complement.secondary,
              textAlign: "center",
              fontSize: Dimencoes.fontSize,
            }}
          >
            Playlist Criada com Sucesso!
          </Text>
        </View>
      </Container>
    );
  };

  if (stateResponsePlaylist) {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalActive}
        onRequestClose={() => {
          setModalActive(false);
        }}
      >
          <ResPlaylsitCriada />

      </Modal>
    );
  } else {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalActive}
        onRequestClose={() => {
          setModalActive(false);
        }}
      >
        <FormularioPlaylist />
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "none",
  },
});

export default ParamsPlaylist;
