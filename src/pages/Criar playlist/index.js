import { StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "../../styles/colors";
import { Container, Section, TitleText } from "../../styles/styled-components";
import Input_Component from "../../components/InputComponent";
import { Requisicoes } from "../../services/requisições/req";
import { useEffect, useState } from "react";

const CriarPlaylist = () => {
  const [generos, setGeneros] = useState();
  const [nameTracker, setNameTracker] = useState("");

  console.log(nameTracker);
  console.log(generos);
  const req = new Requisicoes();

  useEffect(() => {
    const load = async () => {
      const { data } = await req.getGeneros();
      console.log(data);
      setGeneros(data);
    };
    load();
  }, []);

  // const reqMusica = async () => {
  //   const tracks = await req.pesquisa();
  // };

  const AddMusicas = () => {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Section style={{ flexDirection: "row", padding: 7 }}>
          <Input_Component
            style={{
              backgroundColor: "none",
              flex: 2,
            }}
            onChange={(text) => setNameTracker(text)}
          />
        </Section>
      </View>
    );
  };

  return (
    <Container>
      <View style={styles.center}>
        <TitleText>CRIE SUA PLAYLIST</TitleText>
      </View>
      <Section>
        <AddMusicas />
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
