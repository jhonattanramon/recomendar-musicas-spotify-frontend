const { Console, log } = require("console");
const { json } = require("express");
const { RegisterUser: RegisterModel } = require("../models/RegisterUser");
const axios = require('axios').default



const spotifyController =  {


  token: async (req, res) => {


    console.log('entrou token controler');

    try{
        
      axios.get("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=BR", {
      
      headers:{
    
        Authorization: `BQCZhXQb9n5eVXvyvnGEwwU_IQtzzxQ9H_TIApLXdetsZjggxY7wRz1t2Z_BFwDhm2k39seenURwMiLnEmQdiVApcUzJxifHR0HXeoLiMyRLnJZOwapWDvzV4qwxbB0ZFjguxNJL4UzQ9TIfmjUrWK54IwL1Fg8tmNLvQSsz8DI7F47YcNKFKFbIbma1-hM4guBBNlRTwviH5H9Lzqk`, 
        json: true
      }
    }).then( res => console.log(res))

    

      console.log('token response');
   
      

    }catch(err){
      console.log('err');
    }
  }
}

module.exports = spotifyController;