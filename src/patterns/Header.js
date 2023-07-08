import { View, StyleSheet, Text, Pressable } from "react-native";
import ButtonIcon from "../components/ButtonIconComponent";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";
import { Button } from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const Header = ({  styleText = styles.text, title }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.section}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Button.Icon 
          onPress={() => navigation.goBack()}
          icon={"arrow-back-outline"}
          color={colors.complement.secondary}
          size={32}
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
