import { colors } from "../styles/colors";
import { Section, TitleText, SubText } from "../styles/styled-components";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ListCard from "../components/ListCard";
import Loading from "../components/loading";

const CampoDeDados = ({ array, navigation, title }) => {
  if (array.length > 0) {
    return (
      <View style={styles.container}>
        <View style={{ padding: 3 }}>
          <SubText>{title}</SubText>
        </View>
        <View style={styles.backgroundCard}>
          <FlatList
            horizontal={true}
            data={array}
            renderItem={({ item, index, separators }) => (
              <ListCard
                navigation={navigation}
                titulo={item.name}
                url={item.images[0].url}
                item={item}
              />
            )}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={{ padding: 3 }}>
          <SubText>{title}</SubText>
        </View>
        <View style={styles.backgroundCard}>
          <Loading />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    margin: 10,
  },

  backgroundCard: {
    backgroundColor: `${colors.blur.primary}`,
    flex: 1,
    padding: 7,
  },
});

export default CampoDeDados;
