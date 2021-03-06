const base_url = "https://bdayfinder.herokuapp.com";

primus = Primus.connect("https://bdayfinder.herokuapp.com", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});

primus.on('data',(data)=>{

  if(data.action === "addMessage"){
    appendMessage(data.data);
  }
});


let backBtn = document.querySelector(".backBtn");




if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

/**appned Message */

let appendMessage = (json)=> {  
  //let NewMessage = `<div id="message-right"> Helooooo <strong>you</strong></div>`;
  let NewMessage = document.createElement('div'); // is a node
  NewMessage.id="message";
    NewMessage.innerHTML = `<strong> ${json.data.message.user}: </strong> ${json.data.message.text}`;
document.querySelector(".msgList").appendChild(NewMessage);
  console.log(NewMessage);
  document.querySelector(".msgList").appendChild(NewMessage);
}


/*add a message */

let input = document.querySelector('.message');
let btnSend = document.querySelector(".sendMessage");

btnSend.addEventListener('click', (e)=>{

    let message = input.value;
    if(message !== ""){

        fetch(base_url + "/api/v1/chat", {
          method: "post",
          headers: {
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },body: JSON.stringify({
              text:message
          })
        }).then(result =>{
            return result.json();
        }).then(json =>{
          
         
           input.value = '';
           input.focus();
         
           primus.write({
            "action":"addMessage",
            "data":json,
            "Bday":json.data.message.Bday
           });
           //appendMessage(json);
           //document.querySelector(".msgList").animate({scrollTop:10000000});
           let objDiv = document.querySelector(".msgList");
               //objDiv.scrollTop = objDiv.scrollTo(objDiv.scrollHeight+300);
               objDiv.scrollTo({
                 top: 1900,
                 left: 0,
                 behavior: "smooth",
               });
        }).catch(err =>{
            console.log(err);
        })
       
    }
    

e.preventDefault();
   

});


let getRoomtitle = ()=>{


fetch(base_url + "/api/v1/userData", {
   'headers': {
     'Authorization': 'Bearer ' + localStorage.getItem('token')
   }
 }).then(result => {
     return result.json();
   }).then(json => {
    

     let chatTitle = document.querySelector(".chat-title");
    chatTitle.innerHTML="Room: "+json.data2.Bday;
     
   }).catch(err => {
     console.log("⛔️⛔️⛔️");
     console.log(err);
      window.location.href = "/login.html";
    
     
     
   });
  }

  getRoomtitle();


  

  let getAllmessages = ()=>{


fetch(base_url + "/api/v1/chat", {
   'headers': {
     'Authorization': 'Bearer ' + localStorage.getItem('token')
   }
 }).then(result => {
     return result.json();
   }).then(json => {
    
    let arrayLength = json.messageData.message.length;
    
    console.log(arrayLength);
  
    



    if(arrayLength == 0){
      console.log('there is no messages');
    }else{
      
      
       for (var i = 0; i < arrayLength; i++) {
    
        

    let messageArray = json.messageData.message[i].text;
  
    console.log(messageArray);
    //Do something
      
    let NewMessage = document.createElement('div'); 
  NewMessage.id="message";
    NewMessage.innerHTML = '<strong>'+ json.messageData.message[i].user +': </strong> ' + messageArray ;
document.querySelector(".msgList").appendChild(NewMessage);
  console.log(NewMessage);
  document.querySelector(".msgList").appendChild(NewMessage);

}

    }




     
   }).catch(err => {
     console.log("⛔️⛔️⛔️");
     console.log(err);
      window.location.href = "/login.html";
    
     
     
   });
  }

  getAllmessages();



 backBtn.addEventListener("click", (e) => {
   e.preventDefault();
   window.location.href = "/index.html";
 });
