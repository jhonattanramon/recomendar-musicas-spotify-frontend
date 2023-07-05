import { View, Text, StyleSheet, Pressable } from "react-native";
import * as Styled from "../styles/styled-components";
import ImagemComponent from "./ImagemComponent";
import { colors } from "../styles/colors";
import { useEffect, useState } from "react";
import ButtonIcon from "./ButtonIconComponent";

const Track = ({
  item,
  id,
  imagem,
  titulo,
  album,
  artista,
  tempoDeReproducao,
  navigation,
  href,
  external_url
}) => {
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
          <Styled.ViewImageTrack>
            <ImagemComponent url={imagem} />
          </Styled.ViewImageTrack>
        </View>

        <View style={styles.viewText}>
          <Pressable
            onPress={() => {
              navigation.navigate("track", {
                href: href,
                external_url: external_url
              });
            }}
          >
            <Text style={styles.textTitulo}>{titulo}</Text>
          </Pressable>
        </View>
        <View style={styles.viewText}>
            {artista.map(({ name }) => (
              <Text style={styles.subText}>
                {name}
                {"\n"}
              </Text>
            ))}
          
        </View>

        <View style={styles.viewText}>
          <Text style={styles.subText}>{album}</Text>
        </View>


        <View style={styles.viewText}>
          <Text style={styles.text}>{ ((tempoDeReproducao / 60000) % 60).toFixed(2).replace(".", ":")}</Text>
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
    marginVertical:7,
    marginHorizontal:5
  },

  text: {
    color: colors.complement.secondary,
    fontSize: 12,
    textTransform: "capitalize",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent:"center"
  },

  subText:{
    color: colors.complement.tertiary,
    fontSize: 12,
    textTransform: "capitalize",
    textAlignVertical: "center",
    textAlign: "center",
  },
  viewText: {
    flex: 1,
    overflow: "hidden",
    alignItems:"center"

    
  },
  textTitulo: {
    color: colors.complement.secondary,
    fontSize: 14,
    fontWeight: "bold",
  },

});

export default Track;
