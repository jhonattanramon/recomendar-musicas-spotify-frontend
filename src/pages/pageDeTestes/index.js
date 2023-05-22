import PlaylistCard from "../../components/CardPlaylists";
import { Container } from "../../styles/styled-components";
import Button_Component from "../../components/ButtonComponent";
import Track from "../../components/Track";
import { Button } from "react-native-paper";
import axios from "axios";

const Teste = ({ navigation }) => {
  return (
    <Container>
      <Button_Component
        title="teste1"
        funcOnPress={async () => {
          await axios.get(
            "https://appnative-backend.onrender.com/apispotify/obtergeneros"
          );
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
