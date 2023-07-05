import { Pressable, View } from "react-native";
import ImagemComponent from "../ImagemComponent";
import * as Styled from "../../styles/styled-components";
import { Dimencoes } from "../../styles/dimencoes";
import { colors } from "../../styles/colors";

const Playlists = ({ playlists }) => {
  console.log(playlists);
  if (playlists?.items?.length > 0) {
    return playlists.items.map((item) => (
      <Pressable
        onPress={() => {
          navigation.navigate(item.type, {
            href: item.tracks.href,
            navigation: navigation,
            image: item.images[0].url,
            title: item.name,
            externalUrl: item.external_urls.spotify,
          });
        }}
        style={{
          height: 270,
          width: 200,
          margin: 10,
          padding: 13,
          borderRadius: Dimencoes.borderRadius,
          backgroundColor: colors.blur.primary,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <ImagemComponent url={item?.images[0]?.url} />
        </View>
        <View>
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
