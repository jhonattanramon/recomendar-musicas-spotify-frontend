import { useEffect, useState } from "react";
import * as Styled from "../../styles/styled-components";
import * as StyledComp from "./style";
import { Requisicoes } from "../../services/requisições/req";
import Playlists from "../../components/PlaylistComponent";
import { Button } from "../../components/ButtonComponent";
import { View } from "react-native";
import { colors } from "../../styles/colors";
import Header from "../../patterns/Header";

export default function Biblioteca({navigation}) {
  const [playlistsUser, setPlaylistsUser] = useState();
  useEffect(() => {
    (async () => {
      const req = new Requisicoes();
      const { data: Playlists } = await req.playlistUser();
      setPlaylistsUser(Playlists);
    })();
  }, []);
  return (
    <Styled.Container>
      <Styled.ScrollContainer>
        <Header stateIconBack={false} title={"Biblioteca"}/>
        <StyledComp.FieldPlaylist>
          <Playlists playlists={playlistsUser} navigation={navigation} />
        </StyledComp.FieldPlaylist>
      </Styled.ScrollContainer>
    </Styled.Container>
  );
}
