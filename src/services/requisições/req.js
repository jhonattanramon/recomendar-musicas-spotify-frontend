import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3004";

export class Requisicoes {
  constructor() {}

  //fazendo teste com essa função, por enquanto.
  async autenticacao() {
    try {
      const res = await axios
        .get(`${urlBaseProduct}/apispotify/auth`, {
          headers: {
            Authorization: `${tokenG}`,
          },
        })
        .then((res) => res);
      return res;
    } catch (err) {
      return err.response;
    }
  }

  async login({ email, password }) {
    const res = await axios
      .post(`${urlBaseProduct}/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => res)
      .catch((err) => err);
    return res;
  }

  async playlistEmDestaque() {
    const res = await axios
      .get(`${urlBaseProduct}/apispotify/playlistsEmDestaque`)
      .then((res) => res);
    return res;
  }

  async tracksPlaylist(urlTrack) {
    const res = await axios
      .get(`${urlBaseProduct}/apispotify/tracksplaylist`, {
        headers: {
          hreftracks: urlTrack,
        },
      })
      .then((res) => res);
    return res;
  }

  async track(url) {
    const res = await axios
      .get(`${urlBaseProduct}/apispotify/track`, {
        headers: {
          hreftrack: url,
        },
      })
      .then((res) => res);

    return res;
  }

  async pesquisa({nameArtist, nameTrack}) {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/pesquisa`, {
        headers: {
          nameTrack: nameTrack,
          nameArtist: nameArtist
        },
      })
      .then((res) => res);
    console.log(res);

    return res;
  }

  async pesquisaGenere({genere, type}){
    console.log(genere);
    const res = await axios
    .get(`${urlBaseDev}/apispotify/pesquisagenere`,{
      headers:{
        genere: genere,
        type: type
      }
    })
    .then( res => res)
    return res
  }

  async informacoesUserSpotify() {
    const res = await axios
      .get(`${urlBaseProduct}/apispotify/user`)
      .then((res) => res);
    return res;
  }
}
