
const base_url = "https://bdayfinder.herokuapp.com";
let btnSignup = document.querySelector(".signup").addEventListener("click",(e)=>{
e.preventDefault();
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let Bday = document.querySelector("#date").value;
    let password = document.querySelector("#password").value;
    let userBday = new Date(Bday);
    let formatedDate = userBday.toLocaleDateString("nl-NL", "full");
    let link = document.querySelector(".signup");
    var validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    
console.log(base_url+"/users/signup");
    if(username != "" && password != "" && email != "" && password != "" && Bday != "" ){

if (validEmailRegEx.test(email)) {
     fetch(base_url + "/users/signup", {
       method: "post",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         username: username,
         email: email,
         Bday: Bday,
         password: password,
       }),
     })
       .then((response) => {
         return response.json();
       })
       .then((json) => {
         if (json.status === "success") {
           let feedback = document.querySelector(".alert");
           feedback.textContent = "✅ Sign up complete!";
           feedback.classList.remove("hidden");
           feedback.classList.add("alert-success");
           let token = json.data.token;

           localStorage.setItem("token", token);
           link.setAttribute("href", "/birthday/" + Bday);
           // window.location.href="app.html";
           window.location.href="/birthday/"+Bday+".html";
         }
       });
    } else {
       let feedback = document.querySelector(".alert");
       feedback.textContent =
         "😱 Oops, please enter a valid email.";
       feedback.classList.remove("hidden");
       setTimeout(() => {
         document.querySelector(".alert").classList.add("hidden");
       }, 5000);
       feedback.classList.add("alert-danger");

       link.setAttribute("href", "#");
    }

        
       
    }else{
        console.log("all fileds are required!");
        let feedback = document.querySelector(".alert");
        feedback.textContent =
          "😱 Oops, you need to complete all fields to register.";
        feedback.classList.remove("hidden");
        setTimeout(() => {
          document.querySelector(".alert").classList.add("hidden");
        }, 5000);
        feedback.classList.add("alert-danger");

        link.setAttribute("href", "#");
    }
    
});
