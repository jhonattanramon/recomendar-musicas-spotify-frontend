import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Requisicoes } from "../../services/requisições/req";
import { colors } from "../../styles/colors";
import { Dimencoes } from "../../styles/dimencoes";
import ButtonIcon from "../../components/ButtonIconComponent";
import * as Styled from "../../styles/styled-components";
import { Button } from "../../components/ButtonComponent";
import * as StyledComp from "./style";
import { Avatar } from "../../components/AvatarComponent";

export default function ProfileComponent  ({ navigation })  {
  const [inforUser, setInforUser] = useState({});
  console.log("infor", inforUser);
  const req = new Requisicoes();
  useEffect(() => {
    (async () => {
      const { data: userinfor } = await req.informacoesUserSpotify();
      setInforUser(userinfor);
    })();
  }, []);

  return (
    <Styled.Container>
      <Styled.ScrollContainer>
        <View style={{ 
              position: "absolute",
              right: "2%",
              top: "0.2%",
              zIndex: 1,
            }}>
          <Button.Icon
            
            icon="settings-outline"
            size={35}
            color={colors.complement.secondary}
            onPress={() => {
              navigation.navigate("settings");
            }}
          />
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar.Root>
            <Avatar.Image />
          </Avatar.Root>

          <Styled.TitleText>{inforUser.display_name}</Styled.TitleText>
          <Styled.SeparadorVertical />
        </View>

        <Styled.SeparadorVertical />

        <StyledComp.ContainerTitle>
          <StyledComp.Title>Informações da conta</StyledComp.Title>
        </StyledComp.ContainerTitle>

        <StyledComp.ContainerContent>
          <StyledComp.ViewContent>
            <Styled.SubText>Nome:</Styled.SubText>
            <StyledComp.TextContent>
              {inforUser.display_name}
            </StyledComp.TextContent>
          </StyledComp.ViewContent>

          <StyledComp.ViewContent>
            <Styled.SubText>Email:</Styled.SubText>
            <StyledComp.TextContent>{inforUser.email}</StyledComp.TextContent>
          </StyledComp.ViewContent>

          <StyledComp.ViewContent>
            <Styled.SubText>URL Spotify:</Styled.SubText>
            <Pressable onPress={() => Linking.openURL(external_urls.spotify)}>
              <StyledComp.TextLink>
                {inforUser.external_urls?.spotify}
              </StyledComp.TextLink>
            </Pressable>
          </StyledComp.ViewContent>

          <StyledComp.ViewContent>
            <Styled.SubText>Seguidores:</Styled.SubText>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Button.Icon
                color={colors.complement.secondary}
                icon={"people-sharp"}
              />
              <StyledComp.TextContent>
                {inforUser.followers?.total}
              </StyledComp.TextContent>
            </View>
          </StyledComp.ViewContent>

          <StyledComp.ViewContent>
            <Styled.SubText>ID Conta Spotify:</Styled.SubText>
            <StyledComp.TextContent>{inforUser.id}</StyledComp.TextContent>
          </StyledComp.ViewContent>

          <StyledComp.ViewContent>
            <Styled.SubText>Tipo de Conta:</Styled.SubText>
            <StyledComp.TextContent>{inforUser.product}</StyledComp.TextContent>
          </StyledComp.ViewContent>
        </StyledComp.ContainerContent>
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

