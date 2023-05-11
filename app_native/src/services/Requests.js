import axios from "axios";

  let teste;

 const tokenTst = {
  token: (token ) => teste = token
 }

class Requests {
  constructor(token) {
    this.token = token;
  }


  
 

  async playlist() {

    console.log(teste);
    const result = await axios
      .get(`http://localhost:3001/apiSpotify/playlist`, {
        headers: {
          Authorization: `${teste.access_token}`,
        },
      })
      .then((res) => res);

    console.log("resilt", result);

    return result;
  }





}
export { Requests, tokenTst} ;
