import { Pressable, View } from "react-native";
import ImagemComponent from "../ImagemComponent";
import * as Styled from "../../styles/styled-components";
import { Dimencoes } from "../../styles/dimencoes";
import { colors } from "../../styles/colors";

const Playlists = ({ playlists, navigation }) => {
  if (playlists?.items?.length > 0) {
    return playlists.items.map((item) => (
      <Pressable
        onPress={() => {
          navigation.navigate("playlist", {
            navigation: navigation,
            image: item.images[0].url,
            title: item.name,
            href: item?.tracks?.href,
            externalUrl: item?.external_urls?.spotify,
          });
        }}
        style={{
          minHeight: 220,
          width: 200,
          padding: 13,
          borderRadius: Dimencoes.borderRadius,
          backgroundColor: colors.blur.primary,
        }}
      >
        <View
          style={{
            marginBottom: 5,
            height: 170,
          }}
        >
          <ImagemComponent url={item?.images[0]?.url} />
        </View>
        <View style={{ width: 140}}>
          <Styled.TextDefault
            style={{
              fontWeight: "bold",
            }}
          >
            {item?.name}
          </Styled.TextDefault>
          <Styled.SubText
            style={{
              color: colors.complement.tertiary,
            }}
          >
            {item?.owner?.display_name}
          </Styled.SubText>
        </View>
      </Pressable>
    ));
  } else {
    return (
      <View>
        <Styled.TextDefault>Nenhuma playlist cadastrada.</Styled.TextDefault>
      </View>
    );
  }
};
export default Playlists;
