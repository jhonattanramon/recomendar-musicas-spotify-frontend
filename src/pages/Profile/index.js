  import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
  import {
    Container,
    Section,
    SeparadorVertical,
    TextDefault,
    TitleText,
    SubText,
    ScrollContainer,
  } from "../../styles/styled-components";
  import AvatarComponent from "../../components/AvatarComponet";
  import ButtonBasic from "../../components/ButtonBasicComponent";
  import { useEffect, useState } from "react";
  import { Requisicoes } from "../../services/requisições/req";
  import ImagemComponent from "../../components/ImagemComponent";
  import { colors } from "../../styles/colors";
  import { Dimencoes } from "../../styles/dimencoes";
  import InforComponent from "../../components/InforComponent";
  import ButtonIcon from "../../components/ButtonIconComponent";

  const ProfileComponent = ({ navigation }) => {
    const [inforUser, setInforUser] = useState({});
    const [playlistsUser, setPlaylistsUser] = useState([]);
    const [visibiliteinfor, setVisibiliteInfor] = useState(false);

    console.log(inforUser);

    const req = new Requisicoes();

    useEffect(() => {
      (async () => {
        const { data: userPlaylist } = await req.playlistUser();
        setPlaylistsUser(userPlaylist);

        const { data: userinfor } = await req.informacoesUserSpotify();
        console.log(userinfor);
        setInforUser(userinfor);
      })();
    }, []);

    const Playlists = () => {
      if (playlistsUser?.items?.length > 0) {
        return playlistsUser.items.map((item) => (
          <Pressable
            onPress={() => {
              navigation.navigate(item.type, {
                href: item.tracks.href,
                navigation: navigation,
                image: item.images[0].url,
                title: item.name,
                externalUrl: item.external_urls.spotify
              });
            }}
            style={{
              height: 270,
              width: 200,
              margin: 10,
              padding: 13,
              borderRadius: Dimencoes.borderRadius,
              backgroundColor: colors.blur.primary
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <ImagemComponent url={item?.images[0]?.url} />
            </View>
            <View>
              <TextDefault
                style={{
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </TextDefault>
              <SubText
                style={{
                  color: colors.complement.tertiary,
                }}
              >
                {item.owner.display_name}
              </SubText>
            </View>
          </Pressable>
        ));
      } else {
        return (
          <View>
            <TextDefault>Nenhuma playlist cadastrada.</TextDefault>
          </View>
        );
      }
    };

    return (
      <Container>
        <ScrollContainer>
            <ButtonIcon 
            styleBackground={{ 
              borderRadius: Dimencoes.borderRadius,
              position: "absolute",
              right: "2%",
              top: "0.2%",
              zIndex: 1
            }}
            icon="cog"
            size={35}
            color={colors.complement.secondary}
            onPress={ () =>{ navigation.navigate("settings")}}

            />  
          
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AvatarComponent />
            <TitleText>JHON</TitleText>

            <SeparadorVertical />
            <View>
              <ButtonBasic
                funcOnPress={() => {
                  setVisibiliteInfor(true);
                }}
                title={"Informações"}
              />
            </View>
            <SeparadorVertical />
          </View>

          <Section style={styles.SectionsDeDadosApp}>
            <View>
              <TitleText> Playlists </TitleText>
            </View>
            <View
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Playlists />
            </View>
          </Section>
          <View
            style={{
              flex: 1,
              width: 400,
            }}
          >
            <InforComponent
              visibiliteInfor={visibiliteinfor}
              inforUser={inforUser}
            />
          </View>
        </ScrollContainer>
      </Container>
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
