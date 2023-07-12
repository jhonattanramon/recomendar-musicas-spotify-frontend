import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3004";

export class Requisicoes {
  constructor() {}


  async login() {
    const res = await axios
      .get(`${urlBaseProduct}/api/login`)
      .then((res) => res)
      .catch((err) => err);
    return res;
  }

  async playlistEmDestaque() {
    const res = await axios
      .get(`${urlBaseProduct}/api/destaque`)
      .then((res) => res).catch((err) => err);
      console.log(res);
      return res;
  }

  async tracksPlaylist(urlTrack) {
    const res = await axios
      .get(`${urlBaseProduct}/api/tracksplaylist`, {
        headers: {
          url: urlTrack,
        },
      })
      .then((res) => res);
    return res;
  }

  async track(url) {
    const res = await axios
      .get(`${urlBaseProduct}/api/track`, {
        headers: {
          hreftrack: url,
        },
      })
      .then((res) => res);

    return res;
  }
  async pesquisa({nameTrack }) {
    const res = await axios
      .get(`${urlBaseProduct}/api/pesquisa`, {
        headers: {
          nameTrack: nameTrack,
        },
      })
      .then((res) => res);

    return res;
  }

  async pesquisaGenere({ genere, type }) {
    const res = await axios
      .get(`${urlBaseProduct}/api/pesquisagenere`, {
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
      .get(`${urlBaseProduct}/api/pesquisatrack`, {
        headers: {
          nameTrack: nameTrack,
        },
      })
      .then((res) => res);
    return res;
  }

  async informacoesUserSpotify() {
    const res = await axios
      .get(`${urlBaseProduct}/api/inforsuser`)
      .then((res) => res);
    return res;
  }

  async getGeneros() {
    const res = await axios
      .get(`${urlBaseProduct}/api/obtergeneros`)
      .then((res) => res);
    return res;
  }

  async createPlaylist({name, publicList, description, collaborative}) {
    const res = await axios
      .post(`${urlBaseProduct}/api/createplaylist`, {
        name: name,
        publicList: publicList,
        description: description,
        collaborative: collaborative,
      })
      .then((res) => res);
    return res;
  }



  async adicionarMusicasPlaylist(prop) {
    const res = await axios
      .post(`${urlBaseProduct}/api/adicionarmusicas`, {
        data: prop,
      })
      .then((res) => res);

    const playlist = await axios
      .get(`${urlBaseProduct}/api/playlist`, {
        headers: {
          data: prop.id,
        },
      })
      .then((res) => res);

    return {
      musicaAdicionada: res,
      playlist: playlist,
    };
  }

  async user() {
    const res = await axios
      .get(`${urlBaseProduct}/api/user`)
      .then((res) => res);
    return res
  }

  async playlistUser(){
    const res = await axios
      .get(`${urlBaseProduct}/api/playlistuser`)
      .then((res) => res);
    return res;
  }



}