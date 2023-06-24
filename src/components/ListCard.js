import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import {
  Container,
  SectionCenter,
  Square,
  Card,
} from "../styles/styled-components";
import ImagemComponent from "./Imagem";
import { colors } from "../styles/colors";
import { fontStyleds } from "../styles/fonts";

const ListCard = (props) => {
  console.log(props);
  return (
    <Card>
      <Pressable
        style={{
          flex: 1,
          width: "100%",
        }}
        onPress={() => {
          props.navigation.navigate("playlist", {
            data: props,
            href: props.href,
            navigation: props.navigation

          });
        }}
    >
        <Square>
          <View style={{ flex: 2, padding: 7 }}>
            <ImagemComponent url={props.url} />
          </View>

          <View
            style={{
              padding: 7,
              flex: 1,
            }}
          >
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={fontStyleds.subsFont}>{props.descricao}</Text>
          </View>
        </Square>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: colors.complement.secondary,
    fontWeight: "bold",
  },
});
export default ListCard;
