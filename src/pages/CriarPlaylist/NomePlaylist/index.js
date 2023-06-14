import { View, StyleSheet, Text, Button, Modal, Alert } from "react-native";
import {
  Section,
  Container,
  TitleText,
} from "../../../styles/styled-components";
import Input_Component from "../../../components/InputComponent";
import ButtonBasic from "../../../components/ButtonBasic";
import { useState } from "react";

const NomePlaylist = ({ navigation }) => {
  const [nomePlaylist, setNomePlaylist] = useState("");
  const [modalActive, setmodalActive] = useState(false);

  return (
    <Modal>
      <Container>
        <Section>
          <View style={{ margin: 10 }}>
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
            >
              <ButtonBasic
                funcOnPress={() => {
                  navigation.goBack();
                }}
                title="Cancelar"
              />

              <ButtonBasic
                funcOnPress={() => {
                  if (nomePlaylist !== "") {
                    navigation.navigate("addMusicas");
                  } else {
                    Alert.alert("de um nome a sua Playlist");
                  }
                }}
                title="Avançar"
              />
            </View>
          </View>
        </Section>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "none",
  },
});

export default NomePlaylist;
