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
import TextButton from "./TextButton";

const PlaylistCard = (props) => {
  
  return (
    <Card>
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
          <Pressable
            onPress={() => {
              props.navigation.navigate("playlist", {
                data: props,
              });
            }}
          >
            <Text style={styles.titulo}>{props.titulo}</Text>
          </Pressable>
          <Text style={fontStyleds.subsFont}>{props.descricao}</Text>
        </View>
      </Square>
    </Card>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: colors.complement.secondary,
    fontWeight: "bold",
  },
});
export default PlaylistCard;
