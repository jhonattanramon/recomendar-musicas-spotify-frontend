import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import * as Styled from "../styles/styled-components";
import ImagemComponent from "./ImagemComponent";
import { colors } from "../styles/colors";

const ListCard = ({ navigation, title, externalUrl, href, image }) => {

  return (
    <Styled.Card>
      <Pressable
        style={{
          flex: 1,
          width: "100%",
        }}
        onPress={() => {
          navigation.navigate("playlist", {
            href: href,
            navigation: navigation,
            image: image,
            title: title,
            externalUrl: externalUrl,

          });
        }}
    >
        <Styled.Square>
          <View style={{ flex: 2, padding: 7 }}>
            <ImagemComponent url={image} />
          </View>

          <View
            style={{
              padding: 7,
              flex: 1,
            }}
          >
            <Text style={styles.titulo}>{title}</Text>
          </View>
        </Styled.Square>
      </Pressable>
    </Styled.Card>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: colors.complement.secondary,
    fontWeight: "bold",
  },
});
export default ListCard;
