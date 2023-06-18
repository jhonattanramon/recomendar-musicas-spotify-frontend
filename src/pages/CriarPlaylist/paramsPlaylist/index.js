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

const ParamsPlaylist = ({
  navigation,
  setNomePlaylist,
  setColaborativa,
  setDescricao,
  setPublica,
}) => {
  const [modalActive, setModalActive] = useState(true);
  const [textPlaylist, setTextPlaylist] = useState("");

  useEffect(() => {
    setNomePlaylist(textPlaylist);
  }, [textPlaylist]);

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={modalActive}
      onRequestClose={() => {
        alert("modal seta fechado");
        setModalActive(false);
      }}
    >
      <View
        style={{
          // marginVertical: "50%",
          // marginHorizontal: "10%",
          backgroundColor: colors.complement.primary,
          height: "100%",
          // borderRadius: Dimencoes.borderRadius,
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
            <View style={{ flexDirection: "column", columnGap:10, marginVertical: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextDefault>Playlist Publica</TextDefault>
                <BouncyCheckbox
                  onPress={(inCheck) => {
                    setPublica(inCheck);
                  }}
                  size={25}
                  unfillColor="none"
                  fillColor={colors.primary}
                />
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextDefault>Playlist Colaborativa</TextDefault>
                <BouncyCheckbox
                  onPress={(inCheck) => {
                    setColaborativa(inCheck);
                  }}
                  size={25}
                  unfillColor="none"
                  fillColor={colors.primary}
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
              funcOnPress={() => {
                if (textPlaylist !== "") {
                  setModalActive(!modalActive);
                } else {
                  alert("de um nome a sua playlist");
                  Alert.alert("de um nome a sua Playlist");
                }
              }}
              title="Avançar"
            />
          </View>
        </Section>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "none",
  },
});

export default ParamsPlaylist;
