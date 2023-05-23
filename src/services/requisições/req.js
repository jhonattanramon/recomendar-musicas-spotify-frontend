import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3002";
let tokenG
export const accessToken = {
  getToken: (token) => 
  {tokenG = token}
};

export class Requisicoes {
  constructor() {}
  async autenticacao() {
    try {
      console.log(tokenG);
      const response = await axios
        .get(`${urlBaseProduct}/apispotify/auth`, {
          headers: {
            Authorization: `${tokenG}`,
          },
        })
        .then((res) => res);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async connect({ email, password }) {
    const response = await axios
      .post(`${urlBaseProduct}/api/conect`, {
        email: email,
        password: password,
      })
      .then((res) => res);
    console.log(response);
    return response;
  }

  async playlistEmDestaque() {
    const response = await axios
      .get(`${urlBaseProduct}/apispotify/playlistsEmDestaque`)
      .then((res) => res);
    return response;
  }

  async tracksPlaylist(urlTrack) {
    const response = await axios
      .get(`${urlBaseDev}/apispotify/tracksplaylist`, {
        headers: {
          hreftracks: urlTrack,
        },
      })
      .then((res) => res);
    console.log(response);
    return response;
  }

  async track(url){
    const response = await axios
    .get(`${urlBaseDev}/apispotify/track`, {
      headers:{
        hreftrack: url
      }
    }).then( res => res)

    console.log(response);

    return response
  }
}
