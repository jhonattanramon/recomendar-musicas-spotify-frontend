import { Text, View } from "react-native";
import {
  Container,
  SectionCenter,
  Separador,
  TitleText,
} from "../../styles/styled-components";
import AvatarComponent from "../../components/Avatar";
import TextButton from "../../components/TextButton";
import ButtonBasic from "../../components/ButtonBasic";
import Infor from "./infor";
import axios from "axios";
import PlusInfor from "../../components/PlusInfor";
import { useState } from "react";
import { Modal, Portal, Provider } from "react-native-paper";

const ProfileComponent = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <Container>
      <SectionCenter>
        <Provider>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 0.5,
            }}
          >
            <View style={{ position: "relative", left: "50%" }}>
              <PlusInfor
                funcOnPress={() => {
                  setVisibleModal(!visibleModal);
                }}
              />
            </View>

            <Portal>
              <Modal
                visible={visibleModal}
                onDismiss={!visibleModal}
                contentContainerStyle={{
                  backgroundColor: "white",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Infor /> 
              </Modal>
            </Portal>

            <AvatarComponent />
            <TitleText>JHON</TitleText>

            <Separador />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ButtonBasic title="Playlist" funcOnPress={() => {}} />
              <ButtonBasic title="Seguidores" funcOnPress={() => {}} />
              <ButtonBasic title="Seguindo" funcOnPress={() => {}} />
            </View>
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <TitleText> Playlist </TitleText>
          </View>
        </Provider>
      </SectionCenter>
    </Container>
  );
};

export default ProfileComponent;
