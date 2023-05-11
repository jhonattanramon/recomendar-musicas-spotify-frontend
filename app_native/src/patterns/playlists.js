import { View, Image, Text } from "react-native";
import {
  Container,
  SectionCenter,
  Square,
  Card,
} from "../styles/styled-components";
import ImagemComponent from "../components/Imagem";
import { colors } from "../styles/colors";
import { fontStyleds } from "../styles/fonts";

const PlaylistCard = ({ url}) => {
  return (
    <Card>
      <Square>
        <View style={{ flex: 2, padding: 7,  }}>
          <ImagemComponent url={url} />
        </View>

        <View
          style={{
            padding: 7,
            flex: 1,
          }}
        >
          <Text style={fontStyleds.fontDefault}>#primeira playlist</Text>
          <Text style={fontStyleds.subsFont}>decrição</Text>
        </View>
      </Square>
    </Card>
  );
};

export default PlaylistCard;
