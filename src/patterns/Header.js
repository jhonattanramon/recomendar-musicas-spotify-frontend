import { View, StyleSheet, Text, Pressable } from "react-native";
import { Section } from "../styles/styled-components";
import ButtonIcon from "../components/ButtonIconComponent";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";

const Header = ({ navigation, styleText = styles.text, title }) => {
  console.log(navigation);
  return (
    <Section style={styles.section}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <ButtonIcon
          onPress={() => navigation.goBack()}
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
        paddingVertical: 10
  },
});
export default Header;
