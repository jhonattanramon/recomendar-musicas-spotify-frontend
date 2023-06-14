import { View, StyleSheet, Text, Button, Modal } from "react-native";
import {
  Section,
  Container,
  TitleText,
} from "../../../styles/styled-components";
import Input_Component from "../../../components/InputComponent";
import ButtonBasic from "../../../components/ButtonBasic";
import { useState } from "react/cjs/react.production.min";
const NomePlaylist = ({ navigation, modalActive }) => {
  const [modalActive, setmodalActive] = useState(false);

  return (
    <Modal visible={modalActive}>
      <Container>
        <Section>
          <View style={{ margin: 10 }}>
            <TitleText> Dê um nome á sua playlist </TitleText>
            <Input_Component style={styles.input} />
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

              <ButtonBasic funcOnPress={() => {}} title="Avançar" />
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
