import { View, Text, StyleSheet, Pressable } from "react-native";
import { ViewImageTrack } from "../styles/styled-components";
import ImagemComponent from "./Imagem";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";

const Track = ({
  item,
  id,
  imagem,
  titulo,
  album,
  artista,
  tempoDeReproducao,
  navigation,
}) => {
  const [tempoRep, setTempoRep] = useState(0);

  const navigationTrack = (urlTrack) => {
    navigation.navigate("track", {
      url: urlTrack,
    });
  };

  useEffect(() => {
    setTempoRep(
      ((tempoDeReproducao / 60000) % 60).toFixed(2).replace(".", ":")
    );
  }, []);

  return (
    <View key={id} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 100,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "90%",
          }}
        >
          <ViewImageTrack>
            <ImagemComponent url={imagem} />
          </ViewImageTrack>
        </View>

        <View style={styles.viewText}>
          <Pressable
            onPress={() => {
              navigationTrack(item.track.href);
            }}
          >
            <Text style={styles.textTitulo}>{titulo}</Text>
          </Pressable>
        </View>

        <View style={styles.viewText}>
          <Text style={styles.text}>{album}</Text>
        </View>

        <View style={styles.viewText}>
          <Text style={styles.text}>
            {artista.map(({ name }) => (
              <Text>
                {name}
                {"\n"}
              </Text>
            ))}
          </Text>
        </View>

        <View style={styles.viewText}>
          <Text style={styles.text}>{tempoRep}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blur.primary,
    padding: 5,
    borderRadius: 3,
  },

  text: {
    color: colors.complement.secondary,
    //fontSize: "70%",
    fontSize: 10,
    textTransform: "capitalize",
    textAlignVertical: "center",
    textAlign: "center",
  },
  viewText: {
    flex: 1,
    flexWrap: "wrap",
    padding: 2,
  },
  textTitulo: {
    color: colors.complement.secondary,
    fontSize: 10,
    // fontSize: "69%",
    fontWeight: "bold",
  },
});

export default Track;
