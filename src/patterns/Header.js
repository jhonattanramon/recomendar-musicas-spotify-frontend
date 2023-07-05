import { View, StyleSheet, Text, Pressable } from "react-native";
import ButtonIcon from "../components/ButtonIconComponent";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";

const Header = ({ navigation, styleText = styles.text, title }) => {
  console.log(navigation);
  return (
    <View style={styles.section}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <ButtonIcon
          onPress={() => navigation.goBack()}
          icon="arrow-left"
          color={colors.complement.secondary}
        />
        <Text style={styleText}>{title}</Text>
      </View>
    </View>
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
