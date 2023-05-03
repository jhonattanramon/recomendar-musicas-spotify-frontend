const { Console, log } = require("console");
const { json } = require("express");
const { RegisterUser: RegisterModel } = require("../models/RegisterUser");
const axios = require('axios').default



const spotifyController =  {

  auth: async (req, res, next) => {
      console.log('auth');
    try{
        (window.location.href = "http://localhost:8887")
    }catch(err){
      console.log(err);
    }


  },


  token: async (req, res) => {


    console.log('entrou token controler');

    try{
        
     await axios.get("http://localhost:8887", {
      
      headers:{
    
        Authorization: `Bearer BQBrUf18R0iOttmbIoMhYcO83O5DLqcj6NCpF2H0cBQRwP52hgHkEWVEiVXZZnjFTzQf3PfrHT4X2X7oYYoDKITl6PTtZvtjcc0lOqAYSYElWCfPDq1wdevl4YAhovpk7-sfZPgUiScx4Prfp1yR7J_YZs7B2Fksx9EqmqNpK47Jgwxp90zWzNv7WTVCJ55jdQc4W6molMBwC4rKhk0`, 
        json: true
      }
    }).then( dados => console.log(dados.data))

    

      console.log('token response');
   
      

    }catch(err){
      console.log(err);
    }
  },


  user: async (req, res) => {
    
  
    try{
      console.log('res');

              
      const response = await axios.get("https://api.spotify.com/v1/me", {
      
     headers:{
       Authorization: `${req.headers.authorization}`, 
       json: true
     }
   }).then( dados => dados.data)

   console.log(response);

  res.writeHead(200, { "Content-Type": "application/json"})
  res.send(response)

    }catch(err){
      console.log('err');
    }

  }
}

module.exports = spotifyController;