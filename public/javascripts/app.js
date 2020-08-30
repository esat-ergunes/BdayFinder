/* heroku Url*/
const base_url = "https://bdayfinder.herokuapp.com";


 fetch(base_url + "/api/v1/userData", {
   'headers': {
     "Content-Type": "application/json",
   }
 }).then(result => {
     return result.json();
   }).then(json => {
     console.log(json);
   }).catch(err => {
     console.log("⛔️⛔️⛔️");
      window.location.href = "login.html";
    
     
     
   });





