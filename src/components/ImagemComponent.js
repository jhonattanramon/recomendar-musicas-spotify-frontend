import { Image } from "react-native";
import * as Styled from "../styles/styled-components";
const ImagemComponent = ({
   url = "https://i.pinimg.com/564x/08/54/fd/0854fde5bae64e078a68d37b9afec716.jpg",
 width,
 height }) => {

  return (
    <Styled.Square>
      <Image
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        resizeMode="cover"
        objectFit="contain"
        source={{ uri: url }}
      />
    </Styled.Square>
  );
};

export default ImagemComponent;
