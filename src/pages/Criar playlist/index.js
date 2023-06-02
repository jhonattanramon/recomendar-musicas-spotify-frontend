import { View, TextInput } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import PesquisaComponent from "../../components/Pesquisa";
import { colors } from "../../styles/colors";
import { Container, TitleText } from "../../styles/styled-components";
import { StyleSheet } from "react-native";
import Input_Component from "../../components/InputComponent";

const CriarPlaylist = () => {
  const ButtonPlus = () => {
    return (
      <View style={styles.buttonPlus}>
        <ButtonIcon
          icon="plus"
          size={100}
          color={colors.complement.secondary}
          styleComp={styles.iconButton}
        />
      </View>
    );
  };

  const AddMusicas = () => {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flexDirection: "row", padding: 7 }}>
          <Input_Component
            style={{
              backgroundColor: "none",
              flex: 2,
            }}
            textColor={colors.complement.secondary}
          />

          <ButtonIcon
            icon="filter"
            color={colors.complement.secondary}
            styleComp={{ backgroundColor: colors.blur }}
            onFunc={() => {}}
          />
        </View>
      </View>
    );
  };

  return (
    <Container>
      <View style={styles.center}>
        <TitleText>CRIE SUA PLAYLIST</TitleText>
      </View>

      <AddMusicas />
    </Container>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: colors.blur.primary,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPlus: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
export default CriarPlaylist;
