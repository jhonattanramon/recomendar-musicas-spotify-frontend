import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import {
  Container,
  SectionCenter,
  Square,
  Card,
} from "../styles/styled-components";
import ImagemComponent from "../components/Imagem";
import { colors } from "../styles/colors";
import { fontStyleds } from "../styles/fonts";
import TextButton from "../components/TextButton";

const PlaylistCard = ({ url, titulo , descricao }) => {
  console.log(url);
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
          <Pressable onPress={ () => {

          }}>
            <Text style={ styles.titulo}>{titulo}</Text>  
          </Pressable> 
          <Text style={fontStyleds.subsFont}>{descricao}</Text>
        </View>
      </Square>
    </Card>
  );
};


const styles = StyleSheet.create({
    titulo:{
      color: colors.complement.secondary,
      fontWeight: "bold",
      
    }
    
})
export default PlaylistCard;
