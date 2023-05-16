import PlaylistCard from "../../patterns/playlists"
import { Container } from "../../styles/styled-components"
import Button_Component from "../../components/Button_Component";
import { Button } from "react-native-paper";
import axios from "axios";

const Teste = ({navigation}) => {

  return (
    <Container>
      <PlaylistCard url="https://i.scdn.co/image/ab67706f00000003fb5cdf879d33a0e46f1ce3d6" />
      <Button_Component
        title="teste1"
        funcOnPress={async () => {
          await axios.get("http://localhost:3001/apispotify/obtergeneros");
        }}
      />
      <Button_Component title="teste2"
            funcOnPress={  async() => {
                  await axios.get('http://localhost:3001/apispotify/playlistsEmDestaque').then(res => console.log(res))
            }}
      />
      <Button_Component 
      title="teste3" funcOnPress={ () => {
        navigation.navigate('home')      }} />
    </Container>
  );
}

export default Teste