

const base_url = "https://bdayfinder.herokuapp.com";

primus = Primus.connect("https://bdayfinder.herokuapp.com", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});




if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}



/*add a message */

let input = document.querySelector('.message');
let btnSend = document.querySelector(".sendMessage");
btnSend.addEventListener('click', (e)=>{

    let message = input.value;
    if(message !== ""){

        fetch(base_url+"/api/v1/chat", {
   headers: {
       "Content-Type": "application/json",
     'Authorization': 'Bearer ' + localStorage.getItem('token')
   },
     body: JSON.stringify({
       message: message,
     }),
    }).then(result => {
     return result.json();
   }).then(json => {
     console.log(json);
   }).catch(err => {
     console.log("⛔️⛔️⛔️");
      window.location.href = "login.html";
    
     
     
   });

       
    }
    

e.preventDefault();
   

});




 







