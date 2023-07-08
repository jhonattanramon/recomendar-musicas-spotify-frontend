import { View,Text, Modal } from "react-native"
import ButtonIcon from "../components/ButtonIconComponent";
import { Container } from "../styles/styled-components";
import { useEffect, useState } from "react";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";

const SuccessCreatePlaylist = ({setVisibiliteProp}) => {
    const [ visibilite, setVisibilite ] = useState(false)
    useEffect( () => {
      setVisibilite(setVisibiliteProp)
    },[setVisibiliteProp])

  return (
    <Modal
    visible={visibilite}
    >
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <View
          style={{
            width: 300,
            height: 300,
            borderRadius: 150,
            backgroundColor: colors.complement.secondary,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonIcon color={colors.primary} size={100} icon={"check-bold"} />
        </View>
        <View>
          <Text
            style={{
              color: colors.complement.secondary,
              textAlign: "center",
              fontSize: Dimencoes.fontSize,
            }}
          >
            Playlist Criada com Sucesso!
          </Text>
        </View>
      </Container>
    </Modal>
  );
};

export default SuccessCreatePlaylist;
