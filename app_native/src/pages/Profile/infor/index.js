import axios from "axios";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { Container, TitleText } from "../../../styles/styled-components";

const Infor = () => {
  const [dataApi, setDataApi] = useState();
  console.log(dataApi);

  useEffect(() => {
    const load = async () => {
      await axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((data) => {
          console.log(data);
          setDataApi(data);
        });
    };
    load();
  }, []);

  return (
    <View>
      <TitleText> teste </TitleText>
    </View>
  );
};

export default Infor;
