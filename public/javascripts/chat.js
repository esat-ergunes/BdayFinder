const base_url = "https://bdayfinder.herokuapp.com";

primus = Primus.connect("http://localhost:3000", {
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
let roomTitle = document.querySelector(".chat-title");
btnSend.addEventListener('click', (e)=>{

    let message = input.value;
    if(message !== ""){

       console.log('qsdqsdqs');
        fetch(base_url+"/api/v1/chat", {
          method: "post",
          headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },body: JSON.stringify({
              text:message
          })
        }).then(result =>{
            return result.json();
        }).then(json=>{

        console.log(json);
        console.log(json.data);
        console.log(json.data.Bday);

        let message = `<div id="message-right"> Helooooo <strong>you</strong>
           </div>`;
           input.value = '';
           input.focus();
           document.querySelector(".msgList").insertAdjacentHTML('afterend',message);

        }).catch(err=>{
            console.log(err);
        })
       
    }
    

e.preventDefault();
   

});




 







