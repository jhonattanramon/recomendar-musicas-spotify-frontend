import { View, Text, Image, ImageComponent } from "react-native";
import { Container } from "../../styles/styled-components";
import { TitleText } from "../../styles/styled-components";

import ImagemComponent from "../../components/Imagem";

const Playlist = ({ url, titulo, route }) => {
  console.log(route.params.data);

  return (
    <Container>
      <View style={{flex: 1,  backgroundColor:'red'}}>
        <View style={{  width: 300, height: 300 }}>
          <ImagemComponent url={route.params.data.url} />
        </View>

        <View>
          <TitleText>{route.params.data.titulo}</TitleText>
        </View>
      </View>
    </Container>
  );
};

export default Playlist;
