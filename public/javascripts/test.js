
const base_url = "https://bdayfinder.herokuapp.com/";
let welcomeText = document.querySelector("card-header");
let registeredUsers = document.querySelector(".registeredUsers");
let logoutBtn = document.querySelector(".logout");
let usrName = document.querySelector(".usrName");

fetch(base_url+"/api/v1/userData", {
   'headers': {
     'Authorization': 'Bearer ' + localStorage.getItem('token')
   }
 }).then(result => {
     return result.json();
   }).then(json => {
    
     let currentUsers = json.data.users.length;
     let conectedUser = json.data2.user;
     
     
    usrName.innerHTML=conectedUser.toUpperCase();
    
    let conectedUserID = json.data2.id;
    


    
    let userIds = [];
     json.data.users.forEach((user) =>{
        
        userIds.push(user._id);
        
     });

     let indexOfUserId = userIds.indexOf(conectedUserID);
    
      userIds.splice(indexOfUserId, 1);
      
      registeredUsers.innerHTML = userIds.length;

    
     
   }).catch(err => {
     console.log("⛔️⛔️⛔️");
     console.log(err);
      window.location.href = "/login.html";
    
     
     
   });

   





   logoutBtn.addEventListener("click",()=>{

     window.location.href = "/login.html";
     localStorage.clear();

   });


