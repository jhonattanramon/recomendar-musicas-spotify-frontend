import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3004";

export class Requisicoes {
  constructor() {}


  async login({ email, password }) {
    const res = await axios
      .post(`${urlBaseDev}/api/loginuser`, {
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
      .get(`${urlBaseDev}/apispotify/track`, {
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

  async criarPlaylistSPF({name, publicList, description, collaborative}) {
    const res = await axios
      .post(`${urlBaseDev}/apispotify/criarplaylist`, {
        name: name,
        publicList: publicList,
        description: description,
        collaborative: collaborative,
      })
      .then((res) => res);
    return res;
  }

  async createPlaylistAPP({ name, publicList, description, collaborative, image }){
    console.log(publicList);
    const res = await axios
      .post(`${urlBaseDev}/api/createplaylist`, {
        name: name,
        public: publicList,
        description: description,
        collaborative: collaborative,
        image: image,
      })
      .then((res) => res);
    return res
  }

  async adicionarMusicasPlaylist(prop) {
    const res = await axios
      .post(`${urlBaseDev}/apispotify/adicionarmusicas`, {
        data: prop,
      })
      .then((res) => res);

    const playlist = await axios
      .get(`${urlBaseDev}/apispotify/playlist`, {
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
      .get(`${urlBaseDev}/apispotify/user`)
      .then((res) => res);
    return res
  }

  async playlistUser(){
    const res = await axios
      .get(`${urlBaseDev}/apispotify/playlistuser`)
      .then((res) => res);
    console.log(res);
    return res;
  }

  async playlistUser() {
    const res = await axios
      .get(`${urlBaseDev}/apispotify/playlistuser`)
      .then((res) => res);
    console.log(res);
    return res;
  }
}

