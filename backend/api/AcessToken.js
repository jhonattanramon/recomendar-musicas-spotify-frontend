
  class ClassToken {
  constructor(AccessToken, refreshToken) { 
    this.AccessToken = AccessToken;
    this.refreshToken = refreshToken;
   
  }

  

 authToken(){

  if( this.AccessToken !== null || this.AccessToken !== undefined ){
     console.log('log auth token' +  this.AccessToken) 
   return this.AccessToken
  }else{
    return console.log('error');
  }
}
  }

module.exports = {ClassToken}; 