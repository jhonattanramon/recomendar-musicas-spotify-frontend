import axios from "axios";
import CriarPlaylist from "../../pages/CriarPlaylist";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3004";

export class Requisicoes {
  constructor() {}

  //fazendo teste com essa função, por enquanto.
  async autenticacao() {
    try {
      const res = await axios
        .get(`${urlBaseDev}/apispotify/auth`, {
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
      .post(`${urlBaseDev}/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => res)
      .catch((err) => err);
    return res;
  }

  async playlistEmDestaque() {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/playlistsEmDestaque`)
      .then((res) => res);
    return res;
  }

  async tracksPlaylist(urlTrack) {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/tracksplaylist`, {
        headers: {
          hreftracks: urlTrack,
        },
      })
      .then((res) => res);
    return res;
  }

  async track(url) {
    const res = await axios
      .get(`${urlBaseDev}/,/track`, {
        headers: {
          hreftrack: url,
        },
      })
      .then((res) => res);

    return res;
  }

  async tracksArtists(id) {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/tracksartist`, {
        headers: {
          id: id,
        },
      })
      .then((res) => res);
    return res;
  }

  async pesquisa({ nameArtist, nameTrack }) {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/pesquisa`, {
        headers: {
          nameTrack: nameTrack,
          nameArtist: nameArtist,
        },
      })
      .then((res) => res);

    return res;
  }

  async pesquisaGenere({ genere, type }) {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/pesquisagenere`, {
        headers: {
          genere: genere,
          type: type,
        },
      })
      .then((res) => res);
    return res;
  }

  async pesquisaTrack(nameTrack) {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/pesquisatrack`, {
        headers: {
          nameTrack: nameTrack,
        },
      })
      .then((res) => res);
    return res;
  }

  async informacoesUserSpotify() {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/user`)
      .then((res) => res);
    return res;
  }

  async getGeneros() {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/obtergeneros`)
      .then((res) => res);
    return res;
  }

  async criarPlaylist(data) {
    const res = await axios
      .post(`${urlBaseDev}/apispotify/criarplaylist`,{
        data: data
      })
      .then((res) => res);
    return res;
  }

  async adicionarMusicasPlaylist(prop){
    console.log(prop.id);
    const playlist = await axios
      .get(`${urlBaseDev}/apispotify/playlist`, {
        headers: {
          data: prop.id,
        },
      })
      .then((res) => res);

    console.log(playlist);

    const res = await axios
      .post(`${urlBaseDev}/apispotify/adicionarmusicas`, {
        data: prop,
      })
      .then((res) => res);
    console.log(res);
    return {
      musicaAdicionada: res,
      playlist: playlist,
    }; 
  }

  async user(){
    const res = await axios
      .get(`${urlBaseDev}/apispotify/user`)
      .then((res) => res);
    console.log(res);
    return res
  }


}

