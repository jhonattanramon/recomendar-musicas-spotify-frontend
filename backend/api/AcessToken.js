const axios = require("axios").default;

let tokenG;

const tokenTst = {
  token: (token) => (tokenG = token),
};

const urlBaseSpotify = "https://api.spotify.com/v1";

const listaDeArtistas = [
  "1a3fr7NdeBT4JlGj6YlbDL",
  "05qCf6M7E7AxizHVmrcPqh",
  "5InVWl8IZB8zFAoNa5roKm",
];

class Requests {
  constructor(token) {
    this.token = token;
  }

  async playlist() {
    try {
      const result = await axios
        .get(`https://api.spotify.com/v1/playlists/37i9dQZF1DX0FOF1IUWK1W`, {
          headers: {
            Authorization: `Bearer ${tokenG}`,
          },
        })
        .then((res) => res.data);

      // console.log("resilt", result);

      return result;
    } catch (err) {
      console.log("playlist error");
    }
  }

  async artistasDoUsuario() {
    try {
      const result = await axios
        .get(`https://api.spotify.com/v1/me/following?type=artist`, {
          headers: {
            Authorization: `Bearer ${tokenG}`,
          },
        })
        .then((res) => res.data);

      console.log(result);
    } catch (err) {
      console.log("errrr");
    }
  }

  async obterVariosArtistas() {
    try {
      const result = await axios
        .get(
          `${urlBaseSpotify}/artists?ids=${listaDeArtistas[0]},${listaDeArtistas[1]},${listaDeArtistas[2]}`,
          {
            headers: {
              Authorization: `Bearer ${tokenG}`,
            },
          }
        )
        .then((res) => res.data);

      return result;
    } catch (err) {
      console.log("errrr");
    }
  }

  async obterGeneros() {
    try {
      const result = await axios
        .get(`${urlBaseSpotify}recommendations/available-genre-seeds`, {
          headers: {
            Authorization: `Bearer ${tokenG}`,
          },
        })
        .then((res) => res.data);
    } catch (err) { console.log('obterGeneros');}
  }
}
module.exports = { Requests, tokenTst };
