import { Title } from "react-native-paper";
import { colors } from "../styles/colors";
import { Section, TitleText, SubText } from "../styles/styled-components";
import { View, StyleSheet, Text, FlatList } from "react-native";
import PlaylistCard from "./playlists";

const TopPlaylist = ({ array }) => {

  console.log(array);
  return (
    <View style={styles.container}>
      <View style={{ padding: 3 }}>
        <SubText> Top Playlist</SubText>
      </View>
      <View style={styles.backgroundCard}>
        <FlatList
          horizontal={true}
          data={array}
          renderItem={({ item, index, separators }) => (
            <PlaylistCard titulo={item.name} url={item.images[0].url} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    margin: 10,
    borderRadius: 3,
  },

  backgroundCard: {
    backgroundColor: `${colors.blur.primary}`,
    flex: 1,
    padding: 7,
  },
});

export default TopPlaylist;
