import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AvatarComponent from "../../components/AvatarComponet";
import ButtonBasic from "../../components/ButtonBasicComponent";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../services/requisições/req";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import ButtonIcon from "../../components/ButtonIconComponent";
import Playlists from "../../components/PlaylistComponent";
import * as Styled from "../../styles/styled-components";
import {
  FieldPlaylist,
  ContainerPlaylist,
  TextContainer,
  ViewPlaylist,
  ViewButtonIndicatorPlaylist,
  ViewIndicatorPlaylist,
} from "./style";
import Badge from "../../components/BadgeComponent";
import IndicatorSlide from "../../components/IndicatorSlider";

const ProfileComponent = ({ navigation }) => {
  const [inforUser, setInforUser] = useState({});
  const [playlistsSPF, setPlaylistsSPF] = useState([]);
  const [playlistsAPP, setPlaylistsAPP] = useState([]);
  const [visibiliteinfor, setVisibiliteInfor] = useState(false);
  const [activeViewFieldPlaylist, SetactiveViewFieldPlaylist] = useState("APP");


  const req = new Requisicoes();

  useEffect(() => {
    (async () => {
      const { playlistsAPPreq, playlistsSPFreq } = {
        playlistsAPPreq: await req.playlistUserAPP(),
        playlistsSPFreq: await req.playlistUserSPF(),
      };
      setPlaylistsAPP(playlistsAPPreq.data);
      setPlaylistsSPF(playlistsSPFreq.data);

      const { data: userinfor } = await req.informacoesUserSpotify();

      setInforUser(userinfor);
    })();
  }, []);

  return (
    <Styled.Container>
      <Styled.ScrollContainer>
        <ButtonIcon
          styleBackground={{
            borderRadius: Dimencoes.borderRadius,
            position: "absolute",
            right: "2%",
            top: "0.2%",
            zIndex: 1,
          }}
          icon="cog"
          size={35}
          color={colors.complement.secondary}
          onPress={() => {
            navigation.navigate("settings");
          }}
        />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AvatarComponent />
          <Styled.TitleText>JHON</Styled.TitleText>

          <Styled.SeparadorVertical />
          <View>
            <ButtonBasic
              funcOnPress={() => {
                setVisibiliteInfor(true);
              }}
              title={"Informações"}
            />
          </View>
        </View>

        <Styled.SeparadorVertical />
        <ViewButtonIndicatorPlaylist>
          <Pressable
            onPress={() => SetactiveViewFieldPlaylist("APP")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            {activeViewFieldPlaylist == "APP" ? <Badge /> : <Text> </Text>}
            <TextContainer>Playlists</TextContainer>
          </Pressable>

          <Pressable
            onPress={() => SetactiveViewFieldPlaylist("SPOTIFY")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            {activeViewFieldPlaylist == "SPOTIFY" ? <Badge /> : <Text> </Text>}
            <TextContainer>Spotify Playlist</TextContainer>
          </Pressable>
        </ViewButtonIndicatorPlaylist>

        <FieldPlaylist>
          <Pressable
            on
          >
            {activeViewFieldPlaylist == "APP" ? (
              <ContainerPlaylist>
                <ViewPlaylist>
                  <Playlists 
                  playlists={playlistsAPP}
                  navigation={navigation}
                   />
                </ViewPlaylist>
              </ContainerPlaylist>
            ) : (
              <ContainerPlaylist>
                <ViewPlaylist>
                  <Playlists playlists={playlistsSPF} />
                </ViewPlaylist>
              </ContainerPlaylist>
            )}
          </Pressable>
        </FieldPlaylist>
      </Styled.ScrollContainer>
    </Styled.Container>
  );
};

const styles = StyleSheet.create({
  SectionsDeDadosApp: {
    flex: 1,
    alignItems: "flex-start",
  },
  fontBold: {
    fontWeight: "bold",
  },
  line: {
    flexDirection: "row",
    gap: 2,
  },
});

export default ProfileComponent;
