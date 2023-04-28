const { Console, log } = require("console");
const { json } = require("express");
const { RegisterUser: RegisterModel } = require("../models/RegisterUser");
const axios = require('axios').default



const spotifyController =  {


  token: async (req, res) => {


    console.log('entrou token controler');

    try{
        
     await axios.get("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=BR", {
      
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

              
  //   const response =  await axios.get("https://api.spotify.com/v1/me", {
      
  //    headers:{
  //      Authorization: `Bearer BQDkQxR_qCSOOERs379YJdvo4KJ2T7y2O1cWF5goqxZUMdo4BW9d-2nX5gjdWFI_lKk9_97FUX4wfCzXwqNSWtxKbgXjCiQ7PEeqd1jQAv3ol1QeKgqtyH808z1Bp-uraLX5ZK67D4M41VGsspndGUM2_UdgbYEEwHA0WmqBz_ACAeH5NCItt9hGBeuPpyNI70NDCTcXehD0meJzCzM`, 
  //      json: true
  //    }
  //  }).then( dados => dados.data)
  //  return response


    }catch(err){
      console.log('err');
    }

  }
}

module.exports = spotifyController;