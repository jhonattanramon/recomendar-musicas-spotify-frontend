import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3004";
const urlLanDev = "http://192.168.0.25:3004";

export class Requisicoes {
  async login() {
    const res = await axios
      .get(`${urlLanDev}/api/login`)
      .then((res) => res)
      .catch((err) => err);
    return res;
  }

  async playlistEmDestaque() {
    const res = await axios
      .get(`${urlLanDev}/api/destaque`)
      .then((res) => res).catch((err) => err);
      console.log(res);
      return res;
  }

  async tracksPlaylist(urlTrack) {
    const res = await axios
      .get(`${urlLanDev}/api/tracksplaylist`, {
        headers: {
          url: urlTrack,
        },
      })
      .then((res) => res);
    return res;
  }

  async track(url) {
    const res = await axios
      .get(`${urlLanDev}/api/track`, {
        headers: {
          hreftrack: url,
        },
      })
      .then((res) => res);

    return res;
  }
  async pesquisa(namePlaylist) {
    const res = await axios
      .get(`${urlLanDev}/api/pesquisa`, {
        headers: {
          data: namePlaylist,
        },
      })
      .then((res) => res);
      console.log(res);

    return res;
  }

  async pesquisaGenere({ genere, type }) {
    const res = await axios
      .get(`${urlLanDev}/api/pesquisagenere`, {
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
      .get(`${urlLanDev}/api/pesquisatrack`, {
        headers: {
          nameTrack: nameTrack,
        },
      })
      .then((res) => res);
    return res;
  }

  async informacoesUserSpotify() {
    const res = await axios
      .get(`${urlLanDev}/api/inforsuser`)
      .then((res) => res);
    return res;
  }

  async getGeneros() {
    const res = await axios
      .get(`${urlLanDev}/api/obtergeneros`)
      .then((res) => res);
    return res;
  }

  async createPlaylist({name, publicList, description, collaborative}) {
    const res = await axios
      .post(`${urlLanDev}/api/createplaylist`, {
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
      .post(`${urlLanDev}/api/adicionarmusicas`, {
        data: prop,
      })
      .then((res) => res);

    const playlist = await axios
      .get(`${urlLanDev}/api/playlist`, {
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
      .get(`${urlLanDev}/api/user`)
      .then((res) => res);
    return res
  }

  async playlistUser(){
    const res = await axios
      .get(`${urlLanDev}/api/playlistuser`)
      .then((res) => res);
    return res;
  }



}