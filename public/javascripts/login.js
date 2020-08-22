
let btnLogin = document.querySelector("#btnLogin").addEventListener("click", (e) => {
  e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
let link = document.querySelector(".login");
if (username === "" || password === "") {
  let feedback = document.querySelector(".alert");
  feedback.textContent = "😱 Oops, you need to complete all fields to login.";
  feedback.classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".alert").classList.add("hidden");
  }, 5000);
  link.setAttribute("href", "#");
}else{
   fetch("http://localhost:3000/users/login", {
     method: "post",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       username: username,
       password: password,
     }),
   })
     .then((response) => {
       return response.json();
     })
     .then((json) => {
       console.log(json.status);
       if (json.status === "success") {
         let token = json.data.token;
         let Bday = json.data.birthday;
         localStorage.setItem("token", token);

         link.setAttribute("href", "birthday/" + Bday);
         //window.location.href = "birthday/" + Bday + ".html";
       } else {
         console.log(link);
         console.log(json.status);
         let feedback = document.querySelector(".alert");
         feedback.textContent = "😨Oops, username or password doesnt match";
         feedback.classList.remove("hidden");
         setTimeout(() => {
           document.querySelector(".alert").classList.add("hidden");
         }, 5000);
         link.setAttribute("href", "#");
       }
     });

}
  
  

   

  });