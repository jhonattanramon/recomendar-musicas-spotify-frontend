import { Container } from "../../styles/styled-components";
import Button_Component from "../../components/ButtonComponent";
import axios from "axios";
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";

const Teste = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const windowDimensions = Dimensions.get("window");
  const screenDimensions = Dimensions.get("screen");

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  console.log(dimensions);

  return (
    <Container>
      <Button_Component
        title="teste1"
        funcOnPress={async () => {
          await axios.get("https://appnative-backend.onrender.com/login");
        }}
      />
      <Button_Component
        title="teste2"
        funcOnPress={async () => {
          await axios
            .get("http://localhost:3001/apispotify/playlistsEmDestaque")
            .then((res) => console.log(res));
        }}
      />
      <Button_Component
        title="teste3"
        funcOnPress={() => {
          navigation.navigate("home");
        }}
      />

      <Button_Component
        title="teste4"
        funcOnPress={async () => {
          await axios
            .get("https://appnative-backend.onrender.com/api/users")
            .then((res) => console.log(res));
        }}
      />
    </Container>
  );
};

export default Teste;
