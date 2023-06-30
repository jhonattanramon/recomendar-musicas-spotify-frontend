import { Text } from "react-native";

const TempoDeReproducao = ({ tempoMs }) => {
  return <Text style={{ color: "white" }}> { ((tempoMs / 60000) % 60).toFixed(2).replace(".", ":") } </Text>;
};
export default TempoDeReproducao;
