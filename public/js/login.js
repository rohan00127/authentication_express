
//login users 




const loginbtn = document.getElementById("loginbtnuser");

loginbtn.addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("email2").value;
  const password = document.getElementById("pass2").value;
 
  const data = {
    email: email,
    password : password
}; 
  fetch("/loginusers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Convert data to JSON format
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
  
      if(json.result == true){
        window.location.href = "/home";
      }
      else{
        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


