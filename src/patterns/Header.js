import { View, StyleSheet, Text } from "react-native";
import { Section } from "../styles/styled-components";
import ButtonIcon from "../components/ButtonIcon";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";

const Header = ({ navigation, styleText = styles.text, title }) => {
  return (
    <Section style={styles.section}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <ButtonIcon
          onFunc={() => navigation.goBack()}
          icon="arrow-left"
          color={colors.complement.secondary}
        />
        <Text style={styleText}>{title}</Text>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.complement.secondary,
    fontSize: Dimencoes.fontSize,
  },
  section: {
    borderBottomColor: colors.complement.secondary,
    borderWidth: 1.5,
    marginBottom: 17
  },
});
export default Header;
