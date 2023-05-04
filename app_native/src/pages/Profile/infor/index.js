import axios from "axios";
import { useState, useEffect } from "react";
import { View } from "react-native";
import { Container, TitleText } from "../../../styles/styled-components";

const Infor = () => {
  const [dataApi, setDataApi] = useState();
  console.log(dataApi);

  useEffect(() => {
    const load = async ()  => {
      console.log('loading...');
      await axios
        .get("http://localhost:3000/apiSpotify/user", {
          headers: {
            Authorization: `Bearer AQAwIYEcOXDsp_HuTa2by3Qp6rVpX5jHW8UTj49VLcIMHlNOjwuCwy6e8t0H8fjBWsB6gZ3eDX9ReHy8TtcAizOnh4IivVT59t9qZzyzXQVRdbhMiPr4Vuz8pwtCYmndrKY`,
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
