import { View } from "react-native";
import { Button } from "react-native-paper";
import { Container, Separador } from "../../styles/styled-components";
import Button_Component from "../../components/Button_Component";
import { useState } from "react";
import { set } from "mongoose";
import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const parametros = this.getHashParams();
    this.token = parametros.access_token;
    console.log(this.token);
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.log(this.token);
    return hashParams;
  }

  topTracksLorde = () => {
    axios
      .get(
        "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=BR",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  useRouter = () => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((res) => console.log(res));
  };

  render() {
    return (
      <Container>
        <View>
          <Button_Component
            title="auth"
            funcOnPress={() => (window.location.href = "http://localhost:8887")}
          />

          <Separador />

          <Button_Component
            title="buscar tracks"
            funcOnPress={() => {
              this.topTracksLorde();
            }}
          />
          <Separador />

          <Button_Component
            title="teste router"
            funcOnPress={() => {
              this.useRouter();
            }}
          />
        </View>
      </Container>
    );
  }
}

export default Home;
