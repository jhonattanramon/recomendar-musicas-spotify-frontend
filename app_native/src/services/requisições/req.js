import axios from "axios";

const urlBaseProduct = "https://appnative-backend.onrender.com";
const urlBaseDev = "http://localhost:3001"
export const accessToken = {
  token: "",
  getToken: (token) => (accessToken.token = token),
};

export class Requisicoes {
  constructor() {}
  async autenticacao() {
    try {
      const response = await axios
        .get(`${urlBaseProduct}/apispotify/auth`, {
          headers: {
            Authorization: `${accessToken.token}`,
          },
        })
        .then((res) => res);
      return response;
    } catch (err) {
      console.log(err)
    }
  }

  async connect({ email, password }) {
    const response = await axios
      .post(`${urlBaseProduct}/api/conect`, {
        email: email,
        password: password,
      })
      .then((res) => console.log(res));
    return response;
  }

  async playlistEmDestaque() {
    const response = await axios
      .get(`${urlBaseProduct}/apispotify/playlistsEmDestaque`)
      .then((res) => res);
    return response;
  }
}
