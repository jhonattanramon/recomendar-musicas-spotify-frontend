import { StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "../../styles/colors";
import { Container, Section, TitleText } from "../../styles/styled-components";
import Input_Component from "../../components/InputComponent";
import { Requisicoes } from "../../services/requisições/req";
import { useEffect, useState } from "react";

const CriarPlaylist = () => {
  const [generos, setGeneros] = useState();
  const [nameTracker, setNameTracker] = useState("");

  useEffect(() => {
    (async () => {
      const req = new Requisicoes();
      const { data } = await req.getGeneros();
      console.log(data);
      setGeneros(data);
    })();
  }, []);

  const reqMusica = async (nameTracker) => {
    const req = new Requisicoes();
    const tracks = await req.pesquisaTrack(nameTracker);
    console.log(tracks);
  };

  return (
    <Container>
      <View style={styles.center}>
        <TitleText>CRIE SUA PLAYLIST</TitleText>
      </View>
      <Section>
        <Input_Component
          style={{
            backgroundColor: "none",
            flex: 2,
          }}
          onChange={(text) => {
            setNameTracker(text);
            setTimeout(() => reqMusica(text), 1000);
          }}
        />
      </Section>

      <Section>
        <Text> teste </Text>
      </Section>
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
