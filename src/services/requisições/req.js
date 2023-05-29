import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3004";

export class Requisicoes {
  constructor() {}

  //fazendo teste com essa função, por enquanto.
  async autenticacao() {
    try {
      const response = await axios
        .get(`${urlBaseProduct}/apispotify/auth`, {
          headers: {
            Authorization: `${tokenG}`,
          },
        })
        .then((res) => res);
      console.log(response);
      return response;
    } catch (err) {
      return err.response;
    }
  }

  async login({ email, password }) {
    const response = await axios
      .post(`${urlBaseProduct}/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => res)
      .catch((err) => err);
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
