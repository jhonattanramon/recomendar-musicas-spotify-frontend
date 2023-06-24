import { Image } from "react-native";
import { Avatar } from "react-native-paper";
import { Square } from "../styles/styled-components";
const ImagemComponent = ({
   url = "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
 width,
 height }) => {

  return (
    <Square>
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
    </Square>
  );
};

export default ImagemComponent;
