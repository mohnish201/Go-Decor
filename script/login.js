    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let form= document.querySelector("form");
    let submit = document.getElementById("submit")


    let UserData = JSON.parse(localStorage.getItem("UserData"));

    let loginData =  []

    form.addEventListener("submit", function(){
        let flag=false;
        UserData.forEach((el)=>{

            let loginobj = {
                name:el.Name
            }
           
            if(email.value === el.Email && password.value === el.Password){
            flag=true;
            window.location.href="index.html"
            }

            loginData.push(loginobj)
            localStorage.setItem("loginData", JSON.stringify(loginData))
        })

        if(flag){
            alert("Login Successfull");
        }
        else{
            alert("Incorrect details");
        }
    })

    

    // export const login = "hii";

    // // File 2: importing the variable
    // import { login } from "./";
    // console.log(myVar); // Output: "Hello, world!"