let cartData = JSON.parse(localStorage.getItem("cartData")) || []
let quantity = document.getElementById("quantity");
let cartTotal = document.querySelector("#total");
let subtotal = document.getElementById("subtotal");
// let emptyCart = document.getElementById("emptyCart")


   
display(cartData)

function display(data){
    cards.innerHTML = "";

    data.forEach((el)=>{
        let div = document.createElement("div");
        let image = document.createElement("img");
        let brand = document.createElement("h3");
        let category = document.createElement("h4")
        let description = document.createElement("p");
        let price = document.createElement("h3");
        let quantity = document.createElement("span");
        let increment = document.createElement("button");
        let decrement = document.createElement("button");
        let remove = document.createElement("button");

        image.src = el.Image;
        brand.innerText = el.brand;
        category.innerText = el.category;
        description.innerHTML = el.description;
        price.innerText = "$"+ el.price;
        quantity.innerText = el.quantity;
        increment.innerText = "+";
        decrement.innerText = "-";
        remove.innerText = "Remove"

        increment.setAttribute("id", "incrementBtn");
        decrement.setAttribute("id", "decrementBtn");
        remove.setAttribute("id", "removeBtn")

        increment.addEventListener("click", function(){
            if(el.quantity < 5){
                el.quantity++;
                localStorage.setItem("cartData", JSON.stringify(cartData));
                display(cartData)
            }
            
        })

        decrement.addEventListener("click", function(){

            if(el.quantity >= 2){
                el.quantity--;
                localStorage.setItem("cartData", JSON.stringify(cartData));
                display(cartData)
            }
            
        })


        remove.addEventListener("click", function(){
            cartData = cartData.filter(function(element){
                return element.id!=el.id
            });

            localStorage.setItem("cartData", JSON.stringify(cartData));
            display(cartData)
           
        })

        let sum=0;
        for(let i=0; i<cartData.length; i++){
           
                sum+=cartData[i].quantity * cartData[i].price;
                cartTotal.innerText = "$"+ Math.floor(sum);
                subtotal.innerText = "$" + Math.floor(sum);
       
         }

        div.append(image,brand,category,description, price, increment, quantity, decrement, remove);
        cards.append(div)
    })

    quantity.innerText = cartData.length;
}





