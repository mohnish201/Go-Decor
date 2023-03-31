    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let form= document.querySelector("form");
    let submit = document.getElementById("submit")


    let UserData = JSON.parse(localStorage.getItem("UserData"));

    form.addEventListener("submit", function(){
        let flag=false;
        UserData.forEach((el)=>{
            if(email.value === el.Email && password.value === el.Password){
            flag=true;
            window.location.href="index.html"
            }
        })

        if(flag){
            alert("Login Successfull");
           
        }
        else{
            alert("Incorrect details");
        }
     
    })
