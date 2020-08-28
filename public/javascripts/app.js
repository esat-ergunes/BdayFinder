
const base_url = "https://bdayfinder.herokuapp.com";
if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

 fetch(base_url + "/api/v1/todos", {
   'headers': {
     'Authorization': 'Bearer ' + localStorage.getItem('token')
   }
 }).then(result => {
     return result.json();
   }).then(json => {
     console.log(json);
   }).catch(err => {
     console.log("⛔️⛔️⛔️");
      window.location.href = "login.html";
    
     
     
   });





