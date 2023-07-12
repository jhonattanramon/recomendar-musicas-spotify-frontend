import { View, StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../styles/colors";
import { Dimencoes } from "../styles/dimencoes";
import { Button } from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const Header = ({  styleText = styles.text, title, stateIconBack }) => {
  const navigation = useNavigation()
  const [ StateIconBack, setStateIconBack ] = useState(true)

  useEffect( () => { if(stateIconBack !== undefined) setStateIconBack(stateIconBack)},[stateIconBack])

  if (!title) return null;
  return (
    <View style={styles.section}>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        
        { StateIconBack ? 
        <Button.Icon 
        onPress={() => navigation.goBack()}
        icon={"arrow-back-outline"}
        color={colors.complement.secondary}
        size={32}
        /> : <Text> </Text>
      }
        <Text style={styleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.complement.secondary,
    fontSize: Dimencoes.fontSize,
    fontWeight: 600
  },
  section: {
        paddingVertical: 10
  },
});
export default Header;
