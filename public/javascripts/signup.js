//const { post, response } = require("../app");
//const passport = require("passport");
//const { json } = require("express");

let btnSignup = document.querySelector(".SignUp").addEventListener("click",()=>{

    let username = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    fetch('http://localhost:3000/users/signup',{
    method:"post",
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        "username":username,
        "password": password
    })
    }).then(response=>{
        return response.json();
    }).then(json=>{
        if(json.status === "success"){
            let feedback = document.querySelector(".alert");
            feedback.textContent="✅ Sign up complete!";
            feedback.classList.remove('hidden');
            feedback.classList.add("alert-success");
            let token = json.data.token;

            localStorage.setItem("token",token);
            window.location.href="app.html";

        }
       
        
       
    });
 if (username || password === "") {
   console.log("all fileds are required!");
   let feedback = document.querySelector(".alert");
   feedback.textContent = "😱 Oops, you need to complete all fields to register.";
    feedback.classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".alert").classList.add("hidden");
    }, 5000);
    feedback.classList.add("alert-danger");
 }
   

});