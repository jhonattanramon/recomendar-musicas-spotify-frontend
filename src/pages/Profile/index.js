import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import {
  Card,
  Container,
  Section,
  Separador,
  SeparadorVertical,
  TextDefault,
  TitleText,
  SubText,
} from "../../styles/styled-components";
import AvatarComponent from "../../components/Avatar";
import ButtonBasic from "../../components/ButtonBasic";
import PlusInfor from "../../components/PlusInfor";
import { useEffect, useState } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { Requisicoes } from "../../services/requisições/req";
import { Linking } from "react-native";
import Loading from "../../components/loading";
import ImagemComponent from "../../components/Imagem";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import Header from "../../patterns/Header";

const ProfileComponent = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [inforUser, setInforUser] = useState({});
  const [playlistsUser, setPlaylistsUser] = useState([]);

  console.log(playlistsUser, inforUser);
  console.log(playlistsUser);

  const req = new Requisicoes();

  useEffect(() => {
    (async () => {
      const { data: userPlaylist } = await req.playlistUser();
      setPlaylistsUser(userPlaylist);

      const { data: userinfor } = await req.informacoesUserSpotify();
      setInforUser(userinfor);
    })();
  }, []);

  const Playlists = () => {
    if (playlistsUser?.items?.length > 0) {
      return (
        <FlatList
          style={{ flex: 1 }}
          numColumns={2}
          data={playlistsUser.items}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate(item.type, {
                  data: item,
                  href: item.tracks.href,
                  navigation: navigation,
                });
              }}
              style={{
                height: 270,
                width: 220,
                margin: 10,
                padding: 13,
                backgroundColor: colors.blur.primary,
                borderRadius: Dimencoes.borderRadius,
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
                <TextDefault>{item.name}</TextDefault>
                <SubText>{item.owner.display_name}</SubText>
              </View>
            </Pressable>
          )}
        />
      );
    } else {
      return (
        <View>
          <TextDefault>Nenhuma playlist cadastrada.</TextDefault>
        </View>
      );
    }
  };

  const InforComponent = () => {
    return (
      <>
        <TitleText style={{ color: "black" }}>Informações Spotify</TitleText>
        <View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Nome:</Text>
            <Text>{inforUser.display_name}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Id:</Text>
            <Text>{inforUser.id}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Email:</Text>
            <Text>{inforUser.email}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Assinatura:</Text>
            <Text>{inforUser.product}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Link:</Text>
            <Text
              onPress={() => {
                Linking.openURL(`${inforUser.external_urls.spotify}`);
              }}
              style={{ textDecorationLine: "underline" }}
            >
              {inforUser.external_urls.spotify}
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <Container>
      <Header 
      navigation={navigation} />
      <Provider>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
       

          <Portal children={Modal}>
            <Modal
              visible={visibleModal}
              onDismiss={() => setVisibleModal(false)}
              contentContainerStyle={{
                backgroundColor: "white",
                alignItems: "center",
                width: "100%",
                height: 400,
              }}
            >
              {inforUser != undefined ? <InforComponent /> : <Loading />}
            </Modal>
          </Portal>

          <AvatarComponent />
          <TitleText>JHON</TitleText>

          <SeparadorVertical />
          <View>
            <ButtonBasic
              funcOnPress={() => {
                setVisibleModal(true);
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
              alignItems: "center",
            }}
          >
            <Playlists />
          </View>
        </Section>
      </Provider>
    </Container>
  );
};

const styles = StyleSheet.create({
  SectionsDeDadosApp: {
    flex: 1,
    alignItems: "center",
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
