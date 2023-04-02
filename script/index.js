
let loginData = JSON.parse(localStorage.getItem("loginData"));



let signupText = document.getElementById("signupText");


loginData.forEach((el)=>{
    signupText.innerText = el.name;
    
     })






