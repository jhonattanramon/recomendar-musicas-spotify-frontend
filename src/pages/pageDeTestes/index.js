import { Container } from "../../styles/styled-components";
import Button_Component from "../../components/ButtonComponent";
import axios from "axios";
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";

const Teste = ({ navigation }) => {

  return (
    <Container>
      <Button_Component
        title="teste1"
        funcOnPress={async () => {
          await axios.get("http://localhost:3004/apispotify/criarplaylist");
        }}
/>
    </Container>
  );
};

export default Teste;
