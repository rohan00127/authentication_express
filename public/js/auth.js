
//add users 
const addbutton = document.getElementById("addusers");

addbutton.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
 
  const data = {
    name: name, 
    email: email,
    password : password
}; 
  fetch("/addusers", {
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
        window.location.href = "/ragister";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

