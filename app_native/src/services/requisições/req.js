import axios from "axios"

const urlBaseProduct = "https://appnative-backend.onrender.com"
export const accessToken = {
    token: "",
    getToken: (token) => accessToken.token = token
}


export class Requisicoes {
  constructor(){

  }
  async autenticacao(){
       
      const response = await axios.get(`${urlBaseProduct}/apispotify/auth`, {
          headers:{
            Authorization: `${accessToken.token}`
          }
        }).then( res => res )
        return response
  }

  async connect({email, password}){
    const response = await axios.post(`${urlBaseProduct}/api/conect`,{
      email: email,
      password: password
    }).then( res => res )
    return response
    
  }

  async playlistEmDestaque(){
    const response = await axios.get(`${urlBaseProduct}/apispotify/playlistsEmDestaque`).then( (res ) => res)
    return response
  }
} 

