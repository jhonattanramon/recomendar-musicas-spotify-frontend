import { Pressable, Text, StyleSheet } from "react-native"
import { colors } from "../styles/colors"
import { Dimencoes } from "../styles/dimencoes";

const TextButton = ({ onPressFunc, title, style }) => {
  return (
    <Pressable onPress={onPressFunc}>
      <Text style={styles.Text}> {title} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: Dimencoes.fontSize,
  },
});

export default TextButton