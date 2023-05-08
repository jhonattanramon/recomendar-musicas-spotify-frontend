const { Console, log } = require("console");
const { json } = require("express");
const { RegisterUser: RegisterModel } = require("../models/RegisterUser");
const axios = require('axios').default
var $ = require('jquery')
require('dotenv/config')


const spotifyController =  {

  auth: async (req, res, next) => {
      console.log('auth');
    try{
      

      
        /**
         * Obtains parameters from the hash of the URL
         * @return Object
         */
        // function getHashParams() {
        //   var hashParams = {};
        //   var e, r = /([^&;=]+)=?([^&;]*)/g,
        //       q = window.location.hash.substring(1);
        //   while ( e = r.exec(q)) {
        //      hashParams[e[1]] = decodeURIComponent(e[2]);
        //   }
        //   return hashParams;
        // }

        // var userProfileSource = document.getElementById('user-profile-template').innerHTML,
        //     userProfileTemplate = Handlebars.compile(userProfileSource),
        //     userProfilePlaceholder = document.getElementById('user-profile');

        // var oauthSource = document.getElementById('oauth-template').innerHTML,
        //     oauthTemplate = Handlebars.compile(oauthSource),
        //     oauthPlaceholder = document.getElementById('oauth');

       // var params = getHashParams();

        var access_token = params.access_token,
            refresh_token = params.refresh_token,
            error = params.error;

        if (error) {
          alert('There was an error during the authentication');
        } else {
          if (access_token) {
            // render oauth info
            oauthPlaceholder.innerHTML = oauthTemplate({
              access_token: access_token,
              refresh_token: refresh_token
            });

            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  // userProfilePlaceholder.innerHTML = userProfileTemplate(response);
                  res.status(200).json({token: response})

                  $('#login').hide();
                  $('#loggedin').show();
                }
            });
          // } else {
          //     // render initial screen
          //     $('#login').show();
          //     $('#loggedin').hide();
          // }

          // document.getElementById('obtain-new-token').addEventListener('click', function() {
          //   $.ajax({
          //     url: '/refresh_token',
          //     data: {
          //       'refresh_token': refresh_token
          //     }
          //   }).done(function(data) {
          //     access_token = data.access_token;
          //     oauthPlaceholder.innerHTML = oauthTemplate({
          //       access_token: access_token,
          //       refresh_token: refresh_token
          //     });
          //   });
          // }, false);
        }

        
        


    }
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

    console.log(req.headers.authorization);
    
    try{
      console.log('res');
          
     await axios.get("https://api.spotify.com/v1/me", {
      
     headers:{
       Authorization: ``, 
       json: true
     }
   }).then( dados => console.log(dados) )
   console.log(response);

  res.writeHead(200, { "Content-Type": "application/json"})
  res.status(200).send({ res: response})

    }catch(err){
      console.log('err');
    }

  },

  getAllApi: async (req, res) => {

    try{

      

      

      // spotfyApi.setAccessToken(`${req.headers.authorization}`)
      
      // spotfyApi.getArtistAlbums( )

      console.log(req.headers.authorization);

      await axios.get('https://api.spotify.com/v1/me/following?type=artist', {
        headers:{
          Authorization: `Bearer ${req.headers.authorization}`,
          json: true
        }
      }).then( 
        dados => console.log(dados))
      }catch(err){
        console.log('errorrrrr');
      }
  }
}

module.exports = spotifyController;