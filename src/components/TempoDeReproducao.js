import { Text } from "react-native";

const TempoDeReproducao = (tempoMs) => {
  const tempo = ((tempoMs / 60000) % 60).toFixed(2).replace(".", ":");
  return <Text> {tempo} </Text>;
};
export default TempoDeReproducao;
