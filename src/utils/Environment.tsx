let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1" :
    APIURL = "http://localhost:3000"
    break;

  case "lactation-navigation.herokuapp.com" :
    APIURL = "https://lactation-navigation.herokuapp.com" 
    break;

  // default:
  //   APIURL = "http://localhost:3000"
}

export default APIURL;