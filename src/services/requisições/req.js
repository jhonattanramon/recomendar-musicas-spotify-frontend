import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3004";

let tokenG;

export const accessToken = {
  getToken: (token) => {
    tokenG = token;
  },
};

export class Requisicoes {
  constructor() {}
  async autenticacao() {
    try {
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
      .get(`${urlBaseProduct}/apispotify/tracksplaylist`, {
        headers: {
          hreftracks: urlTrack,
        },
      })
      .then((res) => res);
    return response;
  }

  async track(url) {
    const response = await axios
      .get(`${urlBaseProduct}/apispotify/track`, {
        headers: {
          hreftrack: url,
        },
      })
      .then((res) => res);

    return response;
  }
}
