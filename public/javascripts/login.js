let btnLogin = document.querySelector("#btnLogin").addEventListener("click", (e) => {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    fetch("http://localhost:3000/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    }).then(response => {
        return response.json();
      }).then(json => {
        if (json.status === "success") {
          let token = json.data.token;
          localStorage.setItem("token", token);
          window.location.href = "app.html";
        } else {
          let feedback = document.querySelector(".alert");
          feedback.textContent = "username or password doesnt match";
          feedback.classList.remove("hidden");
           setTimeout(() => {
             document.querySelector(".alert").classList.add("hidden");
           }, 5000);
        }
      })

  });