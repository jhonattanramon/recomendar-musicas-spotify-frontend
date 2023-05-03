import axios from "axios";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { Container, TitleText } from "../../../styles/styled-components";

const Infor = () => {
  const [dataApi, setDataApi] = useState();
  console.log(dataApi);

  useEffect(() => {
    const load = async () => {
      console.log('loading...');
      await axios
        .get("http://localhost:3000/apiSpotify/user", {
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
