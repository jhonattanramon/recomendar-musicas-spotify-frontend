import { View, StyleSheet, Text, Button, Modal, Alert } from "react-native";
import {
  Section,
  Container,
  TitleText,
} from "../../../styles/styled-components";
import Input_Component from "../../../components/InputComponent";
import ButtonBasic from "../../../components/ButtonBasic";
import { useState } from "react";
import { colors } from "../../../styles/colors";
import { Dimencoes } from "../../../styles/Dimencoes";

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

const styles = StyleSheet.create({
  input: {
    backgroundColor: "none",
  },
});

export default NomePlaylist;
