
let form = document.querySelector("form")
let Name = document.getElementById("name")
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword")
let submit = document.getElementById("submit")

let UserData=JSON.parse(localStorage.getItem("UserData")) ||[]


form.addEventListener("submit", function(e){
   e.preventDefault();
    let UserObj={
    Name:Name.value,
    Email:email.value,
    Password:confirmPassword.value
}


   if(Name.value == "" || email.value=="" || password.value==""|| confirmPassword==""){
    alert("Fill all details")
   } 
   
   else if(password.value !== confirmPassword.value){
    alert("Confirm Your Passowrd again")
   }
   else if((checkData(UserData) === true)){
    alert(" Already have account")
   }
   else{
   UserData.push(UserObj);
    localStorage.setItem("UserData", JSON.stringify(UserData));
    alert("Account Created")
    window.location.href="login.html"
    }

})


function checkData(UserData){
    for(let i=0; i<UserData.length; i++){
    if(email.value === UserData[i].Email){
      return true
    }

  }
  return false
}