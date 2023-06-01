import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Separador,
  TitleText,
} from "../../styles/styled-components";
import AvatarComponent from "../../components/Avatar";
import ButtonBasic from "../../components/ButtonBasic";
import PlusInfor from "../../components/PlusInfor";
import { useEffect, useState } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { Requisicoes } from "../../services/requisições/req";
import { Linking } from "react-native";
import Loading from "../../components/loading";

const ProfileComponent = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [inforUser, setInforUser] = useState();

  const req = new Requisicoes();

  useEffect(() => {
    const load = async () => {
      const { data } = await req.informacoesUserSpotify();
      setInforUser(data);
      console.log(data);
    };
    load();
  }, []);

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
      <Provider>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: "10%",
              left: "80%",
            }}
          >
            <PlusInfor
              size={30}
              funcOnPress={() => {
                setVisibleModal(true);
              }}
            />
          </View>

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

          <Separador />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <ButtonBasic title="Playlist" funcOnPress={() => {}} />
            <ButtonBasic title="Seguidores" funcOnPress={() => {}} />
            <ButtonBasic title="Seguindo" funcOnPress={() => {}} />
          </View>
        </View>
        <View style={styles.SectionsDeDadosApp}>
          <TitleText> Playlists </TitleText>
        </View>
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
